import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './components/Header.jsx';
import RouteForm from './components/RouteForm.jsx';
import RouteResults from './components/RouteResults.jsx';
import ItineraryDetail from './components/ItineraryDetail.jsx';
import MapView from './components/MapView.jsx';
import ApiKeyModal from './components/ApiKeyModal.jsx';
import RouteShareModal from './components/RouteShareModal.jsx';
import TestReportModal from './components/TestReportModal.jsx';
import SavedTripsModal from './components/SavedTripsModal.jsx';
import OfflineBanner from './components/OfflineBanner.jsx';
import { findCityBusRoutes } from './engine/routePlanner.js';
import { getStoredApiKey } from './engine/tagoApi.js';
import { resolveOrCreateStop } from './data/busStops.js';
import { PRESET_TRIPS } from './data/presetTrips.js';
import { BusRouteAutoUpdater } from './services/busRouteAutoUpdater.js';

export default function App() {
  const [startStopInput, setStartStopInput] = useState("STOP_SEOUL_01"); // 기본: 서울역
  const [endStopInput, setEndStopInput] = useState("STOP_BUSAN_02");    // 기본: 부산역
  const [routeOption, setRouteOption] = useState("FASTEST");
  
  // 현재 local 시각 포맷 (HH:MM)
  const getNowTimeStr = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const [departureTime, setDepartureTime] = useState(getNowTimeStr());
  const [activePresetTrip, setActivePresetTrip] = useState(PRESET_TRIPS[0]);

  const [routes, setRoutes] = useState([]);
  const [selectedRouteId, setSelectedRouteId] = useState(null);
  const [focusedSegmentIndex, setFocusedSegmentIndex] = useState(null);

  // Map location click mode: null | 'START' | 'END'
  const [mapPickMode, setMapPickMode] = useState(null);

  // Modals & Auto-Sync
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isTestReportModalOpen, setIsTestReportModalOpen] = useState(false);
  const [isSavedTripsModalOpen, setIsSavedTripsModalOpen] = useState(false);
  const [isApiKeySet, setIsApiKeySet] = useState(Boolean(getStoredApiKey()));
  const [syncStatusText, setSyncStatusText] = useState("🔄 국토교통부 TAGO API 버스 노선 개편 및 전국 정류장 자동 반영 엔진 가동 중 (실시간 노드화 100% 활성)");
  const [isSyncing, setIsSyncing] = useState(false);

  // Map Travel Simulation state
  const [simStepIndex, setSimStepIndex] = useState(0);
  const [simProgressRatio, setSimProgressRatio] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [simSpeed, setSimSpeed] = useState(1);
  const simIntervalRef = useRef(null);

  const resetSim = useCallback(() => {
    setIsPlaying(false);
    setSimStepIndex(0);
    setSimProgressRatio(0);
  }, []);

  const handleSearchRoutes = useCallback((customStart, customEnd, customTime) => {
    const sInput = customStart !== undefined ? customStart : startStopInput;
    const eInput = customEnd !== undefined ? customEnd : endStopInput;
    const timeStr = customTime !== undefined ? customTime : departureTime;

    const res = findCityBusRoutes(sInput, eInput, routeOption, timeStr);
    const validRoutes = Array.isArray(res) ? res : [];
    setRoutes(validRoutes);

    if (validRoutes.length > 0 && validRoutes[0]) {
      setSelectedRouteId(validRoutes[0].id);
    } else {
      setSelectedRouteId(null);
    }
    setFocusedSegmentIndex(null);
    resetSim();
  }, [startStopInput, endStopInput, routeOption, departureTime, resetSim]);

  useEffect(() => {
    BusRouteAutoUpdater.init();
    handleSearchRoutes();
  }, []);

  const handleManualSync = async () => {
    setIsSyncing(true);
    setSyncStatusText("⏳ 국토교통부 버스 노선 개편안 및 신설 정류장 실시간 수신 중...");
    const res = await BusRouteAutoUpdater.fetchLatestRouteUpdates();
    setIsSyncing(false);
    if (res.success) {
      setSyncStatusText(`✅ ${res.message} (최종 수신: ${res.timestamp})`);
      handleSearchRoutes();
    } else {
      setSyncStatusText(`⚠️ 동기화 실패: ${res.message}`);
    }
  };

  const handleSelectPreset = (preset) => {
    setActivePresetTrip(preset);
    if (!preset) return;
    setStartStopInput(preset.startStopId);
    setEndStopInput(preset.endStopId);
    handleSearchRoutes(preset.startStopId, preset.endStopId, departureTime);
  };

  const handleMapLocationSelect = useCallback((arg1, arg2, arg3, arg4) => {
    let lat, lng, name, mode;

    if (typeof arg1 === 'object' && arg1 !== null) {
      lat = Number(arg1.lat);
      lng = Number(arg1.lng);
      name = arg1.name || arg1.placeName;
      mode = arg2 || mapPickMode || 'START';
    } else {
      lat = Number(arg1);
      lng = Number(arg2);
      name = arg3;
      mode = arg4 || mapPickMode || 'START';
    }

    if (isNaN(lat) || isNaN(lng)) return;

    // Build a minimal stop object with coords — routePlanner.findCityBusRoutes
    // already calls findNearestRealBusStop internally, so we just need valid coords.
    const coordsObj = { lat, lng, name: name || `찍은 위치 (${lat.toFixed(4)}, ${lng.toFixed(4)})` };
    const customStop = resolveOrCreateStop(name || null, coordsObj);
    if (!customStop) return;

    if (mode === 'START') {
      setStartStopInput(customStop);
      setMapPickMode('END');
      // Use customStop for start, keep current endStopInput from state
      handleSearchRoutes(customStop, undefined, departureTime);
    } else {
      setEndStopInput(customStop);
      setMapPickMode(null);
      // Use customStop for end, keep current startStopInput from state
      handleSearchRoutes(undefined, customStop, departureTime);
    }
  }, [mapPickMode, departureTime, handleSearchRoutes]);

  const toggleMapPickMode = (mode) => {
    setMapPickMode(mode);
    if (mode) {
      const mapEl = document.getElementById('map-container-id');
      if (mapEl) {
        mapEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleFocusSegmentOnMap = (segIndex) => {
    setFocusedSegmentIndex(segIndex);
    const mapEl = document.getElementById('map-container-id');
    if (mapEl) {
      mapEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedRoute = (Array.isArray(routes) && routes.length > 0)
    ? (routes.find(r => r && r.id === selectedRouteId) || routes[0])
    : null;

  // Simulation timer loop
  useEffect(() => {
    if (!isPlaying || !selectedRoute || !selectedRoute.segments || selectedRoute.segments.length === 0) {
      clearInterval(simIntervalRef.current);
      return;
    }

    const intervalMs = Math.max(50, 200 / simSpeed);

    simIntervalRef.current = setInterval(() => {
      setSimProgressRatio((prevRatio) => {
        const nextRatio = prevRatio + 0.08;
        if (nextRatio >= 1) {
          setSimStepIndex((prevStep) => {
            const nextStep = prevStep + 1;
            if (nextStep >= selectedRoute.segments.length) {
              setIsPlaying(false);
              return 0;
            }
            return nextStep;
          });
          return 0;
        }
        return nextRatio;
      });
    }, intervalMs);

    return () => clearInterval(simIntervalRef.current);
  }, [isPlaying, simSpeed, selectedRoute]);


  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSelectSampleRoute = (sample) => {
    setStartStopInput(sample.start);
    setEndStopInput(sample.end);
    handleSearchRoutes(sample.start, sample.end, departureTime);
  };

  return (
    <div className="app-layout">
      <Header
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        isApiKeySet={isApiKeySet}
        onOpenTestReportModal={() => setIsTestReportModalOpen(true)}
        onOpenSavedTrips={() => setIsSavedTripsModalOpen(true)}
      />

      <main className="app-main-content">
        {/* 오프라인 상태 배너 및 PWA 설치 안내 */}
        <OfflineBanner onOpenSavedTrips={() => setIsSavedTripsModalOpen(true)} />

        {/* 실시간 노선 개편 및 버스 정류장 자동 반영 알림 바 */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '10px',
          padding: '10px 16px',
          margin: '0 0 16px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          fontSize: '0.85rem',
          color: '#e2e8f0'
        }}>
          <span>{syncStatusText}</span>
          <button
            onClick={handleManualSync}
            disabled={isSyncing}
            style={{
              background: '#0284c7',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {isSyncing ? "동기화 중..." : "🔄 실시간 노선 개편 동기화"}
          </button>
        </div>

        {/* 1. Search Controls */}
        <section className="form-section">
          <RouteForm
            startStopInput={startStopInput}
            setStartStopInput={setStartStopInput}
            endStopInput={endStopInput}
            setEndStopInput={setEndStopInput}
            routeOption={routeOption}
            setRouteOption={setRouteOption}
            departureTime={departureTime}
            setDepartureTime={setDepartureTime}
            onSearch={() => {
              setActivePresetTrip(null);
              handleSearchRoutes();
            }}
            onSelectPreset={handleSelectPreset}
            mapPickMode={mapPickMode}
            setMapPickMode={toggleMapPickMode}
          />
        </section>

        {/* 2. Route Result Selection Cards */}
        <section className="results-section">
          <RouteResults
            routes={routes}
            selectedRouteId={selectedRouteId}
            onSelectRoute={(r) => {
              if (r && r.id) {
                setSelectedRouteId(r.id);
                resetSim();
              }
            }}
            activePresetTrip={activePresetTrip}
          />
        </section>

        {/* 3. Full-Width Clean Spacious Map & Simulator */}
        <section className="map-section">
          <MapView
            route={selectedRoute}
            simStepIndex={simStepIndex}
            simProgressRatio={simProgressRatio}
            isPlaying={isPlaying}
            onTogglePlay={togglePlay}
            onResetSim={resetSim}
            simSpeed={simSpeed}
            setSimSpeed={setSimSpeed}
            mapPickMode={mapPickMode}
            setMapPickMode={toggleMapPickMode}
            onMapLocationSelect={handleMapLocationSelect}
            focusedSegmentIndex={focusedSegmentIndex}
            isFullTabMode={true}
          />
        </section>

        {/* 4. Detailed Itinerary Timeline */}
        {selectedRoute && (
          <section className="timeline-section">
            <ItineraryDetail
              route={selectedRoute}
              onShareRoute={() => setIsShareModalOpen(true)}
              activePresetTrip={activePresetTrip}
              onFocusSegmentOnMap={handleFocusSegmentOnMap}
            />
          </section>
        )}
      </main>

      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => {
          setIsApiKeyModalOpen(false);
          setIsApiKeySet(Boolean(getStoredApiKey()));
        }}
      />

      <RouteShareModal
        route={selectedRoute}
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      <TestReportModal
        isOpen={isTestReportModalOpen}
        onClose={() => setIsTestReportModalOpen(false)}
        onSelectSampleRoute={handleSelectSampleRoute}
      />

      <SavedTripsModal
        isOpen={isSavedTripsModalOpen}
        onClose={() => setIsSavedTripsModalOpen(false)}
        currentRoute={selectedRoute}
      />
    </div>
  );
}
