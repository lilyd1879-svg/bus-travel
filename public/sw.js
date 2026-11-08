// 한국 시내버스 여행 - 오프라인 전용 PWA 서비스 워커 (Service Worker)
const CACHE_NAME = 'korea-citybus-v2.1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;600;700;800&display=swap'
];

// 1. 설치 시 핵심 정적 자산 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] 오프라인 정적 자산 캐시 저장 완료');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[ServiceWorker] 일부 외부 자산 캐싱 건너뜀 (안전 처리):', err);
      });
    })
  );
  self.skipWaiting();
});

// 2. 활성화 시 구버전 캐시 정리
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] 구버전 캐시 정리:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. 네트워크 요청 가로채기 (오프라인 지원 전략)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 지도 타일 요청 (OSM / CartoDB): 네트워크 우선, 캐시 백업
  if (url.hostname.includes('tile.openstreetmap.org') || url.hostname.includes('basemaps.cartocdn.com')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(event.request)
          .then((response) => {
            if (response.status === 200) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => {
            return cache.match(event.request);
          });
      })
    );
    return;
  }

  // 앱 소스 코드 및 정적 자산: 캐시 우선, 네트워크 백업
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // 백그라운드에서 최신 버전 갱신 (Stale-While-Revalidate)
        fetch(event.request).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkRes));
          }
        }).catch(() => {});
        return cached;
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(() => {
        // 오프라인 fallback (HTML 페이지 요청 시)
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('/index.html');
        }
      });
    })
  );
});
