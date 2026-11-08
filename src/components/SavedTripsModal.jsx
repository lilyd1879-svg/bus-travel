import React, { useState, useEffect } from 'react';
import { X, Bookmark, Trash2, Download, Copy, Check, Route, MapPin, Calendar, Clock } from 'lucide-react';

const STORAGE_KEY_SAVED_TRIPS = 'korea_citybus_offline_saved_trips';

export function getOfflineSavedTrips() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SAVED_TRIPS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveTripOffline(route) {
  try {
    const trips = getOfflineSavedTrips();
    const newTrip = {
      id: `TRIP_${Date.now()}`,
      savedAt: new Date().toLocaleString('ko-KR'),
      title: route.title,
      totalDurationText: route.totalDurationText,
      totalFareText: route.totalFareText,
      transferCount: route.transferCount,
      totalDistanceKm: route.totalDistanceKm,
      segments: route.segments.map(s => ({
        routeNo: s.routeNo,
        fromStop: s.fromStop,
        toStop: s.toStop,
        depTime: s.depTime,
        arrTime: s.arrTime,
        fare: s.fare,
        tip: s.tip
      }))
    };
    const updated = [newTrip, ...trips.slice(0, 19)]; // 최대 20개 저장
    localStorage.setItem(STORAGE_KEY_SAVED_TRIPS, JSON.stringify(updated));
    return true;
  } catch (e) {
    return false;
  }
}

export default function SavedTripsModal({ isOpen, onClose, onLoadSavedTrip, currentRoute }) {
  const [savedTrips, setSavedTrips] = useState([]);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setSavedTrips(getOfflineSavedTrips());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDeleteTrip = (id) => {
    const updated = savedTrips.filter(t => t.id !== id);
    setSavedTrips(updated);
    localStorage.setItem(STORAGE_KEY_SAVED_TRIPS, JSON.stringify(updated));
  };

  const handleCopyText = (trip) => {
    let text = `[한국 시내버스 여행 - 오프라인 여정표]\n`;
    text += `📌 코스: ${trip.title}\n`;
    text += `⏱️ 소요시간: ${trip.totalDurationText} | 🔄 환승: ${trip.transferCount}회 | 💳 요금: ${trip.totalFareText}\n`;
    text += `--------------------------------------------------\n`;
    trip.segments.forEach((seg, i) => {
      text += `${i + 1}. [${seg.routeNo}] ${seg.fromStop} (${seg.depTime}) → ${seg.toStop} (${seg.arrTime})\n`;
      if (seg.tip) text += `   💡 안내: ${seg.tip}\n`;
    });
    text += `--------------------------------------------------\n`;
    text += `저장일시: ${trip.savedAt} (오프라인 보관용)`;

    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(trip.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleSaveCurrent = () => {
    if (currentRoute) {
      saveTripOffline(currentRoute);
      setSavedTrips(getOfflineSavedTrips());
    }
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '780px', width: '95%', maxHeight: '85vh', overflowY: 'auto' }}
      >
        <div className="modal-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge-pure-bus" style={{ background: '#f0fdf4', color: '#16a34a', borderColor: '#bbf7d0' }}>
                📶 100% 오프라인 보관
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                데이터 통신 없이 산간·음영지역에서 즉시 열람 가능
              </span>
            </div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              📂 오프라인 저장 여정 및 즐겨찾기
            </h2>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* 현재 경로 즉시 저장 버튼 */}
        {currentRoute && (
          <div style={{ marginTop: '16px', background: 'var(--bg-subtle, #f8fafc)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
                현재 조회 중인 경로: {currentRoute.title}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {currentRoute.totalDurationText} · {currentRoute.transferCount}회 환승 · {currentRoute.totalFareText}
              </div>
            </div>
            <button
              className="btn-primary"
              onClick={handleSaveCurrent}
              style={{ padding: '6px 14px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Bookmark size={14} />
              <span>오프라인 저장</span>
            </button>
          </div>
        )}

        {/* 저장된 여정 목록 */}
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 12px 0', color: 'var(--text-main)' }}>
            저장된 여정 ({savedTrips.length}개)
          </h3>

          {savedTrips.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '36px 20px', color: 'var(--text-muted)', background: 'var(--bg-card)', borderRadius: '12px', border: '1px dashed var(--border-color)' }}>
              <Route size={36} style={{ opacity: 0.4, marginBottom: '8px' }} />
              <div>오프라인에 저장된 시내버스 여정이 없습니다.</div>
              <div style={{ fontSize: '0.8rem', marginTop: '4px' }}>
                경로 검색 후 상단의 [오프라인 저장] 버튼을 누르면 통신망이 없는 곳에서도 언제든지 확인할 수 있습니다.
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {savedTrips.map((trip) => (
                <div
                  key={trip.id}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {trip.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px', display: 'flex', gap: '8px' }}>
                        <span>⏱️ {trip.totalDurationText}</span>
                        <span>🔄 {trip.transferCount}회 환승</span>
                        <span>💳 {trip.totalFareText}</span>
                        <span>📅 {trip.savedAt}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        onClick={() => handleCopyText(trip)}
                        style={{
                          background: copiedId === trip.id ? '#16a34a' : 'var(--bg-subtle, #f1f5f9)',
                          color: copiedId === trip.id ? '#ffffff' : 'var(--text-main)',
                          border: '1px solid var(--border-color)',
                          borderRadius: '6px',
                          padding: '6px 10px',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                        title="일정표 텍스트 복사"
                      >
                        {copiedId === trip.id ? <Check size={13} /> : <Copy size={13} />}
                        <span>{copiedId === trip.id ? '복사됨!' : '텍스트 복사'}</span>
                      </button>

                      <button
                        onClick={() => handleDeleteTrip(trip.id)}
                        style={{
                          background: '#fef2f2',
                          color: '#dc2626',
                          border: '1px solid #fecaca',
                          borderRadius: '6px',
                          padding: '6px 8px',
                          fontSize: '0.75rem',
                          cursor: 'pointer'
                        }}
                        title="여정 삭제"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {/* 세부 환승 노선 프리뷰 */}
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'var(--bg-subtle, #f8fafc)', padding: '8px 12px', borderRadius: '6px', lineHeight: 1.5 }}>
                    {trip.segments.map((s, idx) => (
                      <span key={idx}>
                        <strong>[{s.routeNo}]</strong> {s.fromStop} → {s.toStop}
                        {idx < trip.segments.length - 1 ? ' ➔ ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <button 
            className="btn-primary" 
            onClick={onClose}
            style={{ padding: '8px 20px', fontSize: '0.9rem' }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
