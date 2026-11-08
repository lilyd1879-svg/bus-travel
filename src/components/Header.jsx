import React from 'react';
import { Bus, Key, Sparkles, MapPin, Navigation, ShieldCheck, BookmarkCheck } from 'lucide-react';

export default function Header({ onOpenApiKeyModal, isApiKeySet, onOpenTestReportModal, onOpenSavedTrips }) {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="brand-group">
          <div className="brand-icon-wrapper">
            <Bus className="brand-icon" size={28} />
          </div>
          <div>
            <div className="title-row">
              <h1 className="app-title">한국 시내버스 여행</h1>
              <span className="badge-pure-bus">
                <ShieldCheck size={14} /> 100% 시내버스 전용
              </span>
            </div>
            <p className="app-subtitle">
              지하철 · KTX · 고속버스 0%! 오직 전국 시내버스로만 연결되는 최적 환승 경로 플래너
            </p>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="stats-pill"
            onClick={onOpenSavedTrips}
            style={{ cursor: 'pointer', border: '1px solid #a7f3d0', background: '#f0fdf4', color: '#059669', fontWeight: 600 }}
            title="오프라인 저장 여정 열기"
          >
            <BookmarkCheck size={14} color="#16a34a" />
            <span>📂 오프라인 보관함</span>
          </button>

          <button
            className="stats-pill"
            onClick={onOpenTestReportModal}
            style={{ cursor: 'pointer', border: '1px solid #93c5fd', background: '#eff6ff', color: '#1d4ed8', fontWeight: 600 }}
            title="750회 전국 육지 검증 리포트 열기"
          >
            <Sparkles size={14} color="#2563eb" />
            <span>📊 검증 리포트</span>
          </button>

          <button
            className={`api-key-btn ${isApiKeySet ? 'active' : ''}`}
            onClick={onOpenApiKeyModal}
            title="공공데이터포털 API Key 설정"
          >
            <Key size={16} />
            <span>{isApiKeySet ? 'API 연동 완료' : '공공데이터 API Key'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
