import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Play, Pause, RotateCcw, FastForward, Bus, MapPin, MousePointer, CheckCircle2, Flag } from 'lucide-react';
import { reverseGeocodeKorean } from '../utils/geoUtils.js';

export default function MapView({
  route,
  simStepIndex,
  simProgressRatio,
  isPlaying,
  onTogglePlay,
  onResetSim,
  simSpeed,
  setSimSpeed,
  mapPickMode,
  setMapPickMode,
  onMapLocationSelect,
  focusedSegmentIndex,
  isFullTabMode
}) {
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef([]);
  const polylineRef = useRef(null);
  const busMarkerRef = useRef(null);
  const clickedPinRef = useRef(null);

  const [toastMsg, setToastMsg] = useState(null);

  const onMapLocationSelectRef = useRef(onMapLocationSelect);
  const mapPickModeRef = useRef(mapPickMode);

  useEffect(() => {
    onMapLocationSelectRef.current = onMapLocationSelect;
  }, [onMapLocationSelect]);

  useEffect(() => {
    mapPickModeRef.current = mapPickMode;
  }, [mapPickMode]);

  // Initialize Leaflet map
  useEffect(() => {
    if (!mapRef.current) return;

    if (!leafletMapRef.current) {
      if (mapRef.current._leaflet_id) {
        mapRef.current._leaflet_id = null;
      }

      const map = L.map(mapRef.current, {
        zoomControl: true
      }).setView([36.3, 127.8], 7);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18
      }).addTo(map);

      map.on('click', async (e) => {
        const { lat, lng } = e.latlng;
        const currentMode = mapPickModeRef.current || 'START';

        if (clickedPinRef.current) {
          clickedPinRef.current.remove();
        }

        const isStart = currentMode === 'START';
        const pinHtml = `<div class="map-pin ${isStart ? 'pin-start' : 'pin-end'}">${isStart ? '🚩 출발 지정' : '🏁 도착 지정'}</div>`;
        const customIcon = L.divIcon({
          html: pinHtml,
          className: 'custom-leaflet-icon',
          iconSize: [130, 38],
          iconAnchor: [65, 19]
        });

        clickedPinRef.current = L.marker([lat, lng], { icon: customIcon }).addTo(map);

        const placeName = await reverseGeocodeKorean(lat, lng);

        setToastMsg(`📌 [${placeName}]가 ${isStart ? '출발지' : '도착지'}로 설정되었습니다!`);
        setTimeout(() => setToastMsg(null), 3000);

        if (onMapLocationSelectRef.current) {
          onMapLocationSelectRef.current({ lat, lng, name: placeName }, currentMode);
        }
      });

      leafletMapRef.current = map;
    }

    setTimeout(() => {
      if (leafletMapRef.current) {
        leafletMapRef.current.invalidateSize();
      }
    }, 200);

  }, [isFullTabMode]);

  useEffect(() => {
    if (!leafletMapRef.current) return;
    const container = leafletMapRef.current.getContainer();
    if (mapPickMode) {
      container.style.cursor = 'crosshair';
    } else {
      container.style.cursor = '';
    }
  }, [mapPickMode]);

  // Clean Route Markers: ONLY Start Pin & End Pin
  useEffect(() => {
    const map = leafletMapRef.current;
    if (!map) return;

    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];
    if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }
    if (busMarkerRef.current) {
      busMarkerRef.current.remove();
      busMarkerRef.current = null;
    }

    if (!route || !Array.isArray(route.segments) || route.segments.length === 0) return;

    const latLngs = [];

    route.segments.forEach((seg, idx) => {
      const fromLatLng = Array.isArray(seg.fromCoords) && seg.fromCoords.length === 2 && !isNaN(seg.fromCoords[0])
        ? seg.fromCoords : [37.5559, 126.9723];
      const toLatLng = Array.isArray(seg.toCoords) && seg.toCoords.length === 2 && !isNaN(seg.toCoords[0])
        ? seg.toCoords : [35.1152, 129.0422];

      if (idx === 0) latLngs.push(fromLatLng);
      latLngs.push(toLatLng);

      const isStart = idx === 0;
      const isEnd = idx === route.segments.length - 1;

      if (isStart) {
        const startIcon = L.divIcon({
          html: `<div class="map-pin pin-start">🚩 출발: ${seg.fromStop}</div>`,
          className: 'custom-leaflet-icon',
          iconSize: [140, 36],
          iconAnchor: [70, 18]
        });
        const mStart = L.marker(fromLatLng, { icon: startIcon }).addTo(map);
        mStart.bindPopup(`<b>🚩 출발: ${seg.fromStop}</b><br/>${seg.routeNo} 탑승 (${seg.depTime})`);
        markersRef.current.push(mStart);
      }

      if (isEnd) {
        const endIcon = L.divIcon({
          html: `<div class="map-pin pin-end">🏁 도착: ${seg.toStop}</div>`,
          className: 'custom-leaflet-icon',
          iconSize: [140, 36],
          iconAnchor: [70, 18]
        });
        const mEnd = L.marker(toLatLng, { icon: endIcon }).addTo(map);
        mEnd.bindPopup(`<b>🏁 최종 도착: ${seg.toStop}</b><br/>시내버스 완주! (${seg.arrTime})`);
        markersRef.current.push(mEnd);
      }
    });

    if (latLngs.length > 0) {
      const polyline = L.polyline(latLngs, {
        color: '#2563eb',
        weight: 5,
        opacity: 0.85,
        dashArray: '8, 6'
      }).addTo(map);
      polylineRef.current = polyline;

      const bounds = L.latLngBounds(latLngs);
      map.fitBounds(bounds, { padding: [60, 60] });

      const busIcon = L.divIcon({
        html: `<div class="moving-bus-marker">🚌</div>`,
        className: 'custom-bus-icon',
        iconSize: [36, 36],
        iconAnchor: [18, 18]
      });

      const initialPos = latLngs[0];
      const busMarker = L.marker(initialPos, { icon: busIcon }).addTo(map);
      busMarkerRef.current = busMarker;
    }

  }, [route]);

  // Focus specific segment on map
  useEffect(() => {
    const map = leafletMapRef.current;
    if (!map || !route || !Array.isArray(route.segments)) return;

    if (focusedSegmentIndex !== null && focusedSegmentIndex !== undefined && route.segments[focusedSegmentIndex]) {
      const seg = route.segments[focusedSegmentIndex];
      const bounds = L.latLngBounds([seg.fromCoords, seg.toCoords]);
      map.flyToBounds(bounds, { padding: [100, 100], maxZoom: 14 });
    }
  }, [focusedSegmentIndex, route]);

  // Update simulation bus position
  useEffect(() => {
    if (!route || !Array.isArray(route.segments) || !busMarkerRef.current) return;

    const currentSeg = route.segments[simStepIndex];
    if (!currentSeg) return;

    const fromCoords = Array.isArray(currentSeg.fromCoords) ? currentSeg.fromCoords : [37.5559, 126.9723];
    const toCoords = Array.isArray(currentSeg.toCoords) ? currentSeg.toCoords : [35.1152, 129.0422];

    const [l1, g1] = fromCoords;
    const [l2, g2] = toCoords;

    const curLat = l1 + (l2 - l1) * simProgressRatio;
    const curLng = g1 + (g2 - g1) * simProgressRatio;

    busMarkerRef.current.setLatLng([curLat, curLng]);
  }, [simStepIndex, simProgressRatio, route]);

  return (
    <div className="map-view-container" id="map-container-id">
      <div className="map-header-bar">
        <div className="map-title-row">
          <span className="map-title"><Bus size={18} /> 실시간 시내버스 노선지도 & 시뮬레이터</span>
          
          <div className="map-pick-actions-group">
            <button
              type="button"
              className={`pick-map-btn start-pick ${mapPickMode === 'START' ? 'active' : ''}`}
              onClick={() => setMapPickMode(mapPickMode === 'START' ? null : 'START')}
              title="지도에서 출발지 위치 클릭 지정"
            >
              <Flag size={13} />
              <span>{mapPickMode === 'START' ? '🚩 출발지 찍는 중...' : '🚩 출발지 지도 찍기'}</span>
            </button>

            <button
              type="button"
              className={`pick-map-btn end-pick ${mapPickMode === 'END' ? 'active' : ''}`}
              onClick={() => setMapPickMode(mapPickMode === 'END' ? null : 'END')}
              title="지도에서 도착지 위치 클릭 지정"
            >
              <Flag size={13} />
              <span>{mapPickMode === 'END' ? '🏁 도착지 찍는 중...' : '🏁 도착지 지도 찍기'}</span>
            </button>
          </div>
        </div>

        {route && (
          <div className="sim-controls-inline">
            <button className="sim-btn" onClick={onTogglePlay}>
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? '일시정지' : '이동 시뮬레이션'}</span>
            </button>

            <button className="sim-btn-icon" onClick={onResetSim} title="처음부터 재생">
              <RotateCcw size={14} />
            </button>

            <div className="speed-selector">
              <FastForward size={14} />
              <select value={simSpeed} onChange={(e) => setSimSpeed(Number(e.target.value))}>
                <option value={1}>1x 속도</option>
                <option value={2}>2x 속도</option>
                <option value={5}>5x 속도</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {mapPickMode && (
        <div className={`map-pick-banner ${mapPickMode === 'START' ? 'banner-start' : 'banner-end'}`}>
          <MapPin size={15} />
          <span>
            지도상에 원하시는 위치를 <strong>클릭</strong>하면 해당 장소가 <strong>[{mapPickMode === 'START' ? '🚩 출발지' : '🏁 도착지'}]</strong>로 자동 등록됩니다.
          </span>
          <button className="banner-close" onClick={() => setMapPickMode(null)}>선택 완료/취소</button>
        </div>
      )}

      {toastMsg && (
        <div className="map-toast-notification">
          <CheckCircle2 size={16} />
          <span>{toastMsg}</span>
        </div>
      )}

      <div ref={mapRef} className="leaflet-map-element"></div>

      {route && route.segments && (
        <div className="sim-progress-bar-wrapper">
          <div
            className="sim-progress-fill"
            style={{
              width: `${((simStepIndex + simProgressRatio) / route.segments.length) * 100}%`
            }}
          ></div>
          <span className="sim-status-label">
            현재 탑승 중: <strong>{route.segments[simStepIndex]?.routeNo}</strong> ({simStepIndex + 1}/{route.segments.length} 단계)
          </span>
        </div>
      )}
    </div>
  );
}
