import React from 'react';
import { Clock, RefreshCw, CreditCard, Navigation, Bus, CheckCircle2 } from 'lucide-react';
import { formatWon } from '../utils/geoUtils.js';

export default function RouteResults({
  routes,
  selectedRouteId,
  onSelectRoute,
  activePresetTrip
}) {
  if (!Array.isArray(routes) || routes.length === 0) {
    return (
      <div className="results-empty-card">
        <Bus size={48} className="empty-icon" />
        <h3>탐색된 시내버스 경로가 없습니다</h3>
        <p>출발지와 도착지를 선택 후 [시내버스 노선 짜기] 버튼을 눌러주세요.</p>
      </div>
    );
  }

  return (
    <div className="route-results-section">
      <div className="results-header-row">
        <h3 className="results-title">
          탐색된 시내버스 노선 ({routes.length}개)
        </h3>
        {activePresetTrip && (
          <span className="active-preset-tag">
            {activePresetTrip.badge} : {activePresetTrip.title}
          </span>
        )}
      </div>

      <div className="results-grid">
        {routes.map((route) => {
          if (!route) return null;
          const isSelected = route.id === selectedRouteId;
          const segments = Array.isArray(route.segments) ? route.segments : [];

          return (
            <div
              key={route.id || Math.random()}
              className={`result-card ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectRoute(route)}
            >
              <div className="card-top-bar">
                <span className={`tag-chip ${route.tag === '추천 최적' || route.tag === '실제 시내버스 노선' ? 'tag-primary' : 'tag-secondary'}`}>
                  {route.tag || '시내버스 전용'}
                </span>
                <span className="pure-bus-badge">
                  <CheckCircle2 size={13} /> 시내버스 100%
                </span>
              </div>

              <div className="route-title-row">
                <h4 className="card-route-title">{route.title}</h4>
                <span className="total-time-hero">{route.totalDurationText}</span>
              </div>

              <div className="summary-meta-grid">
                <div className="meta-item">
                  <RefreshCw size={14} className="meta-icon" />
                  <span className="meta-label">환승</span>
                  <span className="meta-value">{route.transferCount}회</span>
                </div>
                <div className="meta-item">
                  <CreditCard size={14} className="meta-icon" />
                  <span className="meta-label">예상 요금</span>
                  <span className="meta-value">{formatWon(route.totalFare)}</span>
                </div>
                <div className="meta-item">
                  <Navigation size={14} className="meta-icon" />
                  <span className="meta-label">이동 거리</span>
                  <span className="meta-value">{route.totalDistanceKm} km</span>
                </div>
                <div className="meta-item">
                  <Clock size={14} className="meta-icon" />
                  <span className="meta-label">예상 운행시간</span>
                  <span className="meta-value">{route.startTimeText} ~ {route.endTimeText}</span>
                </div>
              </div>

              <div className="bus-lines-preview">
                <span className="preview-label">탑승 시내버스:</span>
                <div className="line-badges">
                  {segments.map((seg, i) => (
                    <React.Fragment key={i}>
                      <span className="bus-no-badge">{seg.routeNo}</span>
                      {i < segments.length - 1 && <span className="arrow-sep">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
