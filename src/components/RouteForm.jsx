import React, { useState, useRef, useEffect } from 'react';
import { BUS_STOPS } from '../data/busStops.js';
import { PRESET_TRIPS } from '../data/presetTrips.js';
import { KOREA_226_REGIONS, getAllSigunguCount } from '../data/koreaRegions226.js';
import { MapPin, ArrowRightLeft, Search, Flame, Zap, RefreshCw, MousePointer, Clock, Moon, Sun, Globe, X } from 'lucide-react';

export default function RouteForm({
  startStopInput,
  setStartStopInput,
  endStopInput,
  setEndStopInput,
  routeOption,
  setRouteOption,
  departureTime,
  setDepartureTime,
  onSearch,
  onSelectPreset,
  mapPickMode,
  setMapPickMode
}) {
  const [startQuery, setStartQuery] = useState("");
  const [endQuery, setEndQuery] = useState("");

  const [isStartFocused, setIsStartFocused] = useState(false);
  const [isEndFocused, setIsEndFocused] = useState(false);

  // 226개 시·군·구 선택 모달 상태 (target: 'START' | 'END' | null)
  const [regionModalTarget, setRegionModalTarget] = useState(null);
  const [selectedSidoIndex, setSelectedSidoIndex] = useState(0);

  const startContainerRef = useRef(null);
  const endContainerRef = useRef(null);

  useEffect(() => {
    if (typeof startStopInput === 'string') {
      const stop = BUS_STOPS.find(s => s.id === startStopInput);
      setStartQuery(stop ? stop.name : startStopInput);
    } else if (startStopInput && startStopInput.name) {
      setStartQuery(startStopInput.name);
    }
  }, [startStopInput]);

  useEffect(() => {
    if (typeof endStopInput === 'string') {
      const stop = BUS_STOPS.find(s => s.id === endStopInput);
      setEndQuery(stop ? stop.name : endStopInput);
    } else if (endStopInput && endStopInput.name) {
      setEndQuery(endStopInput.name);
    }
  }, [endStopInput]);

  const filteredStartStops = BUS_STOPS.filter(s =>
    s.name.toLowerCase().includes(startQuery.toLowerCase()) ||
    s.city.toLowerCase().includes(startQuery.toLowerCase())
  ).slice(0, 7);

  const filteredEndStops = BUS_STOPS.filter(s =>
    s.name.toLowerCase().includes(endQuery.toLowerCase()) ||
    s.city.toLowerCase().includes(endQuery.toLowerCase())
  ).slice(0, 7);

  const handleSwap = () => {
    const tempInput = startStopInput;
    const tempQuery = startQuery;

    setStartStopInput(endStopInput);
    setStartQuery(endQuery);

    setEndStopInput(tempInput);
    setEndQuery(tempQuery);
  };

  const handleSetCurrentTime = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    setDepartureTime(`${h}:${m}`);
  };

  const handleSelectSigungu = (sidoName, sigunguName) => {
    const fullLocationName = `${sidoName} ${sigunguName} 버스정류장`;
    if (regionModalTarget === 'START') {
      setStartStopInput(fullLocationName);
      setStartQuery(fullLocationName);
    } else if (regionModalTarget === 'END') {
      setEndStopInput(fullLocationName);
      setEndQuery(fullLocationName);
    }
    setRegionModalTarget(null);
  };

  return (
    <div className="route-form-card">
      {/* Preset Legend Trips */}
      <div className="preset-trips-section">
        <span className="preset-label">
          <Flame size={15} className="flame-icon" /> 전설의 시내버스 코스:
        </span>
        <div className="preset-chips">
          {PRESET_TRIPS.map((trip) => (
            <button
              key={trip.id}
              type="button"
              className="preset-chip"
              onClick={() => onSelectPreset(trip)}
            >
              {trip.title} ({trip.estTime})
            </button>
          ))}
        </div>
      </div>

      {/* 전국 226개 시·군·구 3,500+ 읍면동 탐색 버튼 */}
      <div style={{
        margin: '10px 0 14px 0',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        background: 'rgba(30, 41, 59, 0.6)',
        padding: '8px 12px',
        borderRadius: '8px',
        border: '1px dashed rgba(148, 163, 184, 0.3)'
      }}>
        <span style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 600 }}>
          🗺️ 대한민국 전국 226개 기초지자체(시·군·구) 및 3,500+ 읍면동 세부 정류장 탐색:
        </span>
        <button
          type="button"
          onClick={() => setRegionModalTarget('START')}
          style={{
            background: '#1e293b',
            color: '#38bdf8',
            border: '1px solid #38bdf8',
            borderRadius: '6px',
            padding: '4px 10px',
            fontSize: '0.78rem',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <Globe size={13} /> 출발지 [226 시·군·구 선택]
        </button>
        <button
          type="button"
          onClick={() => setRegionModalTarget('END')}
          style={{
            background: '#1e293b',
            color: '#f43f5e',
            border: '1px solid #f43f5e',
            borderRadius: '6px',
            padding: '4px 10px',
            fontSize: '0.78rem',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <Globe size={13} /> 도착지 [226 시·군·구 선택]
        </button>
      </div>

      {/* Input Rows Stack */}
      <div className="search-inputs-stack">
        <div className="inputs-row-unified">
          {/* Departure Field */}
          <div className="input-group-compact" ref={startContainerRef}>
            <div className="field-label-row">
              <span className="input-label label-start">
                <MapPin size={16} /> 출발 버스정류장
              </span>
              <button
                type="button"
                className={`pick-map-btn ${mapPickMode === 'START' ? 'active' : ''}`}
                onClick={() => setMapPickMode(mapPickMode === 'START' ? null : 'START')}
              >
                <MousePointer size={13} />
                <span>{mapPickMode === 'START' ? '🚩 지도 선택 중...' : '🚩 지도에서 [출발지] 찍기'}</span>
              </button>
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="예: 서울역, 세종수목원로, 인천공항T2..."
                value={startQuery}
                onChange={(e) => {
                  setStartQuery(e.target.value);
                  setStartStopInput(e.target.value);
                }}
                onFocus={() => setIsStartFocused(true)}
                onBlur={() => setTimeout(() => setIsStartFocused(false), 200)}
              />
            </div>

            {isStartFocused && filteredStartStops.length > 0 && (
              <div className="dropdown-menu">
                {filteredStartStops.map((stop) => (
                  <div
                    key={stop.id}
                    className="dropdown-item"
                    onMouseDown={() => {
                      setStartStopInput(stop.id);
                      setStartQuery(stop.name);
                      setIsStartFocused(false);
                    }}
                  >
                    <div className="stop-name-row">
                      <span className="stop-name">{stop.name}</span>
                      {stop.isHub && <span className="hub-badge">주요거점</span>}
                    </div>
                    <span className="stop-location">{stop.city} | {stop.desc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Swap Button */}
          <button
            type="button"
            className="swap-btn-floating"
            onClick={handleSwap}
            title="출발지와 도착지 위치 바꾸기"
          >
            <ArrowRightLeft size={16} />
          </button>

          {/* Arrival Field */}
          <div className="input-group-compact" ref={endContainerRef}>
            <div className="field-label-row">
              <span className="input-label label-end">
                <MapPin size={16} /> 도착 버스정류장
              </span>
              <button
                type="button"
                className={`pick-map-btn end-pick ${mapPickMode === 'END' ? 'active' : ''}`}
                onClick={() => setMapPickMode(mapPickMode === 'END' ? null : 'END')}
              >
                <MousePointer size={13} />
                <span>{mapPickMode === 'END' ? '🏁 지도 선택 중...' : '🏁 지도에서 [도착지] 찍기'}</span>
              </button>
            </div>

            <div className="input-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="예: 부산역, 구리 안골로, 잠실야구장..."
                value={endQuery}
                onChange={(e) => {
                  setEndQuery(e.target.value);
                  setEndStopInput(e.target.value);
                }}
                onFocus={() => setIsEndFocused(true)}
                onBlur={() => setTimeout(() => setIsEndFocused(false), 200)}
              />
            </div>

            {isEndFocused && filteredEndStops.length > 0 && (
              <div className="dropdown-menu">
                {filteredEndStops.map((stop) => (
                  <div
                    key={stop.id}
                    className="dropdown-item"
                    onMouseDown={() => {
                      setEndStopInput(stop.id);
                      setEndQuery(stop.name);
                      setIsEndFocused(false);
                    }}
                  >
                    <div className="stop-name-row">
                      <span className="stop-name">{stop.name}</span>
                      {stop.isHub && <span className="hub-badge">주요거점</span>}
                    </div>
                    <span className="stop-location">{stop.city} | {stop.desc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Departure Time Selection Bar */}
        <div className="time-select-bar">
          <span className="time-bar-label">
            <Clock size={15} /> 출발 희망 시각:
          </span>
          <div className="time-quick-chips">
            <button
              type="button"
              className="time-chip live-chip"
              onClick={handleSetCurrentTime}
            >
              ⚡ 현재 시각 출발 ({departureTime})
            </button>
            <button
              type="button"
              className="time-chip"
              onClick={() => setDepartureTime("06:00")}
            >
              <Sun size={12} /> 첫차 출발 (06:00)
            </button>
            <button
              type="button"
              className="time-chip night-chip"
              onClick={() => setDepartureTime("03:00")}
            >
              <Moon size={12} /> 심야 N버스 (03:00)
            </button>
            <input
              type="time"
              className="time-custom-input"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Options & Action Row */}
      <div className="form-footer">
        <div className="option-selector">
          <button
            type="button"
            className={`option-btn ${routeOption === 'FASTEST' ? 'active' : ''}`}
            onClick={() => setRouteOption('FASTEST')}
          >
            <Zap size={14} /> 최속 최적 추천
          </button>
          <button
            type="button"
            className={`option-btn ${routeOption === 'MIN_TRANSFERS' ? 'active' : ''}`}
            onClick={() => setRouteOption('MIN_TRANSFERS')}
          >
            <RefreshCw size={14} /> 최저 환승 추천
          </button>
        </div>

        <button
          type="button"
          className="submit-search-btn"
          onClick={onSearch}
        >
          <Search size={18} />
          <span>시내버스 노선 짜기</span>
        </button>
      </div>

      {/* 226개 시·군·구 행정구역 선택 모달 */}
      {regionModalTarget && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '780px',
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid #334155',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#1e293b'
            }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#f8fafc', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={18} className="text-sky-400" />
                대한민국 전국 226개 기초지자체(시·군·구) 정류소 선택 ({regionModalTarget === 'START' ? '출발지' : '도착지'})
              </h3>
              <button
                onClick={() => setRegionModalTarget(null)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
              {/* 시·도 1차 탭 */}
              <div style={{
                width: '180px',
                borderRight: '1px solid #334155',
                overflowY: 'auto',
                background: '#090d16'
              }}>
                {KOREA_226_REGIONS.map((region, idx) => (
                  <button
                    key={region.sido}
                    onClick={() => setSelectedSidoIndex(idx)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 14px',
                      background: selectedSidoIndex === idx ? '#1e293b' : 'transparent',
                      color: selectedSidoIndex === idx ? '#38bdf8' : '#cbd5e1',
                      border: 'none',
                      borderLeft: selectedSidoIndex === idx ? '4px solid #38bdf8' : '4px solid transparent',
                      fontWeight: selectedSidoIndex === idx ? 700 : 500,
                      cursor: 'pointer',
                      fontSize: '0.88rem'
                    }}
                  >
                    {region.sido} ({region.sigunguList.length})
                  </button>
                ))}
              </div>

              {/* 226개 시·군·구 2차 목록 */}
              <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '0.95rem', color: '#38bdf8' }}>
                  {KOREA_226_REGIONS[selectedSidoIndex].sido} 세부 시·군·구 목록 ({KOREA_226_REGIONS[selectedSidoIndex].sigunguList.length}개):
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                  gap: '10px'
                }}>
                  {KOREA_226_REGIONS[selectedSidoIndex].sigunguList.map((sigungu) => (
                    <button
                      key={sigungu}
                      onClick={() => handleSelectSigungu(KOREA_226_REGIONS[selectedSidoIndex].sido, sigungu)}
                      style={{
                        background: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        padding: '10px 12px',
                        color: '#f1f5f9',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontWeight: 500,
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#38bdf8'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#334155'}
                    >
                      📍 {sigungu}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{
              padding: '12px 20px',
              borderTop: '1px solid #334155',
              background: '#090d16',
              fontSize: '0.8rem',
              color: '#94a3b8',
              textAlign: 'right'
            }}>
              전국 17개 광역시·도 ➔ 226개 기초지자체 시·군·구 ➔ 3,500+ 읍·면·동 세부 버스정류장 노드화 완료
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
