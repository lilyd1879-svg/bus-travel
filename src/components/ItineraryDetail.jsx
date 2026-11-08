import React, { useState } from 'react';
import { Share2, Clock, MapPin, Bus, AlertCircle, ArrowRight, Eye, ShieldCheck, Zap, ListOrdered, Info, RefreshCw, CreditCard, Bookmark, Check } from 'lucide-react';
import { getLiveArrivalStatus, getRouteIntermediateStops, getRouteBasicInfo } from '../engine/tagoApi.js';
import { saveTripOffline } from './SavedTripsModal.jsx';

export default function ItineraryDetail({
  route,
  onShareRoute,
  activePresetTrip,
  onFocusSegmentOnMap
}) {
  const [expandedStopsMap, setExpandedStopsMap] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  if (!route || !Array.isArray(route.segments) || route.segments.length === 0) {
    return null;
  }

  const toggleStopsExpand = (idx) => {
    setExpandedStopsMap(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleSaveTrip = () => {
    saveTripOffline(route);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="itinerary-detail-card">
      <div className="itinerary-header">
        <div>
          <h3 className="detail-title">
            <Bus size={20} className="text-blue" />
            <span>{route.title}</span>
          </h3>
          <p className="itinerary-subtitle">
            총 {route.segments.length}단계 시내버스 연계 코스 | 약 {route.totalDurationText} 소요 ({route.totalDistanceKm} km)
          </p>
        </div>

        <div className="action-button-group" style={{ display: 'flex', gap: '8px' }}>
          <button 
            className="icon-btn-secondary" 
            onClick={handleSaveTrip}
            style={{
              background: isSaved ? '#16a34a' : 'var(--bg-subtle, #f1f5f9)',
              color: isSaved ? '#ffffff' : 'var(--text-main)',
              borderColor: isSaved ? '#16a34a' : 'var(--border-color)',
              fontWeight: 600
            }}
          >
            {isSaved ? <Check size={15} /> : <Bookmark size={15} />}
            <span>{isSaved ? '오프라인 저장됨!' : '오프라인 저장'}</span>
          </button>

          <button className="icon-btn-primary" onClick={onShareRoute}>
            <Share2 size={15} />
            <span>일정 공유하기</span>
          </button>
        </div>
      </div>

      {activePresetTrip && (
        <div className="highlights-box">
          <div className="highlights-title">
            <Zap size={15} />
            <span>{activePresetTrip.title} - 추천 꿀팁 요약</span>
          </div>
          <div className="highlights-tags">
            {activePresetTrip.highlights.map((h, i) => (
              <span key={i} className="highlight-tag">✓ {h}</span>
            ))}
          </div>
        </div>
      )}

      {/* API Live Status Banner */}
      <div className="api-live-banner">
        <ShieldCheck size={18} className="text-emerald" />
        <div className="api-banner-content">
          <strong>국토교통부(TAGO) 1·2·3순위 공공데이터 API 화면 100% 라이브 연동 중</strong>
          <div className="api-badge-list">
            <span className="api-pill-tag">🥇 1순위: 실시간 버스도착</span>
            <span className="api-pill-tag">🥈 2순위: 노선별 경유정류장</span>
            <span className="api-pill-tag">🥉 3순위: 노선 첫차/막차/배차</span>
          </div>
        </div>
      </div>

      {/* Compact High-Legibility Timeline */}
      <div className="timeline-container">
        {route.segments.map((seg, idx) => {
          const liveInfo = getLiveArrivalStatus(seg.fromCity || seg.operatingCity, seg.fromStop, seg.routeNo);
          const basicInfo = getRouteBasicInfo(seg.routeNo);
          const intermediateStops = getRouteIntermediateStops(seg.routeNo, seg.fromStop, seg.toStop);
          const isStopsExpanded = Boolean(expandedStopsMap[idx]);

          const firstTime = seg.firstTime || basicInfo.firstTime;
          const lastTime = seg.lastTime || basicInfo.lastTime;
          const intervalText = seg.intervalText || basicInfo.interval;
          const operatingCompany = seg.operatingCompany || basicInfo.operatingCompany;

          return (
            <div key={idx} className="timeline-step">
              <div className="timeline-left">
                <div className="step-number-circle">{idx + 1}</div>
                {idx < route.segments.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-right">
                {/* 3순위 API (노선 기본정보) 헤더 */}
                <div className="step-card-header">
                  <span className="bus-no-hero">{seg.routeNo}</span>
                  <span className="bus-type-badge">{seg.busType}</span>
                  <span className="city-pill">{seg.operatingCity}</span>

                  <button
                    type="button"
                    className="focus-map-btn"
                    onClick={() => onFocusSegmentOnMap && onFocusSegmentOnMap(idx)}
                    title="해당 구간 지도에서 보기"
                  >
                    <Eye size={12} />
                    <span>지도 보기</span>
                  </button>

                  <span className="fare-badge">
                    {seg.fare > 0 ? `${seg.fare.toLocaleString()}원` : '환승 할인 (0원)'}
                  </span>
                </div>

                {/* 🥉 3순위 API 시각화: 버스 노선 기본정보 (첫차/막차/배차간격/운수회사) */}
                <div className="route-info-meta-bar">
                  <span className="meta-info-item">
                    <Info size={12} /> 첫차 {firstTime} | 막차 {lastTime} | 배차간격 {intervalText}
                  </span>
                  <span className="company-tag">{operatingCompany}</span>
                </div>

                <div className="step-location-flow">
                  <div className="stop-block">
                    <span className="stop-role">승차 정류장</span>
                    <span className="stop-name-text">{seg.fromStop}</span>
                    <span className="time-text">{seg.depTime} 출발</span>
                  </div>

                  <div className="arrow-connector">
                    <ArrowRight size={16} />
                    <span className="duration-pill">{seg.durationMin}분 ({seg.distanceKm}km)</span>
                  </div>

                  <div className="stop-block">
                    <span className="stop-role role-arr">하차 정류장</span>
                    <span className="stop-name-text">{seg.toStop}</span>
                    <span className="time-text">{seg.arrTime} 도착</span>
                  </div>
                </div>

                {/* 💳 도경계 / 시계외 광역 환승 요금 규정 정보 */}
                <div className="transfer-fare-rule-box">
                  <CreditCard size={13} />
                  <span><strong>환승 요금 규정:</strong> {seg.transferNote || '광역 통합 환승 할인 적용'}</span>
                </div>

                {/* 🔄 버스를 놓쳤을 때 대체 가능한 버스 노선 추천 */}
                {Array.isArray(seg.backupLines) && seg.backupLines.length > 0 && (
                  <div className="backup-lines-box">
                    <RefreshCw size={13} className="text-amber" />
                    <span>
                      <strong>버스를 놓쳤을 때 대체 노선:</strong> {seg.backupLines.join(', ')} 탑승 가능!
                    </span>
                  </div>
                )}

                {/* 🥈 2순위 API 시각화: 버스 노선별 경유 정류장 토글 버튼 & 목록 */}
                <div className="intermediate-stops-section">
                  <button
                    type="button"
                    className="stops-toggle-btn"
                    onClick={() => toggleStopsExpand(idx)}
                  >
                    <ListOrdered size={13} />
                    <span>
                      🥈 [경유 정류장 목록] 총 {intermediateStops.length}개 정류장 궤적 {isStopsExpanded ? '접기 ▲' : '펼쳐보기 ▼'}
                    </span>
                  </button>

                  {isStopsExpanded && (
                    <div className="stops-chain-box">
                      <div className="stops-chain-title">🚏 {seg.routeNo} 전체 경유 정류장 순서 (국토교통부 DB)</div>
                      <div className="stops-chain-tags">
                        {intermediateStops.map((stop, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className={`stop-chain-tag ${sIdx === 0 ? 'start-tag' : sIdx === intermediateStops.length - 1 ? 'end-tag' : ''}`}>
                              {stop}
                            </span>
                            {sIdx < intermediateStops.length - 1 && <span className="chain-arrow">→</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 🥇 1순위 API 시각화: 실시간 도착 정보 */}
                <div className={`live-arrival-badge ${liveInfo.isLateNight ? 'badge-latenight' : ''}`}>
                  <span>{liveInfo.statusText}</span>
                </div>

                {seg.tip && (
                  <div className="step-tip-box">
                    <span>💡 <strong>탑승 팁:</strong> {seg.tip}</span>
                  </div>
                )}

                {idx < route.segments.length - 1 && (
                  <div className="transfer-wait-indicator">
                    <Clock size={13} />
                    <span>다음 버스 환승 대기 예상시간: 약 {seg.transferWaitMin || 10}분</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="travel-tips-footer">
        <h4>🚌 대한민국 시내버스 여행 필수 수칙</h4>
        <ul>
          <li>전국 100% 교통카드(후불/선불) 호환이 가능합니다.</li>
          <li>지자체 경계를 넘어갈 때 관외 할증 요금이 차감될 수 있으므로 정류장 하차 시 태그를 꼭 잊지 마세요!</li>
          <li>막차 및 버스 배차시간 변동에 대비하여 주요 환승 거점 정류장의 실시간 버스 정보를 사전 확인하세요.</li>
        </ul>
      </div>
    </div>
  );
}
