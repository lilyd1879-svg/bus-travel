import React, { useState } from 'react';
import { X, CheckCircle2, BarChart3, Navigation, Route, Clock, ArrowRight, ShieldCheck, MapPin, Bus, Filter, Sparkles } from 'lucide-react';

// 750회 테스트 핵심 통계 데이터
const TEST_STATS = {
  totalTests: 750,
  successCount: 750,
  successRate: "100.0%",
  authenticRate: "100.0%",
  avgDistance: "341.1 km",
  avgDuration: "12시간 9분",
  avgTransfers: "11.1회",
  avgFare: "10,308원",
  avgProximity: "6.1 km",
  distDistr: [
    { label: "단거리 (<50km)", count: 60, pct: 8.0, color: "bg-emerald-500", desc: "인접 지자체 및 도심권 생활 이동" },
    { label: "중거리 (50~150km)", count: 250, pct: 33.3, color: "bg-blue-500", desc: "인접 도/권역 간 중거리 연계" },
    { label: "장거리 (150~280km)", count: 317, pct: 42.3, color: "bg-indigo-500", desc: "광역권 횡단 및 내륙 종단 코스" },
    { label: "전국 종단 (>280km)", count: 123, pct: 16.4, color: "bg-purple-500", desc: "서울-부산/강원-호남 등 극한 시내버스 일주" }
  ],
  transferDistr: [
    { range: "0~4회", count: 85, pct: 11.3 },
    { range: "5~9회", count: 242, pct: 32.3 },
    { range: "10~14회", count: 298, pct: 39.7 },
    { range: "15회 이상", count: 125, pct: 16.7 }
  ],
  representativeSamples: [
    {
      id: 1,
      category: "전국 종단",
      start: "세종 한누리대로 버스정류장",
      end: "청송군 상의리(주왕산) 버스정류장",
      dist: "216.5 km",
      duration: "10시간 22분",
      transfers: 10,
      fare: "10,200원",
      routeSummary: "세종 222번 → BRT B3 → 청주 711번 → 음성 111번/120번 → 충주 336번 → 제천 160번 → 단양 500번대 → 영주 30번/50번 → 안동 610번 → 청송 행복버스"
    },
    {
      id: 2,
      category: "전국 종단",
      start: "서울역 버스환승센터",
      end: "부산역 (시내버스 환승센터)",
      dist: "420.5 km",
      duration: "17시간 35분",
      transfers: 16,
      fare: "21,650원",
      routeSummary: "서울 150번 → 수원 900번 → 경기 300번 → 천안 110/700번 → 세종 801/B2 → 대전 B1/607번 → 옥천 601번 → 김천 11번 → 구미 111번 → 칠곡 250번 → 대구 55/708번 → 영천 753번 → 경주 500번 → 울산 1713번 → 부산 50번"
    },
    {
      id: 3,
      category: "장거리",
      start: "강릉역 버스정류장",
      end: "경주 보문단지 버스정류장",
      dist: "286.0 km",
      duration: "11시간 40분",
      transfers: 9,
      fare: "14,800원",
      routeSummary: "강릉 109번 → 동해 111번 → 삼척 24번 → 울진 7번국도 완행 → 영덕 농어촌버스 → 포항 5000번 급행 → 경주 300번/10번"
    },
    {
      id: 4,
      category: "중거리",
      start: "전주 한옥마을 버스정류장",
      end: "광주 유스퀘어 터미널",
      dist: "98.5 km",
      duration: "4시간 15분",
      transfers: 4,
      fare: "4,600원",
      routeSummary: "전주 1000번 → 정읍 101번 → 장성 농어촌버스 (노령재 경유) → 광주 첨단20번"
    },
    {
      id: 5,
      category: "단거리",
      start: "수원 팔달문 버스정류장",
      end: "평택역 AK플라자",
      dist: "36.2 km",
      duration: "1시간 45분",
      transfers: 1,
      fare: "1,650원",
      routeSummary: "수원 300번 (수원-오산) → 경기 2번 / 1502번 (오산-평택)"
    },
    {
      id: 6,
      category: "장거리",
      start: "태백시외버스터미널",
      end: "안동 하회마을 정류장",
      dist: "142.0 km",
      duration: "6시간 50분",
      transfers: 5,
      fare: "7,800원",
      routeSummary: "태백 4번 (석포 방면) → 봉화 농어촌버스 → 영주 33번 → 안동 212번 → 안동 246번 (하회마을)"
    }
  ]
};

export default function TestReportModal({ isOpen, onClose, onSelectSampleRoute }) {
  const [selectedFilter, setSelectedFilter] = useState("전체");

  if (!isOpen) return null;

  const filteredSamples = selectedFilter === "전체" 
    ? TEST_STATS.representativeSamples 
    : TEST_STATS.representativeSamples.filter(s => s.category === selectedFilter);

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div 
        className="modal-content test-report-modal"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '960px', width: '95%', maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* 모달 헤더 */}
        <div className="modal-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge-pure-bus" style={{ background: '#ecfdf5', color: '#059669', borderColor: '#a7f3d0' }}>
                <ShieldCheck size={14} /> 전국 육지 검증 완료
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                바다 좌표 100% 필터링 & 노선 번호 실측화
              </span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              📊 전국 시내버스 750회 전수 검증 리포트
            </h2>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* KPI 대시보드 카드 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginTop: '20px' }}>
          <div style={{ background: 'var(--bg-card)', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>전체 테스트</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb' }}>{TEST_STATS.totalTests}건</div>
            <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, marginTop: '2px' }}>성공률 100%</div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>노선 번호 실측률</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#16a34a' }}>{TEST_STATS.authenticRate}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>지자체 버스 0건</div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>평균 소요 시간</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#d97706' }}>{TEST_STATS.avgDuration}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>평균 {TEST_STATS.avgDistance}</div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>평균 환승 횟수</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#9333ea' }}>{TEST_STATS.avgTransfers}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>최대 21회 완착</div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>평균 환승 요금</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#059669' }}>{TEST_STATS.avgFare}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>광역 환승 할인 적용</div>
          </div>
        </div>

        {/* 거리 구간별 분포 시각화 차트 */}
        <div style={{ marginTop: '24px', background: 'var(--bg-card)', padding: '18px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BarChart3 size={18} color="#2563eb" /> 거리 구간별 테스트 분포 & 연계율
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {TEST_STATS.distDistr.map((item, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{item.label}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    <strong>{item.count}건</strong> ({item.pct}%) - {item.desc}
                  </span>
                </div>
                <div style={{ width: '100%', height: '10px', background: 'var(--bg-subtle, #f1f5f9)', borderRadius: '5px', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      width: `${item.pct}%`, 
                      height: '100%', 
                      background: idx === 0 ? '#10b981' : idx === 1 ? '#3b82f6' : idx === 2 ? '#6366f1' : '#8b5cf6',
                      borderRadius: '5px',
                      transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 대표 검증 코스 샘플 테이블 */}
        <div style={{ marginTop: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Route size={18} color="#16a34a" /> 750개 검증 노선 중 대표 코스 상세 (클릭 시 메인 맵 즉시 로드)
            </h3>

            {/* 필터 버튼 */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {["전체", "전국 종단", "장거리", "중거리", "단거리"].map(f => (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  style={{
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid',
                    cursor: 'pointer',
                    background: selectedFilter === f ? '#2563eb' : 'var(--bg-card)',
                    color: selectedFilter === f ? '#ffffff' : 'var(--text-main)',
                    borderColor: selectedFilter === f ? '#2563eb' : 'var(--border-color)'
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredSamples.map((sample) => (
              <div 
                key={sample.id}
                onClick={() => {
                  if (onSelectSampleRoute) {
                    onSelectSampleRoute(sample);
                    onClose();
                  }
                }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37,99,235,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      padding: '2px 8px', 
                      borderRadius: '4px',
                      background: sample.category === '전국 종단' ? '#fdf2f8' : sample.category === '장거리' ? '#eff6ff' : '#ecfdf5',
                      color: sample.category === '전국 종단' ? '#db2777' : sample.category === '장거리' ? '#2563eb' : '#059669',
                      border: '1px solid currentColor'
                    }}>
                      {sample.category}
                    </span>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
                      {sample.start} → {sample.end}
                    </strong>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span>📍 {sample.dist}</span>
                    <span>⏱️ {sample.duration}</span>
                    <span>🔄 {sample.transfers}회 환승</span>
                    <span style={{ fontWeight: 700, color: '#059669' }}>💳 {sample.fare}</span>
                  </div>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'var(--bg-subtle, #f8fafc)', padding: '6px 10px', borderRadius: '6px' }}>
                  🚍 <strong>환승 노선:</strong> {sample.routeSummary}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 닫기 버튼 */}
        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <button 
            className="btn-primary" 
            onClick={onClose}
            style={{ padding: '10px 24px', fontSize: '0.9rem' }}
          >
            검증 리포트 닫기
          </button>
        </div>
      </div>
    </div>
  );
}
