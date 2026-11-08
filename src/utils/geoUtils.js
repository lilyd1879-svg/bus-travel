/**
 * 지리적 좌표 기반 두 지점 간의 직선 거리 (Haversine Formula, km)
 */
export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // 지구 반지름 (km)
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees) {
  return (degrees * Math.PI) / 180;
}

/**
 * 숫자 통화 포맷팅 (예: 1550 -> 1,550원)
 */
export function formatWon(amount) {
  if (amount === undefined || amount === null) return "0원";
  return new Intl.NumberFormat("ko-KR").format(amount) + "원";
}

/**
 * OpenStreetMap Nominatim 역지오코딩 (위경도 -> 실시간 한국어 정류장/도로명 주소)
 */
export async function reverseGeocodeKorean(lat, lng) {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ko`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'KoreaCityBusPlanner/1.0'
      }
    });

    if (response.ok) {
      const data = await response.json();
      const addr = data.address || {};

      const roadOrVillage = addr.road || addr.village || addr.suburb || addr.neighbourhood || addr.amenity || addr.building;
      const cityOrCounty = addr.city || addr.county || addr.state || "지정 위치";

      if (roadOrVillage) {
        return `${cityOrCounty} ${roadOrVillage} 버스정류장`;
      }
      if (data.display_name) {
        const parts = data.display_name.split(', ');
        return `${parts[0]} 버스정류장`;
      }
    }
  } catch (err) {
    console.warn("역지오코딩 변환 실패:", err);
  }

  return `클릭 지정 정류장 (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
}
