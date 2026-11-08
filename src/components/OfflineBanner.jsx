import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, Download, CheckCircle, ShieldCheck } from 'lucide-react';

export default function OfflineBanner({ onOpenSavedTrips }) {
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      alert('이미 설치되었거나 현재 브라우저(크롬/엣지/사파리) 메뉴에서 [홈 화면에 추가] 또는 [앱 설치]를 선택하실 수 있습니다.');
    }
  };

  return (
    <div style={{
      background: isOnline ? 'rgba(30, 41, 59, 0.92)' : 'rgba(153, 27, 27, 0.95)',
      border: `1px solid ${isOnline ? 'rgba(56, 189, 248, 0.25)' : 'rgba(239, 68, 68, 0.5)'}`,
      borderRadius: '10px',
      padding: '8px 14px',
      margin: '0 0 12px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      fontSize: '0.82rem',
      color: '#f8fafc',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {isOnline ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#38bdf8' }}>
            <Wifi size={15} /> <strong>온라인 연결됨</strong>
          </span>
        ) : (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#fca5a5' }}>
            <WifiOff size={15} /> <strong>오프라인 모드 가동</strong>
          </span>
        )}
        <span>
          {isOnline 
            ? '· 전국 시내버스 데이터 및 알고리즘이 로컬 브라우저에 100% 내장되어 통신 음영지역에서도 무제한 작동합니다.' 
            : '· 네트워크가 끊겨도 오프라인 엔진으로 전국 시내버스 경로 탐색 및 저장 여정 열람이 100% 가능합니다.'}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '6px' }}>
        <button
          onClick={onOpenSavedTrips}
          style={{
            background: 'rgba(255,255,255,0.12)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '6px',
            padding: '4px 10px',
            fontSize: '0.75rem',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          📂 오프라인 보관함
        </button>

        {deferredPrompt && (
          <button
            onClick={handleInstallApp}
            style={{
              background: '#2563eb',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Download size={13} />
            <span>앱으로 설치</span>
          </button>
        )}
      </div>
    </div>
  );
}
