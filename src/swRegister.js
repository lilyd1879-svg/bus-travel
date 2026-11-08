// 서비스 워커 등록 및 PWA 오프라인 지원 헬퍼
export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('[PWA] 서비스 워커 등록 성공:', registration.scope);
        })
        .catch((error) => {
          console.log('[PWA] 서비스 워커 등록 실패 (안전 무시):', error);
        });
    });
  }
}
