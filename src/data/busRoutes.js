// 대한민국 전국 시내버스 여행 완전연결 그래프 데이터베이스 (100% 무결점 양방향 엣지 완전 그래프)
export const BUS_ROUTES = [
  // ==========================================
  // 1. 수도권 경부 메인 축 (서울 ↔ 안양 ↔ 수원 ↔ 오산 ↔ 동탄 ↔ 평택)
  // ==========================================
  { 
    id: "R_150_F", routeNo: "서울 150번 (간선)", busType: "간선버스 (파랑)", 
    fromStopId: "STOP_SEOUL_01", toStopId: "STOP_GYEONGGI_01", 
    distanceKm: 21.5, durationMin: 35, intervalMin: 8, fare: 1500, operatingCity: "서울특별시/안양시", 
    tip: "서울역 버스환승센터 5번 승강장에서 중앙버스전용차로 경유 안양역 직행 탑승!",
    firstTime: "04:00", lastTime: "23:10", intervalText: "7~10분", operatingCompany: "서울 도선여객 / 서울승합",
    backupLines: ["서울 502번", "경기 1-1번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_150_R", routeNo: "서울 150번 (간선)", busType: "간선버스 (파랑)", 
    fromStopId: "STOP_GYEONGGI_01", toStopId: "STOP_SEOUL_01", 
    distanceKm: 21.5, durationMin: 35, intervalMin: 8, fare: 1500, operatingCity: "안양시/서울특별시", 
    tip: "안양역 상행 승강장에서 서울역 버스환승센터 탑승.",
    firstTime: "04:00", lastTime: "23:10", intervalText: "7~10분", operatingCompany: "서울 도선여객",
    backupLines: ["서울 502번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_SIHEUNG_ANYANG_F", routeNo: "경기 900번 / 서울 5623번", busType: "일반시내버스", 
    fromStopId: "STOP_SIHEUNG_01", toStopId: "STOP_GYEONGGI_01", 
    distanceKm: 5.3, durationMin: 12, intervalMin: 8, fare: 1450, operatingCity: "금천구/안양시", 
    tip: "시흥사거리에서 석수역 경유 안양역 12분 이동.",
    firstTime: "04:30", lastTime: "23:20", intervalText: "8~12분", operatingCompany: "서울 보영운수 / 경기 삼경운수",
    backupLines: ["서울 5531번", "경기 5번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_SIHEUNG_ANYANG_R", routeNo: "경기 900번 / 서울 5623번", busType: "일반시내버스", 
    fromStopId: "STOP_GYEONGGI_01", toStopId: "STOP_SIHEUNG_01", 
    distanceKm: 5.3, durationMin: 12, intervalMin: 8, fare: 1450, operatingCity: "안양시/금천구", 
    tip: "안양역에서 시흥사거리 방면 탑승.",
    firstTime: "04:30", lastTime: "23:20", intervalText: "8~12분", operatingCompany: "서울 보영운수",
    backupLines: ["서울 5531번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_SEOUL_1_SIHEUNG_F", routeNo: "서울 150번", busType: "간선버스 (파랑)", 
    fromStopId: "STOP_SEOUL_01", toStopId: "STOP_SIHEUNG_01", 
    distanceKm: 16.2, durationMin: 28, intervalMin: 8, fare: 1500, operatingCity: "서울특별시", 
    tip: "서울역에서 노량진, 신림 경유 시흥사거리 탑승.",
    firstTime: "04:00", lastTime: "23:10", intervalText: "7~10분", operatingCompany: "서울 도선여객",
    backupLines: ["서울 505번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_SEOUL_1_SIHEUNG_R", routeNo: "서울 150번", busType: "간선버스 (파랑)", 
    fromStopId: "STOP_SIHEUNG_01", toStopId: "STOP_SEOUL_01", 
    distanceKm: 16.2, durationMin: 28, intervalMin: 8, fare: 1500, operatingCity: "서울특별시", 
    tip: "시흥사거리에서 서울역 방면 탑승.",
    firstTime: "04:00", lastTime: "23:10", intervalText: "7~10분", operatingCompany: "서울 도선여객",
    backupLines: ["서울 505번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_900_F", routeNo: "경기 900번", busType: "일반시내버스", 
    fromStopId: "STOP_GYEONGGI_01", toStopId: "STOP_GYEONGGI_02", 
    distanceKm: 18.2, durationMin: 35, intervalMin: 10, fare: 1450, operatingCity: "안양시/수원시", 
    tip: "안양역에서 경수대로 직행 수원역 AK플라자 탑승!",
    firstTime: "05:10", lastTime: "22:40", intervalText: "9~12분", operatingCompany: "경기 삼경운수",
    backupLines: ["경기 301번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_900_R", routeNo: "경기 900번", busType: "일반시내버스", 
    fromStopId: "STOP_GYEONGGI_02", toStopId: "STOP_GYEONGGI_01", 
    distanceKm: 18.2, durationMin: 35, intervalMin: 10, fare: 1450, operatingCity: "수원시/안양시", 
    tip: "수원역에서 안양역 탑승.",
    firstTime: "05:10", lastTime: "22:40", intervalText: "9~12분", operatingCompany: "경기 삼경운수",
    backupLines: ["경기 301번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_300_F", routeNo: "경기 300번", busType: "일반시내버스", 
    fromStopId: "STOP_GYEONGGI_02", toStopId: "STOP_GYEONGGI_03", 
    distanceKm: 15.8, durationMin: 30, intervalMin: 10, fare: 1450, operatingCity: "수원시/오산시", 
    tip: "수원역 환승센터에서 1번 국도 직행 오산역 탑승!",
    firstTime: "05:20", lastTime: "22:50", intervalText: "10~15분", operatingCompany: "수원 용남고속",
    backupLines: ["수원 20번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_300_R", routeNo: "경기 300번", busType: "일반시내버스", 
    fromStopId: "STOP_GYEONGGI_03", toStopId: "STOP_GYEONGGI_02", 
    distanceKm: 15.8, durationMin: 30, intervalMin: 10, fare: 1450, operatingCity: "오산시/수원시", 
    tip: "오산역 환승센터에서 수원역 탑승.",
    firstTime: "05:20", lastTime: "22:50", intervalText: "10~15분", operatingCompany: "수원 용남고속",
    backupLines: ["수원 20번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_2_F", routeNo: "경기 1502번 / 경기 2번", busType: "일반시내버스", 
    fromStopId: "STOP_GYEONGGI_03", toStopId: "STOP_GYEONGGI_04", 
    distanceKm: 19.4, durationMin: 32, intervalMin: 12, fare: 1450, operatingCity: "오산시/평택시", 
    tip: "오산역 환승센터에서 송탄 경유 평택역(AK플라자) 직행 탑승! (구 2번 -> 1502번)",
    firstTime: "05:30", lastTime: "22:20", intervalText: "12~18분", operatingCompany: "평택 협진여객",
    backupLines: ["경기 2-2번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_2_R", routeNo: "경기 1502번 / 경기 2번", busType: "일반시내버스", 
    fromStopId: "STOP_GYEONGGI_04", toStopId: "STOP_GYEONGGI_03", 
    distanceKm: 19.4, durationMin: 32, intervalMin: 12, fare: 1450, operatingCity: "평택시/오산시", 
    tip: "평택역 정류장에서 오산역 환승센터 방면 탑승 (경기 1502번).",
    firstTime: "05:30", lastTime: "22:20", intervalText: "12~18분", operatingCompany: "평택 협진여객",
    backupLines: ["경기 2-2번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_DONGTAN_701_F", routeNo: "화성 701번 (오산-동탄)", busType: "일반시내버스", 
    fromStopId: "STOP_GYEONGGI_03", toStopId: "STOP_GYEONGGI_05", 
    distanceKm: 6.6, durationMin: 14, intervalMin: 15, fare: 1450, operatingCity: "오산시/화성시", 
    tip: "오산역 환승센터에서 동탄역 탑승.",
    firstTime: "06:00", lastTime: "22:30", intervalText: "12~18분", operatingCompany: "화성 제부여객",
    backupLines: ["화성 710번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_DONGTAN_701_R", routeNo: "화성 701번 (동탄-오산)", busType: "일반시내버스", 
    fromStopId: "STOP_GYEONGGI_05", toStopId: "STOP_GYEONGGI_03", 
    distanceKm: 6.6, durationMin: 14, intervalMin: 15, fare: 1450, operatingCity: "화성시/오산시", 
    tip: "동탄역에서 오산역 환승센터 탑승.",
    firstTime: "06:00", lastTime: "22:30", intervalText: "12~18분", operatingCompany: "화성 제부여객",
    backupLines: ["화성 710번"], transferDiscount: "INTEGRATED"
  },

  // 수도권 <-> 충남 도경계 (평택 ↔ 성환 ↔ 천안 ↔ 전의 ↔ 조치원 ↔ 세종 ↔ 대전)
  { 
    id: "R_110_PT_F", routeNo: "경기 110번 (평택-성환)", busType: "일반시내버스", 
    fromStopId: "STOP_GYEONGGI_04", toStopId: "STOP_CHUNGNAM_01", 
    distanceKm: 12.3, durationMin: 18, intervalMin: 15, fare: 1450, operatingCity: "평택시/천안시", 
    tip: "⚠️ 수도권-충남 도경계 구간으로 관외 환승할인이 미적용되어 기본요금(1,450원)이 새로 차감됩니다.",
    firstTime: "06:10", lastTime: "22:10", intervalText: "15~20분", operatingCompany: "평택 평택여객",
    backupLines: ["천안 130번"], transferDiscount: "NO_DISCOUNT"
  },
  { 
    id: "R_110_PT_R", routeNo: "경기 110번 (성환-평택)", busType: "일반시내버스", 
    fromStopId: "STOP_CHUNGNAM_01", toStopId: "STOP_GYEONGGI_04", 
    distanceKm: 12.3, durationMin: 18, intervalMin: 15, fare: 1450, operatingCity: "천안시/평택시", 
    tip: "⚠️ 성환터미널에서 수도권 평택역 탑승 (충남-수도권 도경계 환승 차감).",
    firstTime: "06:10", lastTime: "22:10", intervalText: "15~20분", operatingCompany: "평택 평택여객",
    backupLines: ["천안 130번"], transferDiscount: "NO_DISCOUNT"
  },
  { 
    id: "R_110_CA_F", routeNo: "천안 110번", busType: "일반시내버스", 
    fromStopId: "STOP_CHUNGNAM_01", toStopId: "STOP_CHUNGNAM_02", 
    distanceKm: 11.8, durationMin: 20, intervalMin: 12, fare: 1500, operatingCity: "천안시", 
    tip: "성환터미널에서 천안역 동부광장 탑승!",
    firstTime: "06:00", lastTime: "22:30", intervalText: "12~18분", operatingCompany: "천안 보성여객 / 삼안여객",
    backupLines: ["천안 100번"], transferDiscount: "CHUNGNAM_LOCAL"
  },
  { 
    id: "R_110_CA_R", routeNo: "천안 110번", busType: "일반시내버스", 
    fromStopId: "STOP_CHUNGNAM_02", toStopId: "STOP_CHUNGNAM_01", 
    distanceKm: 11.8, durationMin: 20, intervalMin: 12, fare: 1500, operatingCity: "천안시", 
    tip: "천안역 동부광장에서 성환터미널 탑승.",
    firstTime: "06:00", lastTime: "22:30", intervalText: "12~18분", operatingCompany: "천안 보성여객",
    backupLines: ["천안 100번"], transferDiscount: "CHUNGNAM_LOCAL"
  },
  { 
    id: "R_700_F", routeNo: "천안 700번", busType: "일반시내버스", 
    fromStopId: "STOP_CHUNGNAM_02", toStopId: "STOP_CHUNGNAM_03", 
    distanceKm: 22.1, durationMin: 30, intervalMin: 25, fare: 1500, operatingCity: "천안시/세종시", 
    tip: "천안역에서 세종시 전의면 이동!",
    firstTime: "06:20", lastTime: "21:40", intervalText: "25~35분", operatingCompany: "천안 건창여객",
    backupLines: ["천안 710번"], transferDiscount: "CHUNGNAM_LOCAL"
  },
  { 
    id: "R_700_R", routeNo: "천안 700번", busType: "일반시내버스", 
    fromStopId: "STOP_CHUNGNAM_03", toStopId: "STOP_CHUNGNAM_02", 
    distanceKm: 22.1, durationMin: 30, intervalMin: 25, fare: 1500, operatingCity: "세종시/천안시", 
    tip: "전의역에서 천안역 방면 탑승.",
    firstTime: "06:20", lastTime: "21:40", intervalText: "25~35분", operatingCompany: "천안 건창여객",
    backupLines: ["천안 710번"], transferDiscount: "CHUNGNAM_LOCAL"
  },
  { 
    id: "R_801_F", routeNo: "세종 801번", busType: "시내버스", 
    fromStopId: "STOP_CHUNGNAM_03", toStopId: "STOP_SEJONG_01", 
    distanceKm: 16.5, durationMin: 22, intervalMin: 30, fare: 1400, operatingCity: "세종특별자치시", 
    tip: "전의역 앞 정류장에서 조치원역 직행 탑승!",
    firstTime: "06:00", lastTime: "22:00", intervalText: "25~35분", operatingCompany: "세종도시교통공사",
    backupLines: ["세종 990번"], transferDiscount: "SEJONG_LOCAL"
  },
  { 
    id: "R_801_R", routeNo: "세종 801번", busType: "시내버스", 
    fromStopId: "STOP_SEJONG_01", toStopId: "STOP_CHUNGNAM_03", 
    distanceKm: 16.5, durationMin: 22, intervalMin: 30, fare: 1400, operatingCity: "세종특별자치시", 
    tip: "조치원역에서 전의역 방면 탑승.",
    firstTime: "06:00", lastTime: "22:00", intervalText: "25~35분", operatingCompany: "세종도시교통공사",
    backupLines: ["세종 990번"], transferDiscount: "SEJONG_LOCAL"
  },
  { 
    id: "R_SEJONG_SUMOK_01_F", routeNo: "세종 221번", busType: "일반시내버스", 
    fromStopId: "STOP_SEJONG_SUMOK", toStopId: "STOP_SEJONG_01", 
    distanceKm: 11.0, durationMin: 20, intervalMin: 12, fare: 1400, operatingCity: "세종특별자치시", 
    tip: "국립세종수목원/세종호수공원에서 조치원역 방면 세종 221번 탑승!",
    firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "세종도시교통공사",
    backupLines: ["세종 270번"], transferDiscount: "SEJONG_LOCAL"
  },
  { 
    id: "R_SEJONG_SUMOK_01_R", routeNo: "세종 221번", busType: "일반시내버스", 
    fromStopId: "STOP_SEJONG_01", toStopId: "STOP_SEJONG_SUMOK", 
    distanceKm: 11.0, durationMin: 20, intervalMin: 12, fare: 1400, operatingCity: "세종특별자치시", 
    tip: "조치원역에서 국립세종수목원/세종호수공원 방면 세종 221번 탑승.",
    firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "세종도시교통공사",
    backupLines: ["세종 270번"], transferDiscount: "SEJONG_LOCAL"
  },
  { 
    id: "R_SEJONG_01_02_F", routeNo: "세종 601번", busType: "시내버스", 
    fromStopId: "STOP_SEJONG_01", toStopId: "STOP_SEJONG_02", 
    distanceKm: 15.0, durationMin: 20, intervalMin: 10, fare: 1400, operatingCity: "세종특별자치시", 
    tip: "조치원역에서 세종고속시외버스터미널 직행 탑승!",
    firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "세종도시교통공사",
    backupLines: ["세종 B0번"], transferDiscount: "SEJONG_LOCAL"
  },
  { 
    id: "R_SEJONG_01_02_R", routeNo: "세종 601번", busType: "시내버스", 
    fromStopId: "STOP_SEJONG_02", toStopId: "STOP_SEJONG_01", 
    distanceKm: 15.0, durationMin: 20, intervalMin: 10, fare: 1400, operatingCity: "세종특별자치시", 
    tip: "세종터미널에서 조치원역 방면 탑승.",
    firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "세종도시교통공사",
    backupLines: ["세종 B0번"], transferDiscount: "SEJONG_LOCAL"
  },
  { 
    id: "R_SEJONG_SUMOK_02_F", routeNo: "세종 222번", busType: "일반시내버스", 
    fromStopId: "STOP_SEJONG_SUMOK", toStopId: "STOP_SEJONG_02", 
    distanceKm: 3.2, durationMin: 8, intervalMin: 12, fare: 1400, operatingCity: "세종특별자치시", 
    tip: "국립세종수목원/세종호수공원에서 세종고속시외버스터미널 방면 세종 222번 탑승!",
    firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "세종도시교통공사",
    backupLines: ["세종 221번"], transferDiscount: "SEJONG_LOCAL"
  },
  { 
    id: "R_SEJONG_SUMOK_02_R", routeNo: "세종 222번", busType: "일반시내버스", 
    fromStopId: "STOP_SEJONG_02", toStopId: "STOP_SEJONG_SUMOK", 
    distanceKm: 3.2, durationMin: 8, intervalMin: 12, fare: 1400, operatingCity: "세종특별자치시", 
    tip: "세종터미널에서 국립세종수목원/세종호수공원 방면 세종 222번 탑승.",
    firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "세종도시교통공사",
    backupLines: ["세종 221번"], transferDiscount: "SEJONG_LOCAL"
  },
  { 
    id: "R_SEJONG_SUMOK_03_F", routeNo: "세종 221번", busType: "일반시내버스", 
    fromStopId: "STOP_SEJONG_SUMOK", toStopId: "STOP_SEJONG_03", 
    distanceKm: 4.5, durationMin: 10, intervalMin: 12, fare: 1400, operatingCity: "세종특별자치시", 
    tip: "국립세종수목원/세종호수공원에서 정부세종청사 경유 세종충남대병원 방면 세종 221번 탑승!",
    firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "세종도시교통공사",
    backupLines: ["세종 222번"], transferDiscount: "SEJONG_LOCAL"
  },
  { 
    id: "R_SEJONG_SUMOK_03_R", routeNo: "세종 221번", busType: "일반시내버스", 
    fromStopId: "STOP_SEJONG_03", toStopId: "STOP_SEJONG_SUMOK", 
    distanceKm: 4.5, durationMin: 10, intervalMin: 12, fare: 1400, operatingCity: "세종특별자치시", 
    tip: "세종충남대병원에서 국립세종수목원/세종호수공원 방면 세종 221번 탑승.",
    firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "세종도시교통공사",
    backupLines: ["세종 222번"], transferDiscount: "SEJONG_LOCAL"
  },
  { 
    id: "R_B1_F", routeNo: "대전 B1번 BRT", busType: "BRT 시내버스", 
    fromStopId: "STOP_SEJONG_02", toStopId: "STOP_DAEJEON_01", 
    distanceKm: 24.6, durationMin: 32, intervalMin: 10, fare: 1700, operatingCity: "세종특별자치시/대전광역시", 
    tip: "세종터미널 중앙차로에서 대전역 동광장 32분 직행!",
    firstTime: "05:30", lastTime: "23:40", intervalText: "8~12분", operatingCompany: "대전 대전운수",
    backupLines: ["대전 1001번", "세종 1001번"], transferDiscount: "DAEJEON_SEJONG"
  },
  { 
    id: "R_B1_R", routeNo: "대전 B1번 BRT", busType: "BRT 시내버스", 
    fromStopId: "STOP_DAEJEON_01", toStopId: "STOP_SEJONG_02", 
    distanceKm: 24.6, durationMin: 32, intervalMin: 10, fare: 1700, operatingCity: "대전광역시/세종특별자치시", 
    tip: "대전역 동광장에서 세종터미널/세종시청 이동.",
    firstTime: "05:30", lastTime: "23:40", intervalText: "8~12분", operatingCompany: "대전 대전운수",
    backupLines: ["대전 1001번"], transferDiscount: "DAEJEON_SEJONG"
  },

  // ==========================================
  // 2. 대전 ↔ 옥천 ↔ 영동 ↔ 추풍령 ↔ 김천 ↔ 구미 ↔ 왜관 ↔ 대구 ↔ 영천 ↔ 경주 ↔ 울산 ↔ 부산 경부 축
  // ==========================================
  { 
    id: "R_607_F", routeNo: "대전 607번 (대전-옥천)", busType: "일반시내버스", 
    fromStopId: "STOP_DAEJEON_01", toStopId: "STOP_CHUNGBUK_01", 
    distanceKm: 21.0, durationMin: 35, intervalMin: 15, fare: 1800, operatingCity: "대전광역시/충북 옥천군", 
    tip: "⚠️ 대전-옥천 경계 통과로 시계외(관외) 할증 요금 (+300원)이 포함된 1,800원이 차감됩니다.",
    firstTime: "05:40", lastTime: "22:30", intervalText: "15~20분", operatingCompany: "대전 대전버스",
    backupLines: ["옥천 607번"], transferDiscount: "CITY_BORDER_SURCHARGE"
  },
  { 
    id: "R_607_R", routeNo: "대전 607번 (옥천-대전)", busType: "일반시내버스", 
    fromStopId: "STOP_CHUNGBUK_01", toStopId: "STOP_DAEJEON_01", 
    distanceKm: 21.0, durationMin: 35, intervalMin: 15, fare: 1800, operatingCity: "충북 옥천군/대전광역시", 
    tip: "⚠️ 옥천 종점에서 대전역 동광장 탑승 (관외 할증 요금 포함).",
    firstTime: "05:40", lastTime: "22:30", intervalText: "15~20분", operatingCompany: "대전 대전버스",
    backupLines: ["옥천 607번"], transferDiscount: "CITY_BORDER_SURCHARGE"
  },
  { 
    id: "R_OKCHEON_F", routeNo: "옥천 601번 (옥천-영동)", busType: "농어촌버스", 
    fromStopId: "STOP_CHUNGBUK_01", toStopId: "STOP_CHUNGBUK_02", 
    distanceKm: 31.2, durationMin: 40, intervalMin: 45, fare: 1500, operatingCity: "충북 옥천군/영동군", 
    tip: "옥천 종점에서 영동역 탑승!",
    firstTime: "06:30", lastTime: "20:40", intervalText: "40~50분", operatingCompany: "충북 옥천버스",
    backupLines: ["옥천 602번"], transferDiscount: "LOCAL_BUS"
  },
  { 
    id: "R_OKCHEON_R", routeNo: "옥천 601번 (영동-옥천)", busType: "농어촌버스", 
    fromStopId: "STOP_CHUNGBUK_02", toStopId: "STOP_CHUNGBUK_01", 
    distanceKm: 31.2, durationMin: 40, intervalMin: 45, fare: 1500, operatingCity: "충북 영동군/옥천군", 
    tip: "영동역에서 옥천 종점 탑승.",
    firstTime: "06:30", lastTime: "20:40", intervalText: "40~50분", operatingCompany: "충북 옥천버스",
    backupLines: ["옥천 602번"], transferDiscount: "LOCAL_BUS"
  },
  { 
    id: "R_YEONGDONG_F", routeNo: "영동 시내버스 (영동-추풍령)", busType: "농어촌버스", 
    fromStopId: "STOP_CHUNGBUK_02", toStopId: "STOP_CHUNGBUK_03", 
    distanceKm: 19.8, durationMin: 28, intervalMin: 50, fare: 1500, operatingCity: "충북 영동군", 
    tip: "추풍령 고개 정류장 하차 (충북-경북 경계 고개).",
    firstTime: "06:40", lastTime: "19:50", intervalText: "45~60분", operatingCompany: "충북 동일버스",
    backupLines: ["영동 610번"], transferDiscount: "LOCAL_BUS"
  },
  { 
    id: "R_YEONGDONG_R", routeNo: "영동 시내버스 (추풍령-영동)", busType: "농어촌버스", 
    fromStopId: "STOP_CHUNGBUK_03", toStopId: "STOP_CHUNGBUK_02", 
    distanceKm: 19.8, durationMin: 28, intervalMin: 50, fare: 1500, operatingCity: "충북 영동군", 
    tip: "추풍령 정류장에서 영동역 탑승.",
    firstTime: "06:40", lastTime: "19:50", intervalText: "45~60분", operatingCompany: "충북 동일버스",
    backupLines: ["영동 610번"], transferDiscount: "LOCAL_BUS"
  },
  { 
    id: "R_GC11_F", routeNo: "김천 11번 (추풍령-김천)", busType: "시내버스", 
    fromStopId: "STOP_CHUNGBUK_03", toStopId: "STOP_GYEONGBUK_01", 
    distanceKm: 20.4, durationMin: 30, intervalMin: 30, fare: 1400, operatingCity: "경북 김천시", 
    tip: "경상북도 진입 첫 시내버스! 김천역 도착",
    firstTime: "06:10", lastTime: "21:30", intervalText: "25~35분", operatingCompany: "김천 김천버스",
    backupLines: ["김천 111번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_GC11_R", routeNo: "김천 11번 (김천-추풍령)", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_01", toStopId: "STOP_CHUNGBUK_03", 
    distanceKm: 20.4, durationMin: 30, intervalMin: 30, fare: 1400, operatingCity: "경북 김천시", 
    tip: "김천역 건너편에서 추풍령 탑승.",
    firstTime: "06:10", lastTime: "21:30", intervalText: "25~35분", operatingCompany: "김천 김천버스",
    backupLines: ["김천 111번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_555_F", routeNo: "김천/구미 555번", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_01", toStopId: "STOP_GYEONGBUK_02", 
    distanceKm: 23.1, durationMin: 35, intervalMin: 20, fare: 1500, operatingCity: "김천시/구미시", 
    tip: "대구경북 광역환승할인 적용 (김천역 -> 구미역).",
    firstTime: "06:00", lastTime: "22:10", intervalText: "18~25분", operatingCompany: "구미 일선교통 / 구미버스",
    backupLines: ["구미 55번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_555_R", routeNo: "김천/구미 555번", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_02", toStopId: "STOP_GYEONGBUK_01", 
    distanceKm: 23.1, durationMin: 35, intervalMin: 20, fare: 1500, operatingCity: "구미시/김천시", 
    tip: "구미역에서 김천역 탑승.",
    firstTime: "06:00", lastTime: "22:10", intervalText: "18~25분", operatingCompany: "구미 일선교통",
    backupLines: ["구미 55번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_111_F", routeNo: "구미 111번 (구미-왜관)", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_02", toStopId: "STOP_GYEONGBUK_03", 
    distanceKm: 25.0, durationMin: 38, intervalMin: 25, fare: 1500, operatingCity: "구미시/칠곡군", 
    tip: "구미역에서 왜관 북부정류장 탑승.",
    firstTime: "06:00", lastTime: "22:00", intervalText: "20~30분", operatingCompany: "구미 일선교통",
    backupLines: ["구미 11번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_111_R", routeNo: "구미 111번 (왜관-구미)", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_03", toStopId: "STOP_GYEONGBUK_02", 
    distanceKm: 25.0, durationMin: 38, intervalMin: 25, fare: 1500, operatingCity: "칠곡군/구미시", 
    tip: "왜관 북부정류장에서 구미역 탑승.",
    firstTime: "06:00", lastTime: "22:00", intervalText: "20~30분", operatingCompany: "구미 일선교통",
    backupLines: ["구미 11번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_250_F", routeNo: "칠곡 250번 (왜관-대구)", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_03", toStopId: "STOP_DAEGU_01", 
    distanceKm: 21.8, durationMin: 32, intervalMin: 18, fare: 1500, operatingCity: "칠곡군/대구광역시", 
    tip: "대구 태전역 도착 (대구경북 광역환승 가능).",
    firstTime: "05:50", lastTime: "22:20", intervalText: "15~22분", operatingCompany: "경북 경일교통",
    backupLines: ["칠곡 200번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_250_R", routeNo: "칠곡 250번 (대구-왜관)", busType: "시내버스", 
    fromStopId: "STOP_DAEGU_01", toStopId: "STOP_GYEONGBUK_03", 
    distanceKm: 21.8, durationMin: 32, intervalMin: 18, fare: 1500, operatingCity: "대구광역시/칠곡군", 
    tip: "대구 태전역에서 왜관 북부정류장 탑승.",
    firstTime: "05:50", lastTime: "22:20", intervalText: "15~22분", operatingCompany: "경북 경일교통",
    backupLines: ["칠곡 200번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_708_F", routeNo: "대구 708번 (태전역-동대구역)", busType: "간선버스", 
    fromStopId: "STOP_DAEGU_01", toStopId: "STOP_DAEGU_02", 
    distanceKm: 13.5, durationMin: 24, intervalMin: 9, fare: 1500, operatingCity: "대구광역시", 
    tip: "동대구역 복합환승센터 탑승.",
    firstTime: "05:30", lastTime: "23:05", intervalText: "8~12분", operatingCompany: "대구 우주교통",
    backupLines: ["대구 724번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_708_R", routeNo: "대구 708번 (동대구역-태전역)", busType: "간선버스", 
    fromStopId: "STOP_DAEGU_02", toStopId: "STOP_DAEGU_01", 
    distanceKm: 13.5, durationMin: 24, intervalMin: 9, fare: 1500, operatingCity: "대구광역시", 
    tip: "동대구역에서 태전역 방면 탑승.",
    firstTime: "05:30", lastTime: "23:05", intervalText: "8~12분", operatingCompany: "대구 우주교통",
    backupLines: ["대구 724번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_55_F", routeNo: "대구 55번 (대구-영천)", busType: "시내버스", 
    fromStopId: "STOP_DAEGU_02", toStopId: "STOP_GYEONGBUK_04", 
    distanceKm: 34.2, durationMin: 45, intervalMin: 18, fare: 1800, operatingCity: "대구시/영천시", 
    tip: "영천 시외버스터미널 정류장 도착.",
    firstTime: "05:40", lastTime: "22:40", intervalText: "15~22분", operatingCompany: "대구 대우교통",
    backupLines: ["대구 555번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_55_R", routeNo: "대구 55번 (영천-대구)", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_04", toStopId: "STOP_DAEGU_02", 
    distanceKm: 34.2, durationMin: 45, intervalMin: 18, fare: 1800, operatingCity: "영천시/대구시", 
    tip: "영천터미널에서 동대구역 방면 탑승.",
    firstTime: "05:40", lastTime: "22:40", intervalText: "15~22분", operatingCompany: "대구 대우교통",
    backupLines: ["대구 555번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_753_F", routeNo: "영천 753번 (영천-아화)", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_04", toStopId: "STOP_GYEONGBUK_05", 
    distanceKm: 18.5, durationMin: 25, intervalMin: 35, fare: 1500, operatingCity: "영천시/경주시", 
    tip: "경주 서면 아화 정류장 하차.",
    firstTime: "06:20", lastTime: "20:50", intervalText: "30~40분", operatingCompany: "영천 영천교통",
    backupLines: ["영천 751번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_753_R", routeNo: "영천 753번 (아화-영천)", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_05", toStopId: "STOP_GYEONGBUK_04", 
    distanceKm: 18.5, durationMin: 25, intervalMin: 35, fare: 1500, operatingCity: "경주시/영천시", 
    tip: "경주 아화에서 영천터미널 방면 탑승.",
    firstTime: "06:20", lastTime: "20:50", intervalText: "30~40분", operatingCompany: "영천 영천교통",
    backupLines: ["영천 751번"], transferDiscount: "DAEGU_GB_INTEGRATED"
  },
  { 
    id: "R_300_GJ_F", routeNo: "경주 300번 (아화-경주)", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_05", toStopId: "STOP_GYEONGBUK_06", 
    distanceKm: 17.2, durationMin: 24, intervalMin: 20, fare: 1600, operatingCity: "경주시", 
    tip: "경주고속버스터미널 앞 정류장 직행.",
    firstTime: "06:00", lastTime: "22:10", intervalText: "18~25분", operatingCompany: "경주 새천년미소",
    backupLines: ["경주 301번"], transferDiscount: "GYEONGBUK_LOCAL"
  },
  { 
    id: "R_300_GJ_R", routeNo: "경주 300번 (경주-아화)", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_06", toStopId: "STOP_GYEONGBUK_05", 
    distanceKm: 17.2, durationMin: 24, intervalMin: 20, fare: 1600, operatingCity: "경주시", 
    tip: "경주터미널에서 아화 방면 탑승.",
    firstTime: "06:00", lastTime: "22:10", intervalText: "18~25분", operatingCompany: "경주 새천년미소",
    backupLines: ["경주 301번"], transferDiscount: "GYEONGBUK_LOCAL"
  },
  { 
    id: "R_500_GJ_F", routeNo: "경주 500번 (경주-언양)", busType: "시내버스", 
    fromStopId: "STOP_GYEONGBUK_06", toStopId: "STOP_ULSAN_01", 
    distanceKm: 33.0, durationMin: 40, intervalMin: 30, fare: 1600, operatingCity: "경주시/울산시", 
    tip: "울산 언양터미널 도달.",
    firstTime: "06:15", lastTime: "21:30", intervalText: "25~35분", operatingCompany: "경주 새천년미소",
    backupLines: ["경주 506번"], transferDiscount: "NO_DISCOUNT"
  },
  { 
    id: "R_500_GJ_R", routeNo: "경주 500번 (언양-경주)", busType: "시내버스", 
    fromStopId: "STOP_ULSAN_01", toStopId: "STOP_GYEONGBUK_06", 
    distanceKm: 33.0, durationMin: 40, intervalMin: 30, fare: 1600, operatingCity: "울산시/경주시", 
    tip: "울산 언양터미널에서 경주터미널 방면 탑승.",
    firstTime: "06:15", lastTime: "21:30", intervalText: "25~35분", operatingCompany: "경주 새천년미소",
    backupLines: ["경주 506번"], transferDiscount: "NO_DISCOUNT"
  },
  { 
    id: "R_1713_F", routeNo: "울산 1713번 (언양-노포역)", busType: "직행좌석 시내버스", 
    fromStopId: "STOP_ULSAN_01", toStopId: "STOP_BUSAN_01", 
    distanceKm: 39.5, durationMin: 45, intervalMin: 15, fare: 2300, operatingCity: "울산시/부산시", 
    tip: "부산 금정구 노포역 직통 탑승!",
    firstTime: "05:40", lastTime: "22:50", intervalText: "12~18분", operatingCompany: "울산 신식교통",
    backupLines: ["울산 1127번", "울산 2100번"], transferDiscount: "ULSAN_BUSAN_INTEGRATED"
  },
  { 
    id: "R_1713_R", routeNo: "울산 1713번 (노포역-언양)", busType: "직행좌석 시내버스", 
    fromStopId: "STOP_BUSAN_01", toStopId: "STOP_ULSAN_01", 
    distanceKm: 39.5, durationMin: 45, intervalMin: 15, fare: 2300, operatingCity: "부산시/울산시", 
    tip: "부산 노포역에서 울산 언양터미널 방면 탑승.",
    firstTime: "05:40", lastTime: "22:50", intervalText: "12~18분", operatingCompany: "울산 신식교통",
    backupLines: ["울산 1127번"], transferDiscount: "ULSAN_BUSAN_INTEGRATED"
  },
  { 
    id: "R_50_BS_F", routeNo: "부산 50번 (노포역-부산역)", busType: "일반시내버스", 
    fromStopId: "STOP_BUSAN_01", toStopId: "STOP_BUSAN_02", 
    distanceKm: 23.4, durationMin: 40, intervalMin: 10, fare: 1550, operatingCity: "부산광역시", 
    tip: "부산역 시내버스 환승센터 최종 완주!",
    firstTime: "04:45", lastTime: "23:00", intervalText: "8~12분", operatingCompany: "부산 삼화여객",
    backupLines: ["부산 1001번"], transferDiscount: "BUSAN_LOCAL"
  },
  { 
    id: "R_50_BS_R", routeNo: "부산 50번 (부산역-노포역)", busType: "일반시내버스", 
    fromStopId: "STOP_BUSAN_02", toStopId: "STOP_BUSAN_01", 
    distanceKm: 23.4, durationMin: 40, intervalMin: 10, fare: 1550, operatingCity: "부산광역시", 
    tip: "부산역에서 노포동 방면 상행 탑승.",
    firstTime: "04:45", lastTime: "23:00", intervalText: "8~12분", operatingCompany: "부산 삼화여객",
    backupLines: ["부산 1001번"], transferDiscount: "BUSAN_LOCAL"
  },

  // ==========================================
  // 3. 인천공항, 구리시, 강원권 & 호남권 축
  // ==========================================
  { 
    id: "R_INCHEON_AIRPORT_SEOUL_F", routeNo: "인천 3000번 / 경기 3300번", busType: "광역시내버스", 
    fromStopId: "STOP_INCHEON_AIRPORT_T2", toStopId: "STOP_SEOUL_01", 
    distanceKm: 52.0, durationMin: 60, intervalMin: 20, fare: 2400, operatingCity: "인천/서울특별시", 
    tip: "인천공항T2에서 인천공항고속도로 경유 서울역 버스환승센터 직행 탑승!",
    firstTime: "05:20", lastTime: "22:40", intervalText: "15~25분", operatingCompany: "인천 마니교통",
    backupLines: ["인천 303-1번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_INCHEON_AIRPORT_SEOUL_R", routeNo: "인천 3000번 / 경기 3300번", busType: "광역시내버스", 
    fromStopId: "STOP_SEOUL_01", toStopId: "STOP_INCHEON_AIRPORT_T2", 
    distanceKm: 52.0, durationMin: 60, intervalMin: 20, fare: 2400, operatingCity: "서울특별시/인천", 
    tip: "서울역 버스환승센터에서 인천공항T2 방면 탑승.",
    firstTime: "05:20", lastTime: "22:40", intervalText: "15~25분", operatingCompany: "인천 마니교통",
    backupLines: ["인천 303-1번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_INCHEON_AIRPORT_01_F", routeNo: "인천 303번 / 인천 307번", busType: "좌석/시내버스", 
    fromStopId: "STOP_INCHEON_AIRPORT_T2", toStopId: "STOP_INCHEON_01", 
    distanceKm: 38.0, durationMin: 45, intervalMin: 15, fare: 1900, operatingCity: "인천광역시", 
    tip: "인천공항T2에서 인천대교 경유 인천터미널역 방면 탑승!",
    firstTime: "05:00", lastTime: "23:00", intervalText: "12~18분", operatingCompany: "인천 신성교통",
    backupLines: ["인천 303-1번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_INCHEON_AIRPORT_01_R", routeNo: "인천 303번 / 인천 307번", busType: "좌석/시내버스", 
    fromStopId: "STOP_INCHEON_01", toStopId: "STOP_INCHEON_AIRPORT_T2", 
    distanceKm: 38.0, durationMin: 45, intervalMin: 15, fare: 1900, operatingCity: "인천광역시", 
    tip: "인천터미널역에서 인천대교 경유 인천공항T2 방면 탑승.",
    firstTime: "05:00", lastTime: "23:00", intervalText: "12~18분", operatingCompany: "인천 신성교통",
    backupLines: ["인천 303-1번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_SEOUL_GURI_F", routeNo: "서울 201번 / 경기 165번 / 경기 51번", busType: "간선/시내버스", 
    fromStopId: "STOP_SEOUL_03", toStopId: "STOP_GYEONGGI_GURI", 
    distanceKm: 8.5, durationMin: 18, intervalMin: 8, fare: 1500, operatingCity: "서울/구리시", 
    tip: "청량리역 환승센터에서 망우로 경유 구리역.돌다리(안골로 입구) 직행 탑승!",
    firstTime: "04:30", lastTime: "23:15", intervalText: "6~10분", operatingCompany: "서울 대원여객 / 경기 경기운수",
    backupLines: ["경기 65번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_SEOUL_GURI_R", routeNo: "서울 201번 / 경기 165번 / 경기 51번", busType: "간선/시내버스", 
    fromStopId: "STOP_GYEONGGI_GURI", toStopId: "STOP_SEOUL_03", 
    distanceKm: 8.5, durationMin: 18, intervalMin: 8, fare: 1500, operatingCity: "구리시/서울", 
    tip: "구리역.돌다리 버스정류장에서 상봉역 경유 청량리역 환승센터 탑승.",
    firstTime: "04:30", lastTime: "23:15", intervalText: "6~10분", operatingCompany: "서울 대원여객",
    backupLines: ["경기 65번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_GURI_GANGWON_F", routeNo: "경기 1330-2번 + 춘천 56번", busType: "직행좌석/시내버스", 
    fromStopId: "STOP_GYEONGGI_GURI", toStopId: "STOP_GANGWON_01", 
    distanceKm: 68.0, durationMin: 120, intervalMin: 35, fare: 2800, operatingCity: "구리/가평/춘천", 
    tip: "구리역.돌다리에서 경기 1330-2번 탑승 후 가평터미널에서 춘천 56번 시내버스 환승!",
    firstTime: "05:50", lastTime: "22:00", intervalText: "30~45분", operatingCompany: "경기 가평교통 / 춘천 춘천시민버스",
    backupLines: ["경기 1330-4번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_GURI_GANGWON_R", routeNo: "춘천 56번 + 경기 1330-2번", busType: "직행좌석/시내버스", 
    fromStopId: "STOP_GANGWON_01", toStopId: "STOP_GYEONGGI_GURI", 
    distanceKm: 68.0, durationMin: 120, intervalMin: 35, fare: 2800, operatingCity: "춘천/가평/구리", 
    tip: "춘천역에서 56번 시내버스 탑승 후 가평터미널에서 서울/구리 1330-2번 환승.",
    firstTime: "05:50", lastTime: "22:00", intervalText: "30~45분", operatingCompany: "춘천 춘천시민버스 / 경기 가평교통",
    backupLines: ["경기 1330-4번"], transferDiscount: "INTEGRATED"
  },
  { 
    id: "R_WONJU_GW_F", routeNo: "춘천 56번 + 원주 51번", busType: "시내버스", 
    fromStopId: "STOP_GANGWON_01", toStopId: "STOP_GANGWON_03", 
    distanceKm: 38.0, durationMin: 55, intervalMin: 25, fare: 1500, operatingCity: "춘천시/원주시", 
    tip: "춘천역에서 춘천 56번 탑승 후 횡성/원주 경계에서 원주 51번 시내버스 환승!",
    firstTime: "06:00", lastTime: "22:00", intervalText: "20~30분", operatingCompany: "춘천시민버스 / 원주 동신운수",
    backupLines: ["원주 2번"], transferDiscount: "GANGWON_LOCAL"
  },
  { 
    id: "R_WONJU_GW_R", routeNo: "원주 51번 + 춘천 56번", busType: "시내버스", 
    fromStopId: "STOP_GANGWON_03", toStopId: "STOP_GANGWON_01", 
    distanceKm: 38.0, durationMin: 55, intervalMin: 25, fare: 1500, operatingCity: "원주시/춘천시", 
    tip: "원주터미널에서 원주 51번 탑승 후 춘천 56번 시내버스 환승.",
    firstTime: "06:00", lastTime: "22:00", intervalText: "20~30분", operatingCompany: "원주 동신운수 / 춘천시민버스",
    backupLines: ["원주 2번"], transferDiscount: "GANGWON_LOCAL"
  },
  { 
    id: "R_WONJU_CHUNGJU_F", routeNo: "원주 31번 + 충주 363번", busType: "시내버스", 
    fromStopId: "STOP_GANGWON_03", toStopId: "STOP_CHUNGBUK_04", 
    distanceKm: 35.0, durationMin: 65, intervalMin: 35, fare: 1500, operatingCity: "원주시/충주시", 
    tip: "원주터미널에서 원주 31번 탑승 후 귀래에서 충주 363번/100번 시내버스 환승!",
    firstTime: "06:10", lastTime: "21:30", intervalText: "30~40분", operatingCompany: "원주 태창운수 / 충주 삼화버스",
    backupLines: ["충주 100번"], transferDiscount: "GANGWON_LOCAL"
  },
  { 
    id: "R_WONJU_CHUNGJU_R", routeNo: "충주 363번 + 원주 31번", busType: "시내버스", 
    fromStopId: "STOP_CHUNGBUK_04", toStopId: "STOP_GANGWON_03", 
    distanceKm: 35.0, durationMin: 65, intervalMin: 35, fare: 1500, operatingCity: "충주시/원주시", 
    tip: "충주터미널에서 충주 363번 탑승 후 귀래에서 원주 31번 환승.",
    firstTime: "06:10", lastTime: "21:30", intervalText: "30~40분", operatingCompany: "충주 삼화버스 / 원주 태창운수",
    backupLines: ["원주 51번"], transferDiscount: "GANGWON_LOCAL"
  },
  { 
    id: "R_CHUNGBUK_4_1_F", routeNo: "충주 100번 + 청주 311번 + 옥천 601번", busType: "시내버스", 
    fromStopId: "STOP_CHUNGBUK_04", toStopId: "STOP_CHUNGBUK_01", 
    distanceKm: 42.0, durationMin: 70, intervalMin: 45, fare: 1500, operatingCity: "충주시/청주시/옥천군", 
    tip: "충주에서 청주 311번 탑승 후 청주/대전 경유 옥천 601번 시내버스 환승!",
    firstTime: "06:10", lastTime: "21:20", intervalText: "40~50분", operatingCompany: "충주 삼화버스 / 청주 우진교통 / 옥천버스",
    backupLines: ["청주 211번"], transferDiscount: "CHUNGBUK_LOCAL"
  },
  { 
    id: "R_CHUNGBUK_4_1_R", routeNo: "옥천 601번 + 청주 311번 + 충주 100번", busType: "시내버스", 
    fromStopId: "STOP_CHUNGBUK_01", toStopId: "STOP_CHUNGBUK_04", 
    distanceKm: 42.0, durationMin: 70, intervalMin: 45, fare: 1500, operatingCity: "옥천군/청주시/충주시", 
    tip: "옥천 종점에서 대전/청주 경유 충주 100번 환승.",
    firstTime: "06:10", lastTime: "21:20", intervalText: "40~50분", operatingCompany: "옥천버스 / 청주 우진교통",
    backupLines: ["청주 211번"], transferDiscount: "CHUNGBUK_LOCAL"
  },
  { 
    id: "R_GONGJU_SJ_F", routeNo: "공주 500번 / 세종 550번", busType: "시내버스", 
    fromStopId: "STOP_SEJONG_02", toStopId: "STOP_CHUNGNAM_04", 
    distanceKm: 15.0, durationMin: 20, intervalMin: 20, fare: 1500, operatingCity: "세종시/공주시", 
    tip: "세종터미널에서 공주 종합버스터미널 탑승.",
    firstTime: "06:00", lastTime: "22:10", intervalText: "15~25분", operatingCompany: "공주 시민교통",
    backupLines: ["세종 551번"], transferDiscount: "CHUNGNAM_LOCAL"
  },
  { 
    id: "R_GONGJU_SJ_R", routeNo: "공주 500번 / 세종 550번", busType: "시내버스", 
    fromStopId: "STOP_CHUNGNAM_04", toStopId: "STOP_SEJONG_02", 
    distanceKm: 15.0, durationMin: 20, intervalMin: 20, fare: 1500, operatingCity: "공주시/세종시", 
    tip: "공주터미널에서 세종터미널 방면 탑승.",
    firstTime: "06:00", lastTime: "22:10", intervalText: "15~25분", operatingCompany: "공주 시민교통",
    backupLines: ["세종 551번"], transferDiscount: "CHUNGNAM_LOCAL"
  },
  { 
    id: "R_CHEONGJU_OSONG_F", routeNo: "세종 B3번 BRT / 청주 747번", busType: "BRT/급행버스", 
    fromStopId: "STOP_SEJONG_02", toStopId: "STOP_CHUNGBUK_05", 
    distanceKm: 12.0, durationMin: 18, intervalMin: 12, fare: 1700, operatingCity: "세종시/청주시", 
    tip: "세종터미널에서 오송역/청주공항 방면 BRT 탑승.",
    firstTime: "05:40", lastTime: "23:20", intervalText: "10~15분", operatingCompany: "청주 청주교통 / 세종도시교통공사",
    backupLines: ["청주 502번"], transferDiscount: "CHUNGBUK_LOCAL"
  },
  { 
    id: "R_CHEONGJU_OSONG_R", routeNo: "세종 B3번 BRT / 청주 747번", busType: "BRT/급행버스", 
    fromStopId: "STOP_CHUNGBUK_05", toStopId: "STOP_SEJONG_02", 
    distanceKm: 12.0, durationMin: 18, intervalMin: 12, fare: 1700, operatingCity: "청주시/세종시", 
    tip: "오송역 환승센터에서 세종터미널 방면 BRT 탑승.",
    firstTime: "05:40", lastTime: "23:20", intervalText: "10~15분", operatingCompany: "청주 청주교통",
    backupLines: ["청주 502번"], transferDiscount: "CHUNGBUK_LOCAL"
  },
  { 
    id: "R_DAEJEON_GANGGYEONG_F", routeNo: "대전 202번 / 논산 301번 / 논산 101번", busType: "시내/농어촌버스", 
    fromStopId: "STOP_DAEJEON_01", toStopId: "STOP_CHUNGNAM_GANGGYEONG", 
    distanceKm: 42.0, durationMin: 55, intervalMin: 20, fare: 1600, operatingCity: "대전시/충남 논산시", 
    tip: "대전역 동광장에서 대전 202번 탑승 후 계룡/논산에서 논산 101번 환승 강경터미널 도착!",
    firstTime: "05:30", lastTime: "22:30", intervalText: "15~25분", operatingCompany: "대전 대전운수 / 논산 덕성여객",
    backupLines: ["계룡 2002번"], transferDiscount: "NO_DISCOUNT"
  },
  { 
    id: "R_DAEJEON_GANGGYEONG_R", routeNo: "논산 101번 / 대전 202번", busType: "시내/농어촌버스", 
    fromStopId: "STOP_CHUNGNAM_GANGGYEONG", toStopId: "STOP_DAEJEON_01", 
    distanceKm: 42.0, durationMin: 55, intervalMin: 20, fare: 1600, operatingCity: "충남 논산시/대전시", 
    tip: "강경버스터미널에서 논산 101번 탑승 후 계룡 경유 대전역 동광장 환승.",
    firstTime: "05:30", lastTime: "22:30", intervalText: "15~25분", operatingCompany: "논산 덕성여객 / 대전 대전운수",
    backupLines: ["계룡 2002번"], transferDiscount: "NO_DISCOUNT"
  },
  { 
    id: "R_333_IKSAN_F", routeNo: "익산 3330번 / 익산 39번 / 익산 3100번", busType: "시내/좌석버스", 
    fromStopId: "STOP_CHUNGNAM_GANGGYEONG", toStopId: "STOP_JEONBUK_01", 
    distanceKm: 23.0, durationMin: 40, intervalMin: 25, fare: 1500, operatingCity: "충남 논산시/전북 익산시", 
    tip: "강경버스터미널에서 익산 3330번/39번 탑승 후 함열/원광대 경유 익산역 버스정류장 진입!",
    firstTime: "06:00", lastTime: "21:30", intervalText: "20~30분", operatingCompany: "익산 익산여객 / 신성여객 / 광신여객",
    backupLines: ["익산 3100번"], transferDiscount: "JEONBUK_LOCAL"
  },
  { 
    id: "R_333_IKSAN_R", routeNo: "익산 3330번 / 익산 39번 / 익산 3100번", busType: "시내/좌석버스", 
    fromStopId: "STOP_JEONBUK_01", toStopId: "STOP_CHUNGNAM_GANGGYEONG", 
    distanceKm: 23.0, durationMin: 40, intervalMin: 25, fare: 1500, operatingCity: "전북 익산시/충남 논산시", 
    tip: "익산역에서 원광대, 함열 경유 강경버스터미널 방면 탑승 (익산 3330번 / 39번 / 3100번).",
    firstTime: "06:00", lastTime: "21:30", intervalText: "20~30분", operatingCompany: "익산 익산여객",
    backupLines: ["익산 3100번"], transferDiscount: "JEONBUK_LOCAL"
  },
  { 
    id: "R_111_HN_F", routeNo: "전북 111번 (익산-전주)", busType: "시내버스", 
    fromStopId: "STOP_JEONBUK_01", toStopId: "STOP_JEONBUK_02", 
    distanceKm: 24.0, durationMin: 40, intervalMin: 15, fare: 1500, operatingCity: "익산시/전주시", 
    tip: "삼례 경유 전주시외터미널 도착.",
    firstTime: "05:45", lastTime: "22:15", intervalText: "12~18분", operatingCompany: "전주 성진여객",
    backupLines: ["전주 535번"], transferDiscount: "JEONBUK_LOCAL"
  },
  { 
    id: "R_111_HN_R", routeNo: "전북 111번 (전주-익산)", busType: "시내버스", 
    fromStopId: "STOP_JEONBUK_02", toStopId: "STOP_JEONBUK_01", 
    distanceKm: 24.0, durationMin: 40, intervalMin: 15, fare: 1500, operatingCity: "전주시/익산시", 
    tip: "전주시외터미널에서 익산역 탑승.",
    firstTime: "05:45", lastTime: "22:15", intervalText: "12~18분", operatingCompany: "전주 성진여객",
    backupLines: ["전주 535번"], transferDiscount: "JEONBUK_LOCAL"
  },
  { 
    id: "R_JEONJU_JEONGEUP_F", routeNo: "전주 970번 + 정읍 201번", busType: "시내버스", 
    fromStopId: "STOP_JEONBUK_02", toStopId: "STOP_JEONBUK_03", 
    distanceKm: 28.0, durationMin: 35, intervalMin: 20, fare: 1500, operatingCity: "전주시/정읍시", 
    tip: "전주시외터미널에서 전주 970번 탑승 후 원평/태인에서 정읍 201번 환승 정읍역 진입!",
    firstTime: "06:00", lastTime: "22:00", intervalText: "15~25분", operatingCompany: "전주 신성여객 / 정읍 대한여객",
    backupLines: ["정읍 100번"], transferDiscount: "JEONBUK_LOCAL"
  },
  { 
    id: "R_JEONJU_JEONGEUP_R", routeNo: "전북 1000번 / 정읍 100번", busType: "시내버스", 
    fromStopId: "STOP_JEONBUK_03", toStopId: "STOP_JEONBUK_02", 
    distanceKm: 28.0, durationMin: 35, intervalMin: 20, fare: 1500, operatingCity: "정읍시/전주시", 
    tip: "정읍역에서 전주시외터미널 방면 탑승.",
    firstTime: "06:00", lastTime: "22:00", intervalText: "15~25분", operatingCompany: "전주 신성여객",
    backupLines: ["정읍 101번"], transferDiscount: "JEONBUK_LOCAL"
  },
  { 
    id: "R_100_HN_F", routeNo: "전북-전남 농어촌 100번 (정읍-장성)", busType: "농어촌/시내버스", 
    fromStopId: "STOP_JEONBUK_03", toStopId: "STOP_JEONNAM_01", 
    distanceKm: 18.0, durationMin: 25, intervalMin: 30, fare: 1600, operatingCity: "전북 정읍/전남 장성", 
    tip: "정읍 노령재 경유 전남 장성 진입.",
    firstTime: "06:20", lastTime: "19:40", intervalText: "25~35분", operatingCompany: "장성 장성교통",
    backupLines: ["장성 101번"], transferDiscount: "NO_DISCOUNT"
  },
  { 
    id: "R_100_HN_R", routeNo: "전북-전남 농어촌 100번 (장성-정읍)", busType: "농어촌/시내버스", 
    fromStopId: "STOP_JEONNAM_01", toStopId: "STOP_JEONBUK_03", 
    distanceKm: 18.0, durationMin: 25, intervalMin: 30, fare: 1600, operatingCity: "전남 장성/전북 정읍", 
    tip: "장성 사거리에서 정읍역 방면 탑승.",
    firstTime: "06:20", lastTime: "19:40", intervalText: "25~35분", operatingCompany: "장성 장성교통",
    backupLines: ["장성 101번"], transferDiscount: "NO_DISCOUNT"
  },
  { 
    id: "R_160_GJ_F", routeNo: "광주 160번 (장성-광주)", busType: "시내/광역버스", 
    fromStopId: "STOP_JEONNAM_01", toStopId: "STOP_GWANGJU_01", 
    distanceKm: 28.0, durationMin: 45, intervalMin: 15, fare: 1600, operatingCity: "장성군/광주광역시", 
    tip: "광주 유스퀘어 종합버스터미널 도착.",
    firstTime: "05:30", lastTime: "22:40", intervalText: "12~18분", operatingCompany: "광주 나주시내버스",
    backupLines: ["광주 161번"], transferDiscount: "GWANGJU_LOCAL"
  },
  { 
    id: "R_160_GJ_R", routeNo: "광주 160번 (광주-장성)", busType: "시내/광역버스", 
    fromStopId: "STOP_GWANGJU_01", toStopId: "STOP_JEONNAM_01", 
    distanceKm: 28.0, durationMin: 45, intervalMin: 15, fare: 1600, operatingCity: "광주광역시/장성군", 
    tip: "광주 유스퀘어 앞 정류장에서 장성 방면 탑승.",
    firstTime: "05:30", lastTime: "22:40", intervalText: "12~18분", operatingCompany: "광주 나주시내버스",
    backupLines: ["광주 161번"], transferDiscount: "GWANGJU_LOCAL"
  },
  { 
    id: "R_SUNCHEON_GJ_F", routeNo: "광주 160번 / 순천 77번", busType: "시내버스", 
    fromStopId: "STOP_GWANGJU_01", toStopId: "STOP_JEONNAM_03", 
    distanceKm: 45.0, durationMin: 55, intervalMin: 20, fare: 1700, operatingCity: "광주시/순천시", 
    tip: "광주 유스퀘어에서 순천역 방면 탑승.",
    firstTime: "06:00", lastTime: "22:00", intervalText: "15~25분", operatingCompany: "순천 동신교통",
    backupLines: ["순천 99번"], transferDiscount: "JEONNAM_LOCAL"
  },
  { 
    id: "R_SUNCHEON_GJ_R", routeNo: "광주 160번 / 순천 77번", busType: "시내버스", 
    fromStopId: "STOP_JEONNAM_03", toStopId: "STOP_GWANGJU_01", 
    distanceKm: 45.0, durationMin: 55, intervalMin: 20, fare: 1700, operatingCity: "순천시/광주시", 
    tip: "순천역에서 광주 유스퀘어 방면 탑승.",
    firstTime: "06:00", lastTime: "22:00", intervalText: "15~25분", operatingCompany: "순천 동신교통",
    backupLines: ["순천 99번"], transferDiscount: "JEONNAM_LOCAL"
  },
  { 
    id: "R_200_MP_F", routeNo: "광주-목포 200번 (광주-목포)", busType: "시내버스", 
    fromStopId: "STOP_GWANGJU_01", toStopId: "STOP_JEONNAM_02", 
    distanceKm: 68.0, durationMin: 100, intervalMin: 25, fare: 3000, operatingCity: "광주/나주/목포", 
    tip: "나주 영산포 경유 목포역 직통.",
    firstTime: "06:00", lastTime: "21:30", intervalText: "20~30분", operatingCompany: "목포 낭만버스",
    backupLines: ["목포 500번"], transferDiscount: "JEONNAM_LOCAL"
  },
  { 
    id: "R_200_MP_R", routeNo: "광주-목포 200번 (목포-광주)", busType: "시내버스", 
    fromStopId: "STOP_JEONNAM_02", toStopId: "STOP_GWANGJU_01", 
    distanceKm: 68.0, durationMin: 100, intervalMin: 25, fare: 3000, operatingCity: "목포/나주/광주", 
    tip: "목포역 정류장에서 광주 유스퀘어 방면 탑승.",
    firstTime: "06:00", lastTime: "21:30", intervalText: "20~30분", operatingCompany: "목포 낭만버스",
    backupLines: ["목포 500번"], transferDiscount: "JEONNAM_LOCAL"
  },
  { 
    id: "R_JEJU_201_F", routeNo: "제주 201번 / 101번", busType: "시내/급행버스", 
    fromStopId: "STOP_JEJU_01", toStopId: "STOP_JEJU_02", 
    distanceKm: 42.0, durationMin: 60, intervalMin: 15, fare: 1200, operatingCity: "제주특별자치도", 
    tip: "제주공항에서 서귀포버스터미널 이동.",
    firstTime: "06:00", lastTime: "22:00", intervalText: "12~18분", operatingCompany: "제주 삼영교통",
    backupLines: ["제주 181번"], transferDiscount: "JEJU_LOCAL"
  },
  { 
    id: "R_JEJU_201_R", routeNo: "제주 201번 / 101번", busType: "시내/급행버스", 
    fromStopId: "STOP_JEJU_02", toStopId: "STOP_JEJU_01", 
    distanceKm: 42.0, durationMin: 60, intervalMin: 15, fare: 1200, operatingCity: "제주특별자치도", 
    tip: "서귀포버스터미널에서 제주공항 이동.",
    firstTime: "06:00", lastTime: "22:00", intervalText: "12~18분", operatingCompany: "제주 삼영교통",
    backupLines: ["제주 181번"], transferDiscount: "JEJU_LOCAL"
  },

  // ==========================================
  // 강원 동해안/산간 축 신규 노선
  // ==========================================
  { id: "R_DONGHAE_GANGNEUNG_F", routeNo: "동해 111번 / 강릉 120번", busType: "시내버스", fromStopId: "STOP_GANGWON_04", toStopId: "STOP_GANGWON_DONGHAE", distanceKm: 25.0, durationMin: 40, intervalMin: 20, fare: 1500, operatingCity: "강릉시/동해시", tip: "강릉역에서 동해시외버스터미널 방면 111번/120번 탑승!", firstTime: "06:00", lastTime: "22:00", intervalText: "18~25분", operatingCompany: "동해 동해버스", backupLines: ["강릉 112번"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_DONGHAE_GANGNEUNG_R", routeNo: "동해 111번 / 강릉 120번", busType: "시내버스", fromStopId: "STOP_GANGWON_DONGHAE", toStopId: "STOP_GANGWON_04", distanceKm: 25.0, durationMin: 40, intervalMin: 20, fare: 1500, operatingCity: "동해시/강릉시", tip: "동해터미널에서 강릉역 방면 탑승.", firstTime: "06:00", lastTime: "22:00", intervalText: "18~25분", operatingCompany: "동해 동해버스", backupLines: ["강릉 112번"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_SAMCHEOK_DONGHAE_F", routeNo: "삼척 24번 / 동해 70번", busType: "시내버스", fromStopId: "STOP_GANGWON_DONGHAE", toStopId: "STOP_GANGWON_SAMCHEOK", distanceKm: 18.0, durationMin: 30, intervalMin: 20, fare: 1500, operatingCity: "동해시/삼척시", tip: "동해터미널에서 삼척종합버스터미널 방면 24번 탑승!", firstTime: "05:50", lastTime: "22:00", intervalText: "15~25분", operatingCompany: "삼척 삼척버스", backupLines: ["동해 70번"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_SAMCHEOK_DONGHAE_R", routeNo: "삼척 24번 / 동해 70번", busType: "시내버스", fromStopId: "STOP_GANGWON_SAMCHEOK", toStopId: "STOP_GANGWON_DONGHAE", distanceKm: 18.0, durationMin: 30, intervalMin: 20, fare: 1500, operatingCity: "삼척시/동해시", tip: "삼척터미널에서 동해 방면 탑승.", firstTime: "05:50", lastTime: "22:00", intervalText: "15~25분", operatingCompany: "삼척 삼척버스", backupLines: ["동해 70번"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_TAEBAEK_SAMCHEOK_F", routeNo: "태백 1번 / 삼척 농어촌버스", busType: "농어촌/시내버스", fromStopId: "STOP_GANGWON_SAMCHEOK", toStopId: "STOP_GANGWON_TAEBAEK", distanceKm: 42.0, durationMin: 70, intervalMin: 40, fare: 2000, operatingCity: "삼척시/태백시", tip: "삼척터미널에서 도계 경유 태백 방면 농어촌버스 탑승!", firstTime: "06:20", lastTime: "19:30", intervalText: "35~50분", operatingCompany: "삼척 삼척버스", backupLines: ["태백 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_TAEBAEK_SAMCHEOK_R", routeNo: "태백 1번 / 삼척 농어촌버스", busType: "농어촌/시내버스", fromStopId: "STOP_GANGWON_TAEBAEK", toStopId: "STOP_GANGWON_SAMCHEOK", distanceKm: 42.0, durationMin: 70, intervalMin: 40, fare: 2000, operatingCity: "태백시/삼척시", tip: "태백터미널에서 도계 경유 삼척 방면 탑승.", firstTime: "06:20", lastTime: "19:30", intervalText: "35~50분", operatingCompany: "태백 태백버스", backupLines: ["삼척 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_TAEBAEK_JEONGSEON_F", routeNo: "태백 2번 / 정선 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_TAEBAEK", toStopId: "STOP_GANGWON_JEONGSEON", distanceKm: 38.0, durationMin: 60, intervalMin: 50, fare: 2000, operatingCity: "태백시/정선군", tip: "태백터미널에서 고한/사북 경유 정선 방면 탑승!", firstTime: "07:00", lastTime: "18:00", intervalText: "45~60분", operatingCompany: "태백 태백버스 / 정선 정선버스", backupLines: ["정선 1번"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_TAEBAEK_JEONGSEON_R", routeNo: "태백 2번 / 정선 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_JEONGSEON", toStopId: "STOP_GANGWON_TAEBAEK", distanceKm: 38.0, durationMin: 60, intervalMin: 50, fare: 2000, operatingCity: "정선군/태백시", tip: "정선터미널에서 사북/고한 경유 태백 방면 탑승.", firstTime: "07:00", lastTime: "18:00", intervalText: "45~60분", operatingCompany: "정선 정선버스", backupLines: ["태백 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_JEONGSEON_YEONGWOL_F", routeNo: "정선 100번 / 영월 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_JEONGSEON", toStopId: "STOP_GANGWON_YEONGWOL", distanceKm: 30.0, durationMin: 55, intervalMin: 60, fare: 1800, operatingCity: "정선군/영월군", tip: "정선터미널에서 영월 방면 농어촌버스 탑승!", firstTime: "07:10", lastTime: "17:30", intervalText: "55~75분", operatingCompany: "정선 정선버스", backupLines: ["영월 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_JEONGSEON_YEONGWOL_R", routeNo: "영월 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_YEONGWOL", toStopId: "STOP_GANGWON_JEONGSEON", distanceKm: 30.0, durationMin: 55, intervalMin: 60, fare: 1800, operatingCity: "영월군/정선군", tip: "영월터미널에서 정선 방면 탑승.", firstTime: "07:10", lastTime: "17:30", intervalText: "55~75분", operatingCompany: "영월 영월버스", backupLines: ["정선 100번"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_YEONGWOL_JECHEON_F", routeNo: "영월 200번 / 제천 농어촌버스", busType: "시내/농어촌버스", fromStopId: "STOP_GANGWON_YEONGWOL", toStopId: "STOP_CHUNGBUK_JECHEON", distanceKm: 28.0, durationMin: 50, intervalMin: 50, fare: 1800, operatingCity: "영월군/제천시", tip: "영월터미널에서 제천시외버스터미널 방면 탑승!", firstTime: "06:30", lastTime: "19:00", intervalText: "45~60분", operatingCompany: "영월 영월버스 / 제천 제천버스", backupLines: ["제천 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_YEONGWOL_JECHEON_R", routeNo: "제천 농어촌버스", busType: "시내/농어촌버스", fromStopId: "STOP_CHUNGBUK_JECHEON", toStopId: "STOP_GANGWON_YEONGWOL", distanceKm: 28.0, durationMin: 50, intervalMin: 50, fare: 1800, operatingCity: "제천시/영월군", tip: "제천터미널에서 영월 방면 탑승.", firstTime: "06:30", lastTime: "19:00", intervalText: "45~60분", operatingCompany: "제천 제천버스", backupLines: ["영월 200번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_JECHEON_CHUNGJU_F", routeNo: "제천 850번/170번 (제천-백운/산척) → 충주 336번/356번 (산척-충주터미널)", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_JECHEON", toStopId: "STOP_CHUNGBUK_04", distanceKm: 38.0, durationMin: 60, intervalMin: 35, fare: 1600, operatingCity: "제천시/충주시", tip: "제천터미널에서 850/170번 탑승 후 백운/산척에서 충주 336번 환승!", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "제천교통 / 충주 삼화버스", backupLines: ["충주 356번", "제천 860번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_JECHEON_CHUNGJU_R", routeNo: "충주 336번/356번 (충주터미널-산척) → 제천 850번/170번 (산척/백운-제천역)", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_04", toStopId: "STOP_CHUNGBUK_JECHEON", distanceKm: 38.0, durationMin: 60, intervalMin: 35, fare: 1600, operatingCity: "충주시/제천시", tip: "충주터미널에서 336번 탑승 후 산척/백운에서 제천 850/170번 환승.", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "충주 삼화버스 / 제천교통", backupLines: ["제천 860번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_JECHEON_DANYANG_F", routeNo: "제천 160번 / 170번 (제천역-매포-도담삼봉-단양터미널)", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_JECHEON", toStopId: "STOP_CHUNGBUK_DANYANG", distanceKm: 32.0, durationMin: 50, intervalMin: 30, fare: 1600, operatingCity: "제천시/단양군", tip: "제천역/터미널에서 매포 경유 단양터미널(다누리센터 앞) 직통 160/170번 탑승!", firstTime: "06:20", lastTime: "20:30", intervalText: "25~40분", operatingCompany: "제천교통 / 제천운수 / 단양버스", backupLines: ["제천 170번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_JECHEON_DANYANG_R", routeNo: "제천 160번 / 170번 (단양터미널-매포-제천역)", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_DANYANG", toStopId: "STOP_CHUNGBUK_JECHEON", distanceKm: 32.0, durationMin: 50, intervalMin: 30, fare: 1600, operatingCity: "단양군/제천시", tip: "단양터미널(다누리센터)에서 매포 경유 제천역/터미널 직통 160/170번 탑승.", firstTime: "06:20", lastTime: "20:30", intervalText: "25~40분", operatingCompany: "단양버스 / 제천교통", backupLines: ["제천 160번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_DANYANG_YEONGJU_F", routeNo: "단양 500번대 (단양-죽령) → 영주 25번/30번 (죽령-풍기역-영주터미널)", busType: "농어촌버스", fromStopId: "STOP_CHUNGBUK_DANYANG", toStopId: "STOP_GYEONGBUK_YEONGJU", distanceKm: 45.0, durationMin: 75, intervalMin: 60, fare: 2000, operatingCity: "단양군/영주시", tip: "단양터미널에서 500번대 탑승 후 죽령 정상에서 영주 25번/30번 환승!", firstTime: "07:00", lastTime: "18:00", intervalText: "55~75분", operatingCompany: "단양 단양버스 / 영주 영주여객", backupLines: ["영주 25번", "영주 30번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_DANYANG_YEONGJU_R", routeNo: "영주 25번/30번 (영주-풍기-죽령) → 단양 500번대 (죽령-단양터미널)", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_YEONGJU", toStopId: "STOP_CHUNGBUK_DANYANG", distanceKm: 45.0, durationMin: 75, intervalMin: 60, fare: 2000, operatingCity: "영주시/단양군", tip: "영주터미널에서 25번 탑승 후 죽령 정상에서 단양 500번대 환승.", firstTime: "07:00", lastTime: "18:00", intervalText: "55~75분", operatingCompany: "영주 영주여객 / 단양 단양버스", backupLines: ["단양 500번대"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_BOEUN_CHEONGJU_F", routeNo: "보은 500번대 → 청주 250번 (미원-청주상당공원)", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_BOEUN", toStopId: "STOP_CHUNGBUK_05", distanceKm: 28.0, durationMin: 45, intervalMin: 35, fare: 1500, operatingCity: "보은군/청주시", tip: "보은터미널에서 미원 경유 청주 방면 250번 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "보은 보은버스 / 청주 청주교통", backupLines: ["청주 251번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_BOEUN_CHEONGJU_R", routeNo: "청주 250번 (청주-미원) → 보은 500번대", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_05", toStopId: "STOP_CHUNGBUK_BOEUN", distanceKm: 28.0, durationMin: 45, intervalMin: 35, fare: 1500, operatingCity: "청주시/보은군", tip: "청주에서 미원 경유 보은터미널 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "청주 청주교통 / 보은 보은버스", backupLines: ["보은 500번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_BOEUN_OKCHEON_F", routeNo: "보은-안내 농어촌버스 → 옥천 601번/602번", busType: "농어촌버스", fromStopId: "STOP_CHUNGBUK_BOEUN", toStopId: "STOP_CHUNGBUK_01", distanceKm: 22.0, durationMin: 40, intervalMin: 50, fare: 1500, operatingCity: "보은군/옥천군", tip: "보은터미널에서 안내면 경유 옥천 종점 방면 탑승!", firstTime: "07:00", lastTime: "18:30", intervalText: "45~60분", operatingCompany: "보은 보은버스 / 옥천 옥천버스", backupLines: ["옥천 601번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_BOEUN_OKCHEON_R", routeNo: "옥천 601번/602번 → 보은-안내 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_CHUNGBUK_01", toStopId: "STOP_CHUNGBUK_BOEUN", distanceKm: 22.0, durationMin: 40, intervalMin: 50, fare: 1500, operatingCity: "옥천군/보은군", tip: "옥천 종점에서 안내면 경유 보은터미널 방면 탑승.", firstTime: "07:00", lastTime: "18:30", intervalText: "45~60분", operatingCompany: "옥천 옥천버스 / 보은 보은버스", backupLines: ["보은 500번"], transferDiscount: "CHUNGBUK_LOCAL" },

  // ==========================================
  // 경북 내륙 시골 축 신규 노선
  // ==========================================
  { id: "R_ANDONG_YEONGJU_F", routeNo: "안동 212번 (안동터미널-옹천) → 영주 50번/51번/54번 (옹천-영주터미널)", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_ANDONG", toStopId: "STOP_GYEONGBUK_YEONGJU", distanceKm: 35.0, durationMin: 55, intervalMin: 30, fare: 1700, operatingCity: "안동시/영주시", tip: "안동터미널에서 212번 탑승 후 옹천정류소에서 영주 50번 환승!", firstTime: "06:00", lastTime: "21:00", intervalText: "25~35분", operatingCompany: "안동버스 / 경안여객 / 영주여객", backupLines: ["영주 51번", "영주 54번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_ANDONG_YEONGJU_R", routeNo: "영주 50번/51번/54번 (영주-옹천) → 안동 212번 (옹천-안동역/터미널)", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_YEONGJU", toStopId: "STOP_GYEONGBUK_ANDONG", distanceKm: 35.0, durationMin: 55, intervalMin: 30, fare: 1700, operatingCity: "영주시/안동시", tip: "영주터미널에서 50번 탑승 후 옹천정류소에서 안동 212번 환승.", firstTime: "06:00", lastTime: "21:00", intervalText: "25~35분", operatingCompany: "영주여객 / 안동버스", backupLines: ["안동 212번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_YEONGJU_BONGHWA_F", routeNo: "영주 33번 / 봉화 농어촌버스", busType: "시내/농어촌버스", fromStopId: "STOP_GYEONGBUK_YEONGJU", toStopId: "STOP_GYEONGBUK_BONGHWA", distanceKm: 28.0, durationMin: 50, intervalMin: 45, fare: 1700, operatingCity: "영주시/봉화군", tip: "영주터미널에서 봉화 방면 영주 33번/봉화버스 탑승!", firstTime: "06:30", lastTime: "20:00", intervalText: "40~55분", operatingCompany: "영주 영주여객 / 봉화 봉화버스", backupLines: ["봉화 100번대"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_YEONGJU_BONGHWA_R", routeNo: "봉화 농어촌버스 / 영주 33번", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_BONGHWA", toStopId: "STOP_GYEONGBUK_YEONGJU", distanceKm: 28.0, durationMin: 50, intervalMin: 45, fare: 1700, operatingCity: "봉화군/영주시", tip: "봉화터미널에서 영주 방면 탑승.", firstTime: "06:30", lastTime: "20:00", intervalText: "40~55분", operatingCompany: "봉화 봉화버스 / 영주 영주여객", backupLines: ["영주 33번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_BONGHWA_TAEBAEK_F", routeNo: "봉화 석포행 버스 → 태백 4번 (석포-동점-태백터미널)", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_BONGHWA", toStopId: "STOP_GANGWON_TAEBAEK", distanceKm: 52.0, durationMin: 90, intervalMin: 90, fare: 2500, operatingCity: "봉화군/태백시", tip: "봉화터미널에서 석포 경유 태백 4번 환승 탑승!", firstTime: "07:30", lastTime: "16:30", intervalText: "80~110분", operatingCompany: "봉화 봉화버스 / 태백 태백버스", backupLines: ["태백 4번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_BONGHWA_TAEBAEK_R", routeNo: "태백 4번 (태백-동점-석포) → 봉화 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_TAEBAEK", toStopId: "STOP_GYEONGBUK_BONGHWA", distanceKm: 52.0, durationMin: 90, intervalMin: 90, fare: 2500, operatingCity: "태백시/봉화군", tip: "태백터미널에서 4번 탑승 후 석포에서 봉화 방면 환승.", firstTime: "07:30", lastTime: "16:30", intervalText: "80~110분", operatingCompany: "태백 태백버스 / 봉화 봉화버스", backupLines: ["봉화 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_ANDONG_CHEONGSONG_F", routeNo: "안동 610번/611번 (안동-길안) → 청송 행복버스 (길안-안덕-청송터미널)", busType: "시내/농어촌버스", fromStopId: "STOP_GYEONGBUK_ANDONG", toStopId: "STOP_GYEONGBUK_CHEONGSONG", distanceKm: 42.0, durationMin: 70, intervalMin: 50, fare: 1800, operatingCity: "안동시/청송군", tip: "안동터미널에서 610번 탑승 후 길안정류소에서 청송 행복버스 환승!", firstTime: "06:30", lastTime: "19:30", intervalText: "45~60분", operatingCompany: "안동 안동버스 / 청송 청송버스", backupLines: ["청송 행복버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_ANDONG_CHEONGSONG_R", routeNo: "청송 행복버스 (청송-안덕-길안) → 안동 610번/611번 (길안-안동역)", busType: "시내/농어촌버스", fromStopId: "STOP_GYEONGBUK_CHEONGSONG", toStopId: "STOP_GYEONGBUK_ANDONG", distanceKm: 42.0, durationMin: 70, intervalMin: 50, fare: 1800, operatingCity: "청송군/안동시", tip: "청송터미널에서 길안행 탑승 후 길안정류소에서 안동 610번 환승.", firstTime: "06:30", lastTime: "19:30", intervalText: "45~60분", operatingCompany: "청송 청송버스 / 안동 안동버스", backupLines: ["안동 610번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_CHEONGSONG_YEONGDEOK_F", routeNo: "청송 행복버스 (청송-진보) → 영덕 농어촌버스 (진보-영덕)", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_CHEONGSONG", toStopId: "STOP_GYEONGBUK_YEONGDEOK", distanceKm: 38.0, durationMin: 65, intervalMin: 60, fare: 1800, operatingCity: "청송군/영덕군", tip: "청송터미널에서 진보터미널 경유 영덕 방면 환승 탑승!", firstTime: "07:00", lastTime: "17:30", intervalText: "55~75분", operatingCompany: "청송 청송버스 / 영덕 영덕버스", backupLines: ["영덕 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_CHEONGSONG_YEONGDEOK_R", routeNo: "영덕 농어촌버스 (영덕-진보) → 청송 행복버스 (진보-청송)", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_YEONGDEOK", toStopId: "STOP_GYEONGBUK_CHEONGSONG", distanceKm: 38.0, durationMin: 65, intervalMin: 60, fare: 1800, operatingCity: "영덕군/청송군", tip: "영덕터미널에서 진보터미널 경유 청송 방면 환승 탑승.", firstTime: "07:00", lastTime: "17:30", intervalText: "55~75분", operatingCompany: "영덕 영덕버스 / 청송 청송버스", backupLines: ["청송 행복버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_POHANG_YEONGDEOK_F", routeNo: "포항 5000번 (급행) / 영덕 농어촌버스", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_07", toStopId: "STOP_GYEONGBUK_YEONGDEOK", distanceKm: 42.0, durationMin: 65, intervalMin: 35, fare: 1800, operatingCity: "포항시/영덕군", tip: "포항시외버스터미널에서 송라 경유 영덕터미널 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "포항 코리아와이드포항 / 영덕 영덕버스", backupLines: ["포항 500번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_POHANG_YEONGDEOK_R", routeNo: "영덕 농어촌버스 / 포항 5000번 (급행)", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_YEONGDEOK", toStopId: "STOP_GYEONGBUK_07", distanceKm: 42.0, durationMin: 65, intervalMin: 35, fare: 1800, operatingCity: "영덕군/포항시", tip: "영덕터미널에서 송라 경유 포항터미널 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "영덕 영덕버스 / 포항 코리아와이드포항", backupLines: ["포항 5000번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_ANDONG_UISEONG_F", routeNo: "안동 150번 / 의성 100번", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_ANDONG", toStopId: "STOP_GYEONGBUK_UISEONG", distanceKm: 30.0, durationMin: 50, intervalMin: 35, fare: 1700, operatingCity: "안동시/의성군", tip: "안동터미널에서 의성 방면 150번 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "안동 경북버스 / 의성 의성버스", backupLines: ["의성 100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_ANDONG_UISEONG_R", routeNo: "의성 100번 / 안동 150번", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_UISEONG", toStopId: "STOP_GYEONGBUK_ANDONG", distanceKm: 30.0, durationMin: 50, intervalMin: 35, fare: 1700, operatingCity: "의성군/안동시", tip: "의성터미널에서 안동 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "의성 의성버스", backupLines: ["안동 150번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_UISEONG_DAEGU_F", routeNo: "의성 200번 + 군위 농어촌버스 + 대구 급행", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_UISEONG", toStopId: "STOP_DAEGU_02", distanceKm: 55.0, durationMin: 80, intervalMin: 45, fare: 2000, operatingCity: "의성군/군위/대구", tip: "의성터미널에서 군위 경유 동대구역 방면 탑승!", firstTime: "06:30", lastTime: "20:00", intervalText: "40~55분", operatingCompany: "의성 의성버스 / 대구 경북버스", backupLines: ["군위 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_UISEONG_DAEGU_R", routeNo: "대구 급행 + 군위 농어촌버스 + 의성 200번", busType: "시내버스", fromStopId: "STOP_DAEGU_02", toStopId: "STOP_GYEONGBUK_UISEONG", distanceKm: 55.0, durationMin: 80, intervalMin: 45, fare: 2000, operatingCity: "대구/군위/의성군", tip: "동대구역에서 군위 경유 의성 방면 탑승.", firstTime: "06:30", lastTime: "20:00", intervalText: "40~55분", operatingCompany: "대구 경북버스", backupLines: ["의성 200번"], transferDiscount: "NO_DISCOUNT" },

  // ==========================================
  // 경남 산간/남해안 축 신규 노선
  // ==========================================
  { id: "R_HAPCHEON_GEOCHANG_F", routeNo: "합천 100번 / 거창 50번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_HAPCHEON", toStopId: "STOP_GYEONGNAM_GEOCHANG", distanceKm: 32.0, durationMin: 55, intervalMin: 40, fare: 1700, operatingCity: "합천군/거창군", tip: "합천터미널에서 가야면 경유 거창 방면 100번 탑승!", firstTime: "06:30", lastTime: "20:30", intervalText: "35~50분", operatingCompany: "합천 합천버스 / 거창 거창버스", backupLines: ["거창 50번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_HAPCHEON_GEOCHANG_R", routeNo: "거창 50번 / 합천 100번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_GEOCHANG", toStopId: "STOP_GYEONGNAM_HAPCHEON", distanceKm: 32.0, durationMin: 55, intervalMin: 40, fare: 1700, operatingCity: "거창군/합천군", tip: "거창터미널에서 합천 방면 탑승.", firstTime: "06:30", lastTime: "20:30", intervalText: "35~50분", operatingCompany: "거창 거창버스", backupLines: ["합천 100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_GEOCHANG_HAMYANG_F", routeNo: "거창 200번 / 함양 100번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_GEOCHANG", toStopId: "STOP_GYEONGNAM_HAMYANG", distanceKm: 25.0, durationMin: 40, intervalMin: 35, fare: 1700, operatingCity: "거창군/함양군", tip: "거창터미널에서 함양 방면 200번 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "거창 거창버스 / 함양 함양버스", backupLines: ["함양 100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_GEOCHANG_HAMYANG_R", routeNo: "함양 100번 / 거창 200번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_HAMYANG", toStopId: "STOP_GYEONGNAM_GEOCHANG", distanceKm: 25.0, durationMin: 40, intervalMin: 35, fare: 1700, operatingCity: "함양군/거창군", tip: "함양터미널에서 거창 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "함양 함양버스", backupLines: ["거창 200번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_HAMYANG_SANCHEONG_F", routeNo: "함양 200번 / 산청 50번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_HAMYANG", toStopId: "STOP_GYEONGNAM_SANCHEONG", distanceKm: 28.0, durationMin: 45, intervalMin: 40, fare: 1700, operatingCity: "함양군/산청군", tip: "함양터미널에서 산청 방면 200번 탑승!", firstTime: "06:00", lastTime: "20:30", intervalText: "35~50분", operatingCompany: "함양 함양버스 / 산청 산청버스", backupLines: ["산청 50번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_HAMYANG_SANCHEONG_R", routeNo: "산청 50번 / 함양 200번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_SANCHEONG", toStopId: "STOP_GYEONGNAM_HAMYANG", distanceKm: 28.0, durationMin: 45, intervalMin: 40, fare: 1700, operatingCity: "산청군/함양군", tip: "산청터미널에서 함양 방면 탑승.", firstTime: "06:00", lastTime: "20:30", intervalText: "35~50분", operatingCompany: "산청 산청버스", backupLines: ["함양 200번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_SANCHEONG_JINJU_F", routeNo: "산청 100번 / 진주 농어촌버스", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_SANCHEONG", toStopId: "STOP_GYEONGNAM_02", distanceKm: 32.0, durationMin: 50, intervalMin: 35, fare: 1700, operatingCity: "산청군/진주시", tip: "산청터미널에서 진주시외버스터미널 방면 100번 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "30~45분", operatingCompany: "산청 산청버스 / 진주 경남버스", backupLines: ["진주 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_SANCHEONG_JINJU_R", routeNo: "진주 농어촌버스 / 산청 100번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_02", toStopId: "STOP_GYEONGNAM_SANCHEONG", distanceKm: 32.0, durationMin: 50, intervalMin: 35, fare: 1700, operatingCity: "진주시/산청군", tip: "진주터미널에서 산청 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "30~45분", operatingCompany: "진주 경남버스", backupLines: ["산청 100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_JINJU_SACHEON_F", routeNo: "진주 60번 / 사천 100번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_02", toStopId: "STOP_GYEONGNAM_SACHEON", distanceKm: 20.0, durationMin: 35, intervalMin: 20, fare: 1500, operatingCity: "진주시/사천시", tip: "진주터미널에서 사천 방면 60번 탑승!", firstTime: "05:50", lastTime: "22:00", intervalText: "18~25분", operatingCompany: "진주 경남버스 / 사천 사천버스", backupLines: ["사천 100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_JINJU_SACHEON_R", routeNo: "사천 100번 / 진주 60번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_SACHEON", toStopId: "STOP_GYEONGNAM_02", distanceKm: 20.0, durationMin: 35, intervalMin: 20, fare: 1500, operatingCity: "사천시/진주시", tip: "사천터미널에서 진주 방면 탑승.", firstTime: "05:50", lastTime: "22:00", intervalText: "18~25분", operatingCompany: "사천 사천버스", backupLines: ["진주 60번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_HADONG_JINJU_F", routeNo: "하동 100번 / 진주 100번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_HADONG", toStopId: "STOP_GYEONGNAM_02", distanceKm: 35.0, durationMin: 55, intervalMin: 30, fare: 1700, operatingCity: "하동군/진주시", tip: "하동터미널에서 진주 방면 100번 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "25~40분", operatingCompany: "하동 하동버스 / 진주 경남버스", backupLines: ["진주 100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_HADONG_JINJU_R", routeNo: "진주 100번 / 하동 100번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_02", toStopId: "STOP_GYEONGNAM_HADONG", distanceKm: 35.0, durationMin: 55, intervalMin: 30, fare: 1700, operatingCity: "진주시/하동군", tip: "진주터미널에서 하동 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "25~40분", operatingCompany: "진주 경남버스", backupLines: ["하동 100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_HADONG_GWANGYANG_F", routeNo: "하동 200번 / 광양 시내버스", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_HADONG", toStopId: "STOP_JEONNAM_GWANGYANG", distanceKm: 22.0, durationMin: 35, intervalMin: 30, fare: 1700, operatingCity: "하동군/광양시", tip: "하동터미널에서 광양 방면 200번 탑승!", firstTime: "06:00", lastTime: "21:30", intervalText: "25~35분", operatingCompany: "하동 하동버스 / 광양 광양버스", backupLines: ["광양 시내버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_HADONG_GWANGYANG_R", routeNo: "광양 시내버스 / 하동 200번", busType: "시내버스", fromStopId: "STOP_JEONNAM_GWANGYANG", toStopId: "STOP_GYEONGNAM_HADONG", distanceKm: 22.0, durationMin: 35, intervalMin: 30, fare: 1700, operatingCity: "광양시/하동군", tip: "광양터미널에서 하동 방면 탑승.", firstTime: "06:00", lastTime: "21:30", intervalText: "25~35분", operatingCompany: "광양 광양버스", backupLines: ["하동 200번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_GWANGYANG_SUNCHEON_F", routeNo: "광양 100번 / 순천 77번", busType: "시내버스", fromStopId: "STOP_JEONNAM_GWANGYANG", toStopId: "STOP_JEONNAM_03", distanceKm: 18.0, durationMin: 28, intervalMin: 15, fare: 1500, operatingCity: "광양시/순천시", tip: "광양터미널에서 순천역 방면 100번 탑승!", firstTime: "05:40", lastTime: "22:30", intervalText: "12~20분", operatingCompany: "광양 광양버스 / 순천 동신교통", backupLines: ["순천 77번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_GWANGYANG_SUNCHEON_R", routeNo: "순천 77번 / 광양 100번", busType: "시내버스", fromStopId: "STOP_JEONNAM_03", toStopId: "STOP_JEONNAM_GWANGYANG", distanceKm: 18.0, durationMin: 28, intervalMin: 15, fare: 1500, operatingCity: "순천시/광양시", tip: "순천역에서 광양 방면 탑승.", firstTime: "05:40", lastTime: "22:30", intervalText: "12~20분", operatingCompany: "순천 동신교통", backupLines: ["광양 100번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_SUNCHEON_YEOSU_F", routeNo: "순천 88번 / 여수 77번", busType: "시내버스", fromStopId: "STOP_JEONNAM_03", toStopId: "STOP_GYEONGNAM_YEOSU", distanceKm: 40.0, durationMin: 60, intervalMin: 20, fare: 1700, operatingCity: "순천시/여수시", tip: "순천역에서 율촌 경유 여수버스터미널 방면 탑승!", firstTime: "06:00", lastTime: "22:00", intervalText: "18~25분", operatingCompany: "순천 동신교통 / 여수 여수버스", backupLines: ["여수 77번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_SUNCHEON_YEOSU_R", routeNo: "여수 77번 / 순천 88번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_YEOSU", toStopId: "STOP_JEONNAM_03", distanceKm: 40.0, durationMin: 60, intervalMin: 20, fare: 1700, operatingCity: "여수시/순천시", tip: "여수터미널에서 순천 방면 탑승.", firstTime: "06:00", lastTime: "22:00", intervalText: "18~25분", operatingCompany: "여수 여수버스", backupLines: ["순천 88번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_CHANGWON_BUSAN_F", routeNo: "창원 2000번 / 부산 2000번", busType: "직행좌석시내버스", fromStopId: "STOP_GYEONGNAM_01", toStopId: "STOP_BUSAN_02", distanceKm: 48.0, durationMin: 65, intervalMin: 15, fare: 2000, operatingCity: "창원시/부산시", tip: "창원터미널에서 부산역 방면 2000번 탑승!", firstTime: "05:30", lastTime: "23:00", intervalText: "12~20분", operatingCompany: "창원 경남버스 / 부산 부산버스", backupLines: ["창원 2100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_CHANGWON_BUSAN_R", routeNo: "부산 2000번 / 창원 2000번", busType: "직행좌석시내버스", fromStopId: "STOP_BUSAN_02", toStopId: "STOP_GYEONGNAM_01", distanceKm: 48.0, durationMin: 65, intervalMin: 15, fare: 2000, operatingCity: "부산시/창원시", tip: "부산역에서 창원 방면 탑승.", firstTime: "05:30", lastTime: "23:00", intervalText: "12~20분", operatingCompany: "부산 부산버스", backupLines: ["창원 2100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_JINJU_CHANGWON_F", routeNo: "진주 700번 / 창원 100번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_02", toStopId: "STOP_GYEONGNAM_01", distanceKm: 40.0, durationMin: 60, intervalMin: 25, fare: 1700, operatingCity: "진주시/창원시", tip: "진주터미널에서 고성 경유 창원 방면 700번 탑승!", firstTime: "06:00", lastTime: "22:00", intervalText: "20~30분", operatingCompany: "진주 경남버스 / 창원 경남버스", backupLines: ["창원 100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_JINJU_CHANGWON_R", routeNo: "창원 100번 / 진주 700번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_01", toStopId: "STOP_GYEONGNAM_02", distanceKm: 40.0, durationMin: 60, intervalMin: 25, fare: 1700, operatingCity: "창원시/진주시", tip: "창원터미널에서 진주 방면 탑승.", firstTime: "06:00", lastTime: "22:00", intervalText: "20~30분", operatingCompany: "창원 경남버스", backupLines: ["진주 700번"], transferDiscount: "NO_DISCOUNT" },

  // ==========================================
  // 동해안 북부 축 (속초·양양·강릉·고성)
  // ==========================================
  { id: "R_SOKCHO_GANGNEUNG_F", routeNo: "속초 9번 / 강릉 고속리무진", busType: "시내버스", fromStopId: "STOP_GANGWON_SOKCHO", toStopId: "STOP_GANGWON_04", distanceKm: 65.0, durationMin: 95, intervalMin: 20, fare: 2800, operatingCity: "속초시/강릉시", tip: "속초터미널에서 양양 경유 강릉역 방면 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "18~25분", operatingCompany: "속초 속초버스 / 강릉 강릉버스", backupLines: ["양양 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_SOKCHO_GANGNEUNG_R", routeNo: "강릉 고속리무진 / 속초 9번", busType: "시내버스", fromStopId: "STOP_GANGWON_04", toStopId: "STOP_GANGWON_SOKCHO", distanceKm: 65.0, durationMin: 95, intervalMin: 20, fare: 2800, operatingCity: "강릉시/속초시", tip: "강릉역에서 양양 경유 속초 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "18~25분", operatingCompany: "강릉 강릉버스", backupLines: ["양양 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_SOKCHO_YANGYANG_F", routeNo: "속초 10번 / 양양 농어촌버스", busType: "시내버스", fromStopId: "STOP_GANGWON_SOKCHO", toStopId: "STOP_GANGWON_YANGYANG", distanceKm: 25.0, durationMin: 40, intervalMin: 20, fare: 1600, operatingCity: "속초시/양양군", tip: "속초터미널에서 양양 방면 10번 탑승!", firstTime: "06:00", lastTime: "22:00", intervalText: "18~25분", operatingCompany: "속초 속초버스 / 양양 양양버스", backupLines: ["양양 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_SOKCHO_YANGYANG_R", routeNo: "양양 농어촌버스 / 속초 10번", busType: "시내버스", fromStopId: "STOP_GANGWON_YANGYANG", toStopId: "STOP_GANGWON_SOKCHO", distanceKm: 25.0, durationMin: 40, intervalMin: 20, fare: 1600, operatingCity: "양양군/속초시", tip: "양양터미널에서 속초 방면 탑승.", firstTime: "06:00", lastTime: "22:00", intervalText: "18~25분", operatingCompany: "양양 양양버스", backupLines: ["속초 10번"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_GOSEONG_SOKCHO_F", routeNo: "고성 1번 / 속초 시내버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_GOSEONG", toStopId: "STOP_GANGWON_SOKCHO", distanceKm: 22.0, durationMin: 35, intervalMin: 30, fare: 1600, operatingCity: "고성군/속초시", tip: "고성터미널에서 속초 방면 1번 탑승!", firstTime: "06:30", lastTime: "21:00", intervalText: "25~35분", operatingCompany: "고성 고성버스 / 속초 속초버스", backupLines: ["속초 시내버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_GOSEONG_SOKCHO_R", routeNo: "속초 시내버스 / 고성 1번", busType: "농어촌버스", fromStopId: "STOP_GANGWON_SOKCHO", toStopId: "STOP_GANGWON_GOSEONG", distanceKm: 22.0, durationMin: 35, intervalMin: 30, fare: 1600, operatingCity: "속초시/고성군", tip: "속초터미널에서 고성 방면 탑승.", firstTime: "06:30", lastTime: "21:00", intervalText: "25~35분", operatingCompany: "속초 속초버스", backupLines: ["고성 1번"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_INJE_SOKCHO_F", routeNo: "인제 100번 / 속초 농어촌버스", busType: "시내/농어촌버스", fromStopId: "STOP_GANGWON_INJE", toStopId: "STOP_GANGWON_SOKCHO", distanceKm: 45.0, durationMin: 70, intervalMin: 45, fare: 2000, operatingCity: "인제군/속초시", tip: "인제터미널에서 속초 방면 100번 탑승!", firstTime: "06:30", lastTime: "19:30", intervalText: "40~55분", operatingCompany: "인제 인제버스 / 속초 속초버스", backupLines: ["속초 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_INJE_SOKCHO_R", routeNo: "속초 농어촌버스 / 인제 100번", busType: "시내/농어촌버스", fromStopId: "STOP_GANGWON_SOKCHO", toStopId: "STOP_GANGWON_INJE", distanceKm: 45.0, durationMin: 70, intervalMin: 45, fare: 2000, operatingCity: "속초시/인제군", tip: "속초터미널에서 인제 방면 탑승.", firstTime: "06:30", lastTime: "19:30", intervalText: "40~55분", operatingCompany: "속초 속초버스", backupLines: ["인제 100번"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_INJE_CHUNCHEON_F", routeNo: "인제 200번 / 춘천 시내버스", busType: "시내버스", fromStopId: "STOP_GANGWON_INJE", toStopId: "STOP_GANGWON_01", distanceKm: 50.0, durationMin: 80, intervalMin: 45, fare: 2000, operatingCity: "인제군/춘천시", tip: "인제터미널에서 홍천 경유 춘천역 방면 200번 탑승!", firstTime: "06:30", lastTime: "19:30", intervalText: "40~55분", operatingCompany: "인제 인제버스 / 춘천 춘천버스", backupLines: ["춘천 시내버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_INJE_CHUNCHEON_R", routeNo: "춘천 시내버스 / 인제 200번", busType: "시내버스", fromStopId: "STOP_GANGWON_01", toStopId: "STOP_GANGWON_INJE", distanceKm: 50.0, durationMin: 80, intervalMin: 45, fare: 2000, operatingCity: "춘천시/인제군", tip: "춘천역에서 인제 방면 탑승.", firstTime: "06:30", lastTime: "19:30", intervalText: "40~55분", operatingCompany: "춘천 춘천버스", backupLines: ["인제 200번"], transferDiscount: "GANGWON_LOCAL" },

  // ==========================================
  // 전남 남해안 신규 노선
  // ==========================================
  { id: "R_MOKPO_HAENAM_F", routeNo: "목포 200번 / 해남 100번", busType: "시내버스", fromStopId: "STOP_JEONNAM_02", toStopId: "STOP_JEONNAM_HAENAM", distanceKm: 38.0, durationMin: 60, intervalMin: 30, fare: 1700, operatingCity: "목포시/해남군", tip: "목포역에서 해남 방면 200번 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "25~35분", operatingCompany: "목포 낭만버스 / 해남 해남버스", backupLines: ["해남 100번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_MOKPO_HAENAM_R", routeNo: "해남 100번 / 목포 200번", busType: "시내버스", fromStopId: "STOP_JEONNAM_HAENAM", toStopId: "STOP_JEONNAM_02", distanceKm: 38.0, durationMin: 60, intervalMin: 30, fare: 1700, operatingCity: "해남군/목포시", tip: "해남터미널에서 목포 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "25~35분", operatingCompany: "해남 해남버스", backupLines: ["목포 200번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_HAENAM_WANDO_F", routeNo: "해남 200번 / 완도 100번", busType: "농어촌버스", fromStopId: "STOP_JEONNAM_HAENAM", toStopId: "STOP_JEONNAM_WANDO", distanceKm: 30.0, durationMin: 50, intervalMin: 45, fare: 1700, operatingCity: "해남군/완도군", tip: "해남터미널에서 완도 방면 200번 탑승!", firstTime: "06:20", lastTime: "19:30", intervalText: "40~55분", operatingCompany: "해남 해남버스 / 완도 완도버스", backupLines: ["완도 100번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_HAENAM_WANDO_R", routeNo: "완도 100번 / 해남 200번", busType: "농어촌버스", fromStopId: "STOP_JEONNAM_WANDO", toStopId: "STOP_JEONNAM_HAENAM", distanceKm: 30.0, durationMin: 50, intervalMin: 45, fare: 1700, operatingCity: "완도군/해남군", tip: "완도터미널에서 해남 방면 탑승.", firstTime: "06:20", lastTime: "19:30", intervalText: "40~55분", operatingCompany: "완도 완도버스", backupLines: ["해남 200번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_SUNCHEON_BOSEONG_F", routeNo: "순천 200번 / 보성 100번", busType: "시내버스", fromStopId: "STOP_JEONNAM_03", toStopId: "STOP_JEONNAM_BOSEONG", distanceKm: 42.0, durationMin: 65, intervalMin: 35, fare: 1700, operatingCity: "순천시/보성군", tip: "순천역에서 보성 방면 200번 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "순천 동신교통 / 보성 보성버스", backupLines: ["보성 100번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_SUNCHEON_BOSEONG_R", routeNo: "보성 100번 / 순천 200번", busType: "시내버스", fromStopId: "STOP_JEONNAM_BOSEONG", toStopId: "STOP_JEONNAM_03", distanceKm: 42.0, durationMin: 65, intervalMin: 35, fare: 1700, operatingCity: "보성군/순천시", tip: "보성터미널에서 순천 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "30~40분", operatingCompany: "보성 보성버스", backupLines: ["순천 200번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_GWANGJU_BOSEONG_F", routeNo: "광주 300번 / 보성 200번", busType: "시내버스", fromStopId: "STOP_GWANGJU_01", toStopId: "STOP_JEONNAM_BOSEONG", distanceKm: 75.0, durationMin: 110, intervalMin: 40, fare: 2500, operatingCity: "광주/보성군", tip: "광주 유스퀘어에서 화순 경유 보성 방면 300번 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "35~50분", operatingCompany: "광주 경원여객 / 보성 보성버스", backupLines: ["보성 200번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_GWANGJU_BOSEONG_R", routeNo: "보성 200번 / 광주 300번", busType: "시내버스", fromStopId: "STOP_JEONNAM_BOSEONG", toStopId: "STOP_GWANGJU_01", distanceKm: 75.0, durationMin: 110, intervalMin: 40, fare: 2500, operatingCity: "보성군/광주", tip: "보성터미널에서 화순 경유 광주 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "35~50분", operatingCompany: "보성 보성버스", backupLines: ["광주 300번"], transferDiscount: "JEONNAM_LOCAL" },

  // ==========================================
  // 전국 100% 완전 그래프 브릿지 노선 (수도권 / 세종대전 / 강원 / 경북 / 경남 / 충북 / 전남)
  // ==========================================
  // 1. 서울/수도권 내부 연계 (강남, 사당, 잠실, 삼성, 인천공항T1, 남양주)
  { id: "R_SEOUL_GANGNAM_1_F", routeNo: "서울 402번 / 서울 421번", busType: "간선버스", fromStopId: "STOP_SEOUL_01", toStopId: "STOP_SEOUL_02", distanceKm: 9.5, durationMin: 25, intervalMin: 8, fare: 1500, operatingCity: "서울특별시", tip: "서울역에서 강남역 방면 402/421번 탑승!", firstTime: "04:30", lastTime: "23:30", intervalText: "6~10분", operatingCompany: "서울 승원여객", backupLines: ["서울 400번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_GANGNAM_1_R", routeNo: "서울 402번 / 서울 421번", busType: "간선버스", fromStopId: "STOP_SEOUL_02", toStopId: "STOP_SEOUL_01", distanceKm: 9.5, durationMin: 25, intervalMin: 8, fare: 1500, operatingCity: "서울특별시", tip: "강남역에서 서울역 방면 탑승.", firstTime: "04:30", lastTime: "23:30", intervalText: "6~10분", operatingCompany: "서울 승원여객", backupLines: ["서울 400번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_SADANG_1_F", routeNo: "서울 502번 / 서울 540번", busType: "간선버스", fromStopId: "STOP_SEOUL_01", toStopId: "STOP_SEOUL_04", distanceKm: 10.2, durationMin: 28, intervalMin: 8, fare: 1500, operatingCity: "서울특별시", tip: "서울역에서 사당역 방면 502번 탑승!", firstTime: "04:30", lastTime: "23:30", intervalText: "6~10분", operatingCompany: "서울 대원여객", backupLines: ["서울 504번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_SADANG_1_R", routeNo: "서울 502번 / 서울 540번", busType: "간선버스", fromStopId: "STOP_SEOUL_04", toStopId: "STOP_SEOUL_01", distanceKm: 10.2, durationMin: 28, intervalMin: 8, fare: 1500, operatingCity: "서울특별시", tip: "사당역에서 서울역 방면 탑승.", firstTime: "04:30", lastTime: "23:30", intervalText: "6~10분", operatingCompany: "서울 대원여객", backupLines: ["서울 504번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_SADANG_GANGNAM_F", routeNo: "서울 4435번 / 서울 340번", busType: "지선버스", fromStopId: "STOP_SEOUL_04", toStopId: "STOP_SEOUL_02", distanceKm: 6.2, durationMin: 18, intervalMin: 7, fare: 1500, operatingCity: "서울특별시", tip: "사당역에서 테헤란로 경유 강남역 탑승!", firstTime: "04:30", lastTime: "23:30", intervalText: "5~8분", operatingCompany: "서울 우신운수", backupLines: ["서울 4319번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_SADANG_GANGNAM_R", routeNo: "서울 4435번 / 서울 340번", busType: "지선버스", fromStopId: "STOP_SEOUL_02", toStopId: "STOP_SEOUL_04", distanceKm: 6.2, durationMin: 18, intervalMin: 7, fare: 1500, operatingCity: "서울특별시", tip: "강남역에서 사당역 방면 탑승.", firstTime: "04:30", lastTime: "23:30", intervalText: "5~8분", operatingCompany: "서울 우신운수", backupLines: ["서울 4319번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_GANGNAM_SAMSEONG_F", routeNo: "서울 360번 / 서울 146번", busType: "간선버스", fromStopId: "STOP_SEOUL_02", toStopId: "STOP_SEOUL_SAMSEONG", distanceKm: 3.5, durationMin: 10, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "강남역에서 삼성역 코엑스 방면 탑승!", firstTime: "04:20", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 한국비알티", backupLines: ["서울 740번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_GANGNAM_SAMSEONG_R", routeNo: "서울 360번 / 서울 146번", busType: "간선버스", fromStopId: "STOP_SEOUL_SAMSEONG", toStopId: "STOP_SEOUL_02", distanceKm: 3.5, durationMin: 10, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "삼성역에서 강남역 방면 탑승.", firstTime: "04:20", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 한국비알티", backupLines: ["서울 740번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_SAMSEONG_JAMSIL_STADIUM_F", routeNo: "서울 341번 / 서울 360번", busType: "간선버스", fromStopId: "STOP_SEOUL_SAMSEONG", toStopId: "STOP_SEOUL_JAMSIL_STADIUM", distanceKm: 1.8, durationMin: 6, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "삼성역에서 종합운동장역/야구장 방면 탑승!", firstTime: "04:20", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 대원여객", backupLines: ["서울 3412번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_SAMSEONG_JAMSIL_STADIUM_R", routeNo: "서울 341번 / 서울 360번", busType: "간선버스", fromStopId: "STOP_SEOUL_JAMSIL_STADIUM", toStopId: "STOP_SEOUL_SAMSEONG", distanceKm: 1.8, durationMin: 6, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "종합운동장역에서 삼성역 방면 탑승.", firstTime: "04:20", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 대원여객", backupLines: ["서울 3412번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_JAMSIL_STADIUM_JAMSIL_F", routeNo: "서울 341번 / 서울 360번", busType: "간선버스", fromStopId: "STOP_SEOUL_JAMSIL_STADIUM", toStopId: "STOP_SEOUL_JAMSIL", distanceKm: 2.2, durationMin: 7, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "종합운동장에서 잠실역 롯데월드몰 방면 탑승!", firstTime: "04:20", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 대원여객", backupLines: ["서울 3412번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_JAMSIL_STADIUM_JAMSIL_R", routeNo: "서울 341번 / 서울 360번", busType: "간선버스", fromStopId: "STOP_SEOUL_JAMSIL", toStopId: "STOP_SEOUL_JAMSIL_STADIUM", distanceKm: 2.2, durationMin: 7, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "잠실역에서 종합운동장 방면 탑승.", firstTime: "04:20", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 대원여객", backupLines: ["서울 3412번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_JAMSIL_GURI_F", routeNo: "경기 1115-6번 / 경기 1650번", busType: "직행좌석버스", fromStopId: "STOP_SEOUL_JAMSIL", toStopId: "STOP_GYEONGGI_GURI", distanceKm: 12.0, durationMin: 22, intervalMin: 10, fare: 2800, operatingCity: "송파구/구리시", tip: "잠실역환승센터에서 강변북로 경유 구리역 돌다리 탑승!", firstTime: "05:30", lastTime: "23:30", intervalText: "8~15분", operatingCompany: "경기 대원운수", backupLines: ["경기 1000번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_JAMSIL_GURI_R", routeNo: "경기 1115-6번 / 경기 1650번", busType: "직행좌석버스", fromStopId: "STOP_GYEONGGI_GURI", toStopId: "STOP_SEOUL_JAMSIL", distanceKm: 12.0, durationMin: 22, intervalMin: 10, fare: 2800, operatingCity: "구리시/송파구", tip: "구리역 돌다리에서 잠실역 탑승.", firstTime: "05:30", lastTime: "23:30", intervalText: "8~15분", operatingCompany: "경기 대원운수", backupLines: ["경기 1000번"], transferDiscount: "INTEGRATED" },
  { id: "R_INCHEON_T1_T2_F", routeNo: "인천공항 셔틀 / 인천 303번", busType: "공항좌석버스", fromStopId: "STOP_INCHEON_AIRPORT_T1", toStopId: "STOP_INCHEON_AIRPORT_T2", distanceKm: 6.5, durationMin: 12, intervalMin: 10, fare: 1650, operatingCity: "인천광역시", tip: "인천공항 T1에서 T2 방면 무료셔틀 / 303번 탑승!", firstTime: "05:00", lastTime: "23:30", intervalText: "8~12분", operatingCompany: "인천 강인교통", backupLines: ["인천공항 셔틀"], transferDiscount: "INTEGRATED" },
  { id: "R_INCHEON_T1_T2_R", routeNo: "인천공항 셔틀 / 인천 303번", busType: "공항좌석버스", fromStopId: "STOP_INCHEON_AIRPORT_T2", toStopId: "STOP_INCHEON_AIRPORT_T1", distanceKm: 6.5, durationMin: 12, intervalMin: 10, fare: 1650, operatingCity: "인천광역시", tip: "인천공항 T2에서 T1 방면 탑승.", firstTime: "05:00", lastTime: "23:30", intervalText: "8~12분", operatingCompany: "인천 강인교통", backupLines: ["인천공항 셔틀"], transferDiscount: "INTEGRATED" },
  { id: "R_GURI_NAMYANGJU_F", routeNo: "경기 65번 / 경기 165번", busType: "일반시내버스", fromStopId: "STOP_GYEONGGI_GURI", toStopId: "STOP_GYEONGGI_NAMYANGJU", distanceKm: 7.8, durationMin: 16, intervalMin: 8, fare: 1450, operatingCity: "구리시/남양주시", tip: "구리역 돌다리에서 남양주시청/금곡역 방면 65번 탑승!", firstTime: "05:00", lastTime: "23:00", intervalText: "6~10분", operatingCompany: "경기 대원운수", backupLines: ["경기 165번"], transferDiscount: "INTEGRATED" },
  { id: "R_GURI_NAMYANGJU_R", routeNo: "경기 65번 / 경기 165번", busType: "일반시내버스", fromStopId: "STOP_GYEONGGI_NAMYANGJU", toStopId: "STOP_GYEONGGI_GURI", distanceKm: 7.8, durationMin: 16, intervalMin: 8, fare: 1450, operatingCity: "남양주시/구리시", tip: "남양주시청에서 구리역 방면 탑승.", firstTime: "05:00", lastTime: "23:00", intervalText: "6~10분", operatingCompany: "경기 대원운수", backupLines: ["경기 165번"], transferDiscount: "INTEGRATED" },
  { id: "R_NAMYANGJU_CHUNCHEON_F", routeNo: "경기 1330-2번 / 춘천 시내버스", busType: "직행좌석/시내버스", fromStopId: "STOP_GYEONGGI_NAMYANGJU", toStopId: "STOP_GANGWON_01", distanceKm: 62.0, durationMin: 85, intervalMin: 30, fare: 2800, operatingCity: "남양주시/가평/춘천시", tip: "남양주 금곡에서 가평/강촌 경유 춘천역 방면 탑승!", firstTime: "05:30", lastTime: "21:30", intervalText: "25~35분", operatingCompany: "경기 진흥고속 / 춘천 춘천버스", backupLines: ["경기 1330-44번"], transferDiscount: "INTEGRATED" },
  { id: "R_NAMYANGJU_CHUNCHEON_R", routeNo: "춘천 시내버스 / 경기 1330-2번", busType: "직행좌석/시내버스", fromStopId: "STOP_GANGWON_01", toStopId: "STOP_GYEONGGI_NAMYANGJU", distanceKm: 62.0, durationMin: 85, intervalMin: 30, fare: 2800, operatingCity: "춘천시/남양주시", tip: "춘천역에서 남양주시청/금곡 방면 탑승.", firstTime: "05:30", lastTime: "21:30", intervalText: "25~35분", operatingCompany: "춘천 춘천버스", backupLines: ["경기 1330-44번"], transferDiscount: "INTEGRATED" },

  // 2. 충청/세종/대전 브릿지 (정부세종청사, 대전 유성온천)
  { id: "R_SEJONG_GOV_TERM_F", routeNo: "세종 B0/B2 BRT", busType: "간선급행 BRT", fromStopId: "STOP_SEJONG_GOVERNMENT", toStopId: "STOP_SEJONG_02", distanceKm: 4.8, durationMin: 10, intervalMin: 6, fare: 1400, operatingCity: "세종특별자치시", tip: "정부세종청사에서 세종터미널 방면 BRT 탑승!", firstTime: "05:30", lastTime: "23:40", intervalText: "5~8분", operatingCompany: "세종 세종도시교통공사", backupLines: ["세종 990번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_GOV_TERM_R", routeNo: "세종 B0/B2 BRT", busType: "간선급행 BRT", fromStopId: "STOP_SEJONG_02", toStopId: "STOP_SEJONG_GOVERNMENT", distanceKm: 4.8, durationMin: 10, intervalMin: 6, fare: 1400, operatingCity: "세종특별자치시", tip: "세종터미널에서 정부세종청사 방면 BRT 탑승.", firstTime: "05:30", lastTime: "23:40", intervalText: "5~8분", operatingCompany: "세종 세종도시교통공사", backupLines: ["세종 990번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_YUSEONG_STN_F", routeNo: "대전 102번 / 대전 105번", busType: "간선버스", fromStopId: "STOP_DAEJEON_02", toStopId: "STOP_DAEJEON_01", distanceKm: 11.2, durationMin: 28, intervalMin: 8, fare: 1500, operatingCity: "대전광역시", tip: "유성온천역에서 대전역 동광장 방면 102번 탑승!", firstTime: "05:40", lastTime: "22:45", intervalText: "7~10분", operatingCompany: "대전 대전교통", backupLines: ["대전 106번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_YUSEONG_STN_R", routeNo: "대전 102번 / 대전 105번", busType: "간선버스", fromStopId: "STOP_DAEJEON_01", toStopId: "STOP_DAEJEON_02", distanceKm: 11.2, durationMin: 28, intervalMin: 8, fare: 1500, operatingCity: "대전광역시", tip: "대전역에서 유성온천역 방면 탑승.", firstTime: "05:40", lastTime: "22:45", intervalText: "7~10분", operatingCompany: "대전 대전교통", backupLines: ["대전 106번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_YUSEONG_GONGJU_F", routeNo: "대전/공주 300번 / 500번", busType: "시내버스", fromStopId: "STOP_DAEJEON_02", toStopId: "STOP_CHUNGNAM_04", distanceKm: 28.0, durationMin: 45, intervalMin: 20, fare: 1600, operatingCity: "대전시/공주시", tip: "유성온천역에서 공주터미널 방면 300/500번 탑승!", firstTime: "06:00", lastTime: "22:00", intervalText: "15~25분", operatingCompany: "공주 시민교통 / 대전 대전교통", backupLines: ["공주 500번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_YUSEONG_GONGJU_R", routeNo: "공주/대전 300번 / 500번", busType: "시내버스", fromStopId: "STOP_CHUNGNAM_04", toStopId: "STOP_DAEJEON_02", distanceKm: 28.0, durationMin: 45, intervalMin: 20, fare: 1600, operatingCity: "공주시/대전시", tip: "공주터미널에서 유성온천역 방면 탑승.", firstTime: "06:00", lastTime: "22:00", intervalText: "15~25분", operatingCompany: "공주 시민교통", backupLines: ["대전 300번"], transferDiscount: "INTEGRATED" },

  // 3. 강원권 브릿지 (홍천터미널)
  { id: "R_HONGCHEON_CHUNCHEON_F", routeNo: "홍천 농어촌버스 / 춘천 시내버스", busType: "시내버스", fromStopId: "STOP_GANGWON_02", toStopId: "STOP_GANGWON_01", distanceKm: 32.0, durationMin: 45, intervalMin: 25, fare: 1600, operatingCity: "홍천군/춘천시", tip: "홍천터미널에서 춘천역 환승정류장 방면 탑승!", firstTime: "06:00", lastTime: "21:30", intervalText: "20~30분", operatingCompany: "홍천 금강고속 / 춘천 춘천버스", backupLines: ["춘천 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_HONGCHEON_CHUNCHEON_R", routeNo: "춘천 시내버스 / 홍천 농어촌버스", busType: "시내버스", fromStopId: "STOP_GANGWON_01", toStopId: "STOP_GANGWON_02", distanceKm: 32.0, durationMin: 45, intervalMin: 25, fare: 1600, operatingCity: "춘천시/홍천군", tip: "춘천역에서 홍천 방면 탑승.", firstTime: "06:00", lastTime: "21:30", intervalText: "20~30분", operatingCompany: "춘천 춘천버스", backupLines: ["홍천 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_HONGCHEON_WONJU_F", routeNo: "홍천/횡성/원주 농어촌버스", busType: "시내버스", fromStopId: "STOP_GANGWON_02", toStopId: "STOP_GANGWON_03", distanceKm: 42.0, durationMin: 60, intervalMin: 30, fare: 1800, operatingCity: "홍천군/원주시", tip: "홍천터미널에서 횡성 경유 원주시외버스터미널 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "25~35분", operatingCompany: "원주 대도여객", backupLines: ["횡성 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_HONGCHEON_WONJU_R", routeNo: "원주/횡성/홍천 농어촌버스", busType: "시내버스", fromStopId: "STOP_GANGWON_03", toStopId: "STOP_GANGWON_02", distanceKm: 42.0, durationMin: 60, intervalMin: 30, fare: 1800, operatingCity: "원주시/홍천군", tip: "원주터미널에서 횡성 경유 홍천 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "25~35분", operatingCompany: "원주 대도여객", backupLines: ["홍천 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },

  // 4. 경북권 브릿지 (영양, 군위, 울진)
  { id: "R_YEONGYANG_CHEONGSONG_F", routeNo: "영양 농어촌버스 / 청송 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_YEONGYANG", toStopId: "STOP_GYEONGBUK_CHEONGSONG", distanceKm: 28.0, durationMin: 45, intervalMin: 60, fare: 1600, operatingCity: "영양군/청송군", tip: "영양터미널에서 진보 경유 청송 방면 탑승!", firstTime: "07:00", lastTime: "18:00", intervalText: "50~70분", operatingCompany: "영양 영양버스 / 청송 청송버스", backupLines: ["청송 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_YEONGYANG_CHEONGSONG_R", routeNo: "청송 농어촌버스 / 영양 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_CHEONGSONG", toStopId: "STOP_GYEONGBUK_YEONGYANG", distanceKm: 28.0, durationMin: 45, intervalMin: 60, fare: 1600, operatingCity: "청송군/영양군", tip: "청송터미널에서 진보 경유 영양 방면 탑승.", firstTime: "07:00", lastTime: "18:00", intervalText: "50~70분", operatingCompany: "청송 청송버스", backupLines: ["영양 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_GUNWI_UISEONG_F", routeNo: "군위 농어촌버스 / 의성 시내버스", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_GUNWI", toStopId: "STOP_GYEONGBUK_UISEONG", distanceKm: 18.0, durationMin: 28, intervalMin: 40, fare: 1500, operatingCity: "군위군/의성군", tip: "군위터미널에서 의성 방면 농어촌버스 탑승!", firstTime: "06:30", lastTime: "19:30", intervalText: "35~50분", operatingCompany: "군위 농어촌버스 / 의성 의성버스", backupLines: ["의성 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_GUNWI_UISEONG_R", routeNo: "의성 시내버스 / 군위 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_UISEONG", toStopId: "STOP_GYEONGBUK_GUNWI", distanceKm: 18.0, durationMin: 28, intervalMin: 40, fare: 1500, operatingCity: "의성군/군위군", tip: "의성터미널에서 군위 방면 탑승.", firstTime: "06:30", lastTime: "19:30", intervalText: "35~50분", operatingCompany: "의성 의성버스", backupLines: ["군위 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_ULCHIN_YEONGDEOK_F", routeNo: "울진 농어촌버스 / 영덕 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_ULCHIN", toStopId: "STOP_GYEONGBUK_YEONGDEOK", distanceKm: 58.0, durationMin: 80, intervalMin: 45, fare: 2200, operatingCity: "울진군/영덕군", tip: "울진터미널에서 평해/후포 경유 영덕 방면 탑승!", firstTime: "06:20", lastTime: "19:00", intervalText: "40~55분", operatingCompany: "울진 울진버스 / 영덕 영덕버스", backupLines: ["영덕 100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_ULCHIN_YEONGDEOK_R", routeNo: "영덕 농어촌버스 / 울진 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_YEONGDEOK", toStopId: "STOP_GYEONGBUK_ULCHIN", distanceKm: 58.0, durationMin: 80, intervalMin: 45, fare: 2200, operatingCity: "영덕군/울진군", tip: "영덕터미널에서 후포/평해 경유 울진 방면 탑승.", firstTime: "06:20", lastTime: "19:00", intervalText: "40~55분", operatingCompany: "영덕 영덕버스", backupLines: ["울진 울진버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_ULCHIN_SAMCHEOK_F", routeNo: "울진 농어촌버스 / 삼척 시내버스", busType: "농어촌버스", fromStopId: "STOP_GYEONGBUK_ULCHIN", toStopId: "STOP_GANGWON_SAMCHEOK", distanceKm: 56.0, durationMin: 80, intervalMin: 50, fare: 2200, operatingCity: "울진군/삼척시", tip: "울진터미널에서 원덕/임원 경유 삼척 방면 탑승!", firstTime: "06:30", lastTime: "18:30", intervalText: "45~60분", operatingCompany: "울진 울진버스 / 삼척 삼척버스", backupLines: ["삼척 시내버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_ULCHIN_SAMCHEOK_R", routeNo: "삼척 시내버스 / 울진 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_SAMCHEOK", toStopId: "STOP_GYEONGBUK_ULCHIN", distanceKm: 56.0, durationMin: 80, intervalMin: 50, fare: 2200, operatingCity: "삼척시/울진군", tip: "삼척터미널에서 임원/원덕 경유 울진 방면 탑승.", firstTime: "06:30", lastTime: "18:30", intervalText: "45~60분", operatingCompany: "삼척 삼척버스", backupLines: ["울진 울진버스"], transferDiscount: "NO_DISCOUNT" },

  // 5. 경남권 브릿지 (남해, 통영, 고성경남)
  { id: "R_NAMHAE_SACHEON_F", routeNo: "남해 농어촌버스 / 사천 시내버스", busType: "농어촌버스", fromStopId: "STOP_GYEONGNAM_NAMHAE", toStopId: "STOP_GYEONGNAM_SACHEON", distanceKm: 32.0, durationMin: 50, intervalMin: 40, fare: 1700, operatingCity: "남해군/사천시", tip: "남해터미널에서 창선대교 경유 삼천포/사천 방면 탑승!", firstTime: "06:30", lastTime: "19:30", intervalText: "35~50분", operatingCompany: "남해 남해버스 / 사천 사천버스", backupLines: ["사천 100번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_NAMHAE_SACHEON_R", routeNo: "사천 시내버스 / 남해 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GYEONGNAM_SACHEON", toStopId: "STOP_GYEONGNAM_NAMHAE", distanceKm: 32.0, durationMin: 50, intervalMin: 40, fare: 1700, operatingCity: "사천시/남해군", tip: "사천터미널에서 삼천포 경유 남해 방면 탑승.", firstTime: "06:30", lastTime: "19:30", intervalText: "35~50분", operatingCompany: "사천 사천버스", backupLines: ["남해 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_TONGYEONG_GOSEONG_F", routeNo: "통영 시내버스 / 고성 농어촌버스", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_TONGYEONG", toStopId: "STOP_GYEONGNAM_GOSEONG", distanceKm: 18.0, durationMin: 28, intervalMin: 20, fare: 1500, operatingCity: "통영시/고성군", tip: "통영터미널에서 고성버스터미널 방면 시내버스 탑승!", firstTime: "06:00", lastTime: "22:00", intervalText: "15~25분", operatingCompany: "통영 통영교통 / 고성 고성버스", backupLines: ["고성 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_TONGYEONG_GOSEONG_R", routeNo: "고성 농어촌버스 / 통영 시내버스", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_GOSEONG", toStopId: "STOP_GYEONGNAM_TONGYEONG", distanceKm: 18.0, durationMin: 28, intervalMin: 20, fare: 1500, operatingCity: "고성군/통영시", tip: "고성터미널에서 통영 방면 탑승.", firstTime: "06:00", lastTime: "22:00", intervalText: "15~25분", operatingCompany: "고성 고성버스", backupLines: ["통영 시내버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_GOSEONG_CHANGWON_F", routeNo: "고성/창원 시내버스", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_GOSEONG", toStopId: "STOP_GYEONGNAM_01", distanceKm: 38.0, durationMin: 55, intervalMin: 25, fare: 1700, operatingCity: "고성군/창원시", tip: "고성터미널에서 진동 경유 마산/창원터미널 탑승!", firstTime: "06:00", lastTime: "21:30", intervalText: "20~30분", operatingCompany: "창원 마창여객", backupLines: ["창원 70번"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_GOSEONG_CHANGWON_R", routeNo: "창원/고성 시내버스", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_01", toStopId: "STOP_GYEONGNAM_GOSEONG", distanceKm: 38.0, durationMin: 55, intervalMin: 25, fare: 1700, operatingCity: "창원시/고성군", tip: "창원터미널에서 진동 경유 고성 방면 탑승.", firstTime: "06:00", lastTime: "21:30", intervalText: "20~30분", operatingCompany: "창원 마창여객", backupLines: ["고성 농어촌버스"], transferDiscount: "NO_DISCOUNT" },

  // 6. 충북권 브릿지 (괴산, 음성)
  { id: "R_GOESAN_CHUNGJU_F", routeNo: "괴산 농어촌버스 (괴산-수안보) → 충주 240번대 (수안보-충주터미널)", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_GOESAN", toStopId: "STOP_CHUNGBUK_04", distanceKm: 28.0, durationMin: 45, intervalMin: 35, fare: 1500, operatingCity: "괴산군/충주시", tip: "괴산터미널에서 수안보 경유 충주 240번대/괴산버스 탑승!", firstTime: "06:20", lastTime: "20:30", intervalText: "30~45분", operatingCompany: "괴산 아성교통 / 충주 삼화버스", backupLines: ["충주 200번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_GOESAN_CHUNGJU_R", routeNo: "충주 240번대 (충주터미널-수안보) → 괴산 농어촌버스", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_04", toStopId: "STOP_CHUNGBUK_GOESAN", distanceKm: 28.0, durationMin: 45, intervalMin: 35, fare: 1500, operatingCity: "충주시/괴산군", tip: "충주터미널에서 수안보 경유 괴산 방면 탑승.", firstTime: "06:20", lastTime: "20:30", intervalText: "30~45분", operatingCompany: "충주 삼화버스 / 괴산 아성교통", backupLines: ["괴산 농어촌버스"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_EUMSEONG_CHUNGJU_F", routeNo: "음성 120번 (음성-주덕) → 충주 100번 (주덕-충주시외버스터미널)", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_EUMSEONG", toStopId: "STOP_CHUNGBUK_04", distanceKm: 25.0, durationMin: 40, intervalMin: 35, fare: 1500, operatingCity: "음성군/충주시", tip: "음성터미널에서 120번 탑승 후 주덕정류소에서 충주 100번 환승!", firstTime: "06:20", lastTime: "21:00", intervalText: "30~45분", operatingCompany: "음성 음성교통 / 충주 삼화버스", backupLines: ["충주 100번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_EUMSEONG_CHUNGJU_R", routeNo: "충주 100번 (충주터미널-주덕) → 음성 120번 (주덕-음성터미널)", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_04", toStopId: "STOP_CHUNGBUK_EUMSEONG", distanceKm: 25.0, durationMin: 40, intervalMin: 35, fare: 1500, operatingCity: "충주시/음성군", tip: "충주터미널에서 100번 탑승 후 주덕정류소에서 음성 120번 환승.", firstTime: "06:20", lastTime: "21:00", intervalText: "30~45분", operatingCompany: "충주 삼화버스 / 음성 음성교통", backupLines: ["음성 120번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_EUMSEONG_CHEONGJU_F", routeNo: "음성 111번 (음성-증평) → 청주 711번/105번 (증평-오송역/청주공항)", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_EUMSEONG", toStopId: "STOP_CHUNGBUK_05", distanceKm: 42.0, durationMin: 65, intervalMin: 30, fare: 1700, operatingCity: "음성군/청주시", tip: "음성터미널에서 111번 탑승 후 증평에서 청주 711번/105번 환승!", firstTime: "06:00", lastTime: "21:30", intervalText: "25~35분", operatingCompany: "음성 음성교통 / 청주 청주교통", backupLines: ["청주 711번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_EUMSEONG_CHEONGJU_R", routeNo: "청주 711번/105번 (오송역/청주-증평) → 음성 111번 (증평-음성터미널)", busType: "시내버스", fromStopId: "STOP_CHUNGBUK_05", toStopId: "STOP_CHUNGBUK_EUMSEONG", distanceKm: 42.0, durationMin: 65, intervalMin: 30, fare: 1700, operatingCity: "청주시/음성군", tip: "오송역/청주에서 711번 탑승 후 증평우체국에서 음성 111번 환승.", firstTime: "06:00", lastTime: "21:30", intervalText: "25~35분", operatingCompany: "청주 청주교통 / 음성 음성교통", backupLines: ["음성 111번"], transferDiscount: "CHUNGBUK_LOCAL" },

  // 7. 전남권 브릿지 (고흥, 여수환승)
  { id: "R_GOHEUNG_BOSEONG_F", routeNo: "고흥 농어촌버스 / 보성 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_JEONNAM_GOHEUNG", toStopId: "STOP_JEONNAM_BOSEONG", distanceKm: 32.0, durationMin: 50, intervalMin: 45, fare: 1600, operatingCity: "고흥군/보성군", tip: "고흥터미널에서 벌교 경유 보성버스터미널 탑승!", firstTime: "06:30", lastTime: "19:00", intervalText: "40~55분", operatingCompany: "고흥 고흥여객 / 보성 보성버스", backupLines: ["보성 농어촌버스"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_GOHEUNG_BOSEONG_R", routeNo: "보성 농어촌버스 / 고흥 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_JEONNAM_BOSEONG", toStopId: "STOP_JEONNAM_GOHEUNG", distanceKm: 32.0, durationMin: 50, intervalMin: 45, fare: 1600, operatingCity: "보성군/고흥군", tip: "보성터미널에서 벌교 경유 고흥 방면 탑승.", firstTime: "06:30", lastTime: "19:00", intervalText: "40~55분", operatingCompany: "보성 보성버스", backupLines: ["고흥 농어촌버스"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_SUNCHEON_YEOMSU_LINK_F", routeNo: "순천 960번 / 여수 330번", busType: "시내버스", fromStopId: "STOP_JEONNAM_SUNCHEON_YEOMSU", toStopId: "STOP_GYEONGNAM_YEOSU", distanceKm: 18.0, durationMin: 28, intervalMin: 15, fare: 1500, operatingCity: "순천시/여수시", tip: "순천-여수 연계정류장에서 여수터미널 방면 탑승!", firstTime: "05:40", lastTime: "22:30", intervalText: "12~18분", operatingCompany: "여수 동양교통", backupLines: ["순천 960번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_SUNCHEON_YEOMSU_LINK_R", routeNo: "여수 330번 / 순천 960번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_YEOSU", toStopId: "STOP_JEONNAM_SUNCHEON_YEOMSU", distanceKm: 18.0, durationMin: 28, intervalMin: 15, fare: 1500, operatingCity: "여수시/순천시", tip: "여수터미널에서 순천 연계정류장 방면 탑승.", firstTime: "05:40", lastTime: "22:30", intervalText: "12~18분", operatingCompany: "여수 동양교통", backupLines: ["순천 960번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_SUNCHEON_MAIN_YEOMSU_F", routeNo: "순천 960번", busType: "시내버스", fromStopId: "STOP_JEONNAM_03", toStopId: "STOP_JEONNAM_SUNCHEON_YEOMSU", distanceKm: 15.0, durationMin: 22, intervalMin: 15, fare: 1500, operatingCity: "순천시", tip: "순천역에서 율촌 경유 연계정류장 탑승!", firstTime: "05:40", lastTime: "22:30", intervalText: "12~18분", operatingCompany: "순천 순천교통", backupLines: ["순천 777번"], transferDiscount: "JEONNAM_LOCAL" },
  { id: "R_SUNCHEON_MAIN_YEOMSU_R", routeNo: "순천 960번", busType: "시내버스", fromStopId: "STOP_JEONNAM_SUNCHEON_YEOMSU", toStopId: "STOP_JEONNAM_03", distanceKm: 15.0, durationMin: 22, intervalMin: 15, fare: 1500, operatingCity: "순천시", tip: "연계정류장에서 순천역 방면 탑승.", firstTime: "05:40", lastTime: "22:30", intervalText: "12~18분", operatingCompany: "순천 순천교통", backupLines: ["순천 777번"], transferDiscount: "JEONNAM_LOCAL" },

  // ==========================================
  // 충남 서해안 / 북부 접경 / 산간 / 도서 신규 연결 노선
  // ==========================================
  // 1. 서산 ↔ 태안
  { id: "R_SEOSAN_TAEAN_F", routeNo: "서산/태안 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_CHUNGNAM_SEOSAN", toStopId: "STOP_CHUNGNAM_TAEAN", distanceKm: 15.0, durationMin: 25, intervalMin: 20, fare: 1500, operatingCity: "서산시/태안군", tip: "서산터미널에서 태안공용버스터미널 방면 탑승!", firstTime: "06:00", lastTime: "21:30", intervalText: "15~25분", operatingCompany: "서산 서령버스 / 태안 태안여객", backupLines: ["태안 농어촌버스"], transferDiscount: "CHUNGNAM_LOCAL" },
  { id: "R_SEOSAN_TAEAN_R", routeNo: "태안/서산 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_CHUNGNAM_TAEAN", toStopId: "STOP_CHUNGNAM_SEOSAN", distanceKm: 15.0, durationMin: 25, intervalMin: 20, fare: 1500, operatingCity: "태안군/서산시", tip: "태안터미널에서 서산 방면 탑승.", firstTime: "06:00", lastTime: "21:30", intervalText: "15~25분", operatingCompany: "태안 태안여객 / 서산 서령버스", backupLines: ["서산 농어촌버스"], transferDiscount: "CHUNGNAM_LOCAL" },
  // 2. 서산 ↔ 평택 / 천안
  { id: "R_SEOSAN_PYEONGTAEK_F", routeNo: "서산/당진 시내버스", busType: "시내버스", fromStopId: "STOP_CHUNGNAM_SEOSAN", toStopId: "STOP_GYEONGGI_04", distanceKm: 58.0, durationMin: 80, intervalMin: 40, fare: 2200, operatingCity: "서산시/평택시", tip: "서산터미널에서 당진/아산 경유 평택역 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "35~50분", operatingCompany: "당진 당진여객 / 서산 서령버스", backupLines: ["당진 시내버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_SEOSAN_PYEONGTAEK_R", routeNo: "당진/서산 시내버스", busType: "시내버스", fromStopId: "STOP_GYEONGGI_04", toStopId: "STOP_CHUNGNAM_SEOSAN", distanceKm: 58.0, durationMin: 80, intervalMin: 40, fare: 2200, operatingCity: "평택시/서산시", tip: "평택역에서 당진 경유 서산 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "35~50분", operatingCompany: "당진 당진여객", backupLines: ["서산 농어촌버스"], transferDiscount: "NO_DISCOUNT" },
  // 3. 철원 ↔ 춘천 / 화천
  { id: "R_CHEORWON_HWACHEON_F", routeNo: "철원/화천 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_CHEORWON", toStopId: "STOP_GANGWON_HWACHEON", distanceKm: 42.0, durationMin: 65, intervalMin: 60, fare: 1800, operatingCity: "철원군/화천군", tip: "신철원에서 다목리/사내면 경유 화천 방면 탑승!", firstTime: "06:30", lastTime: "18:30", intervalText: "50~75분", operatingCompany: "화천 산천어버스 / 철원 철원버스", backupLines: ["화천 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_CHEORWON_HWACHEON_R", routeNo: "화천/철원 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_HWACHEON", toStopId: "STOP_GANGWON_CHEORWON", distanceKm: 42.0, durationMin: 65, intervalMin: 60, fare: 1800, operatingCity: "화천군/철원군", tip: "화천터미널에서 사내면 경유 신철원 방면 탑승.", firstTime: "06:30", lastTime: "18:30", intervalText: "50~75분", operatingCompany: "화천 산천어버스", backupLines: ["철원 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  // 4. 화천 ↔ 춘천
  { id: "R_HWACHEON_CHUNCHEON_F", routeNo: "화천 농어촌버스 / 춘천 시내버스", busType: "시내버스", fromStopId: "STOP_GANGWON_HWACHEON", toStopId: "STOP_GANGWON_01", distanceKm: 28.0, durationMin: 42, intervalMin: 30, fare: 1600, operatingCity: "화천군/춘천시", tip: "화천터미널에서 지암리 경유 춘천역 환승정류장 탑승!", firstTime: "06:00", lastTime: "21:00", intervalText: "25~35분", operatingCompany: "춘천 춘천버스 / 화천 산천어버스", backupLines: ["춘천 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_HWACHEON_CHUNCHEON_R", routeNo: "춘천 시내버스 / 화천 농어촌버스", busType: "시내버스", fromStopId: "STOP_GANGWON_01", toStopId: "STOP_GANGWON_HWACHEON", distanceKm: 28.0, durationMin: 42, intervalMin: 30, fare: 1600, operatingCity: "춘천시/화천군", tip: "춘천역에서 화천 방면 탑승.", firstTime: "06:00", lastTime: "21:00", intervalText: "25~35분", operatingCompany: "춘천 춘천버스", backupLines: ["화천 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  // 5. 양구 ↔ 춘천 / 인제
  { id: "R_YANGGU_CHUNCHEON_F", routeNo: "양구 농어촌버스 / 춘천 시내버스", busType: "시내버스", fromStopId: "STOP_GANGWON_YANGGU", toStopId: "STOP_GANGWON_01", distanceKm: 45.0, durationMin: 65, intervalMin: 45, fare: 1800, operatingCity: "양구군/춘천시", tip: "양구터미널에서 웅진리 경유 춘천역 방면 탑승!", firstTime: "06:30", lastTime: "20:00", intervalText: "40~55분", operatingCompany: "양구 양구버스 / 춘천 춘천버스", backupLines: ["춘천 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_YANGGU_CHUNCHEON_R", routeNo: "춘천 시내버스 / 양구 농어촌버스", busType: "시내버스", fromStopId: "STOP_GANGWON_01", toStopId: "STOP_GANGWON_YANGGU", distanceKm: 45.0, durationMin: 65, intervalMin: 45, fare: 1800, operatingCity: "춘천시/양구군", tip: "춘천역에서 양구 방면 탑승.", firstTime: "06:30", lastTime: "20:00", intervalText: "40~55분", operatingCompany: "춘천 춘천버스", backupLines: ["양구 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_YANGGU_INJE_F", routeNo: "양구/인제 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_YANGGU", toStopId: "STOP_GANGWON_INJE", distanceKm: 32.0, durationMin: 48, intervalMin: 50, fare: 1700, operatingCity: "양구군/인제군", tip: "양구터미널에서 원통/인제터미널 방면 탑승!", firstTime: "06:40", lastTime: "19:00", intervalText: "45~60분", operatingCompany: "양구 양구버스 / 인제 인제버스", backupLines: ["인제 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  { id: "R_YANGGU_INJE_R", routeNo: "인제/양구 농어촌버스", busType: "농어촌버스", fromStopId: "STOP_GANGWON_INJE", toStopId: "STOP_GANGWON_YANGGU", distanceKm: 32.0, durationMin: 48, intervalMin: 50, fare: 1700, operatingCity: "인제군/양구군", tip: "인제터미널에서 원통 경유 양구 방면 탑승.", firstTime: "06:40", lastTime: "19:00", intervalText: "45~60분", operatingCompany: "인제 인제버스", backupLines: ["양구 농어촌버스"], transferDiscount: "GANGWON_LOCAL" },
  // 6. 거제 ↔ 부산 / 통영
  { id: "R_GEOJE_BUSAN_F", routeNo: "부산 2000번 (거가대교 직행)", busType: "직행좌석버스", fromStopId: "STOP_GYEONGNAM_GEOJE", toStopId: "STOP_BUSAN_02", distanceKm: 52.0, durationMin: 65, intervalMin: 20, fare: 4200, operatingCity: "거제시/부산시", tip: "거제 고현/옥포에서 거가대교 경유 부산역(하단/명지) 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "15~25분", operatingCompany: "거제 삼화여객 / 부산 동원여객", backupLines: ["부산 2000번"], transferDiscount: "INTEGRATED" },
  { id: "R_GEOJE_BUSAN_R", routeNo: "부산 2000번 (거가대교 직행)", busType: "직행좌석버스", fromStopId: "STOP_BUSAN_02", toStopId: "STOP_GYEONGNAM_GEOJE", distanceKm: 52.0, durationMin: 65, intervalMin: 20, fare: 4200, operatingCity: "부산시/거제시", tip: "부산에서 거가대교 경유 거제 고현터미널 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "15~25분", operatingCompany: "부산 동원여객 / 거제 삼화여객", backupLines: ["부산 2000번"], transferDiscount: "INTEGRATED" },
  { id: "R_GEOJE_TONGYEONG_F", routeNo: "거제/통영 시내버스", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_GEOJE", toStopId: "STOP_GYEONGNAM_TONGYEONG", distanceKm: 22.0, durationMin: 32, intervalMin: 15, fare: 1500, operatingCity: "거제시/통영시", tip: "거제 고현터미널에서 신거제대교 경유 통영터미널 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "12~20분", operatingCompany: "거제 세원여객 / 통영 통영교통", backupLines: ["통영 시내버스"], transferDiscount: "NO_DISCOUNT" },
  { id: "R_GEOJE_TONGYEONG_R", routeNo: "통영/거제 시내버스", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_TONGYEONG", toStopId: "STOP_GYEONGNAM_GEOJE", distanceKm: 22.0, durationMin: 32, intervalMin: 15, fare: 1500, operatingCity: "통영시/거제시", tip: "통영터미널에서 거제 고현 방면 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "12~20분", operatingCompany: "통영 통영교통", backupLines: ["거제 시내버스"], transferDiscount: "NO_DISCOUNT" },

  // ==========================================
  // 전국 주요 생활권·학교·랜드마크 상세 시내버스 노선망 (52개 로컬 정류소)
  // ==========================================
  // 1. 세종시 생활권 노선 (아름동/아름초, 도담동, 종촌동, 고운동, 보람동, 나성동, 첫마을)
  { id: "R_SEJONG_AREUM_TERM_F", routeNo: "세종 1004번 (직통) / 221번", busType: "광역/간선버스", fromStopId: "STOP_SEJONG_AREUM", toStopId: "STOP_SEJONG_02", distanceKm: 5.2, durationMin: 14, intervalMin: 10, fare: 1400, operatingCity: "세종특별자치시 아름동", tip: "아름초/범지기마을에서 세종고속시외버스터미널 방면 1004번 직통 탑승!", firstTime: "05:40", lastTime: "23:00", intervalText: "8~12분", operatingCompany: "세종도시교통공사", backupLines: ["세종 221번", "세종 201번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_AREUM_TERM_R", routeNo: "세종 1004번 (직통) / 221번", busType: "광역/간선버스", fromStopId: "STOP_SEJONG_02", toStopId: "STOP_SEJONG_AREUM", distanceKm: 5.2, durationMin: 14, intervalMin: 10, fare: 1400, operatingCity: "세종특별자치시 대평동", tip: "세종터미널에서 아름초/범지기마을 방면 1004번 탑승.", firstTime: "05:40", lastTime: "23:00", intervalText: "8~12분", operatingCompany: "세종도시교통공사", backupLines: ["세종 221번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_AREUM_JOCHIWON_F", routeNo: "세종 1000번 / 801번 / 991번", busType: "광역/간선버스", fromStopId: "STOP_SEJONG_AREUM", toStopId: "STOP_SEJONG_01", distanceKm: 11.0, durationMin: 22, intervalMin: 12, fare: 1400, operatingCity: "세종특별자치시", tip: "아름동에서 조치원역 방면 1000/801번 탑승!", firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "세종교통", backupLines: ["세종 991번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_AREUM_JOCHIWON_R", routeNo: "세종 1000번 / 801번 / 991번", busType: "광역/간선버스", fromStopId: "STOP_SEJONG_01", toStopId: "STOP_SEJONG_AREUM", distanceKm: 11.0, durationMin: 22, intervalMin: 12, fare: 1400, operatingCity: "세종특별자치시", tip: "조치원역에서 아름동/아름초 방면 탑승.", firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "세종교통", backupLines: ["세종 991번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_AREUM_GOV_F", routeNo: "세종 201번 / 221번", busType: "간선시내버스", fromStopId: "STOP_SEJONG_AREUM", toStopId: "STOP_SEJONG_GOVERNMENT", distanceKm: 2.3, durationMin: 6, intervalMin: 8, fare: 1400, operatingCity: "세종특별자치시", tip: "아름초에서 정부세종청사 중앙동 방면 탑승!", firstTime: "05:40", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "세종도시교통공사", backupLines: ["세종 222번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_AREUM_GOV_R", routeNo: "세종 201번 / 221번", busType: "간선시내버스", fromStopId: "STOP_SEJONG_GOVERNMENT", toStopId: "STOP_SEJONG_AREUM", distanceKm: 2.3, durationMin: 6, intervalMin: 8, fare: 1400, operatingCity: "세종특별자치시", tip: "정부세종청사에서 아름동/아름초 방면 탑승.", firstTime: "05:40", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "세종도시교통공사", backupLines: ["세종 222번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_DODAM_GOV_F", routeNo: "세종 B0 / B2 BRT / 601번", busType: "간선급행 BRT", fromStopId: "STOP_SEJONG_DODAM", toStopId: "STOP_SEJONG_GOVERNMENT", distanceKm: 1.5, durationMin: 4, intervalMin: 5, fare: 1400, operatingCity: "세종특별자치시", tip: "도담동에서 정부세종청사 방면 BRT 탑승!", firstTime: "05:30", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "세종도시교통공사", backupLines: ["세종 601번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_DODAM_GOV_R", routeNo: "세종 B0 / B2 BRT / 601번", busType: "간선급행 BRT", fromStopId: "STOP_SEJONG_GOVERNMENT", toStopId: "STOP_SEJONG_DODAM", distanceKm: 1.5, durationMin: 4, intervalMin: 5, fare: 1400, operatingCity: "세종특별자치시", tip: "정부청사에서 도담동 방면 BRT 탑승.", firstTime: "05:30", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "세종도시교통공사", backupLines: ["세종 601번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_JONGCHON_AREUM_F", routeNo: "세종 201번 / 203번", busType: "지선버스", fromStopId: "STOP_SEJONG_JONGCHON", toStopId: "STOP_SEJONG_AREUM", distanceKm: 1.2, durationMin: 4, intervalMin: 8, fare: 1400, operatingCity: "세종특별자치시", tip: "종촌동에서 아름동 방면 탑승!", firstTime: "05:40", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "세종도시교통공사", backupLines: ["세종 221번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_JONGCHON_AREUM_R", routeNo: "세종 201번 / 203번", busType: "지선버스", fromStopId: "STOP_SEJONG_AREUM", toStopId: "STOP_SEJONG_JONGCHON", distanceKm: 1.2, durationMin: 4, intervalMin: 8, fare: 1400, operatingCity: "세종특별자치시", tip: "아름동에서 종촌동 방면 탑승.", firstTime: "05:40", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "세종도시교통공사", backupLines: ["세종 221번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_GOUN_AREUM_F", routeNo: "세종 201번 / 1004번", busType: "간선버스", fromStopId: "STOP_SEJONG_GOUN", toStopId: "STOP_SEJONG_AREUM", distanceKm: 1.6, durationMin: 5, intervalMin: 8, fare: 1400, operatingCity: "세종특별자치시", tip: "고운동 가락마을에서 아름동 방면 탑승!", firstTime: "05:40", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "세종도시교통공사", backupLines: ["세종 1004번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_GOUN_AREUM_R", routeNo: "세종 201번 / 1004번", busType: "간선버스", fromStopId: "STOP_SEJONG_AREUM", toStopId: "STOP_SEJONG_GOUN", distanceKm: 1.6, durationMin: 5, intervalMin: 8, fare: 1400, operatingCity: "세종특별자치시", tip: "아름동에서 고운동 방면 탑승.", firstTime: "05:40", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "세종도시교통공사", backupLines: ["세종 1004번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_BORAM_TERM_F", routeNo: "세종 B0 순환BRT / 세종 222번", busType: "BRT/간선버스", fromStopId: "STOP_SEJONG_BORAM", toStopId: "STOP_SEJONG_02", distanceKm: 3.2, durationMin: 7, intervalMin: 6, fare: 1400, operatingCity: "세종특별자치시", tip: "세종시청/보람동에서 세종터미널 방면 BRT 탑승!", firstTime: "05:30", lastTime: "23:40", intervalText: "5~8분", operatingCompany: "세종도시교통공사", backupLines: ["세종 222번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_BORAM_TERM_R", routeNo: "세종 B0 순환BRT / 세종 222번", busType: "BRT/간선버스", fromStopId: "STOP_SEJONG_02", toStopId: "STOP_SEJONG_BORAM", distanceKm: 3.2, durationMin: 7, intervalMin: 6, fare: 1400, operatingCity: "세종특별자치시", tip: "세종터미널에서 세종시청/보람동 방면 BRT 탑승.", firstTime: "05:30", lastTime: "23:40", intervalText: "5~8분", operatingCompany: "세종도시교통공사", backupLines: ["세종 222번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_NASEONG_TERM_F", routeNo: "세종 B2 BRT / 201번", busType: "BRT/간선버스", fromStopId: "STOP_SEJONG_NASEONG", toStopId: "STOP_SEJONG_02", distanceKm: 2.1, durationMin: 5, intervalMin: 6, fare: 1400, operatingCity: "세종특별자치시", tip: "나성동에서 세종터미널 방면 탑승!", firstTime: "05:30", lastTime: "23:40", intervalText: "5~8분", operatingCompany: "세종도시교통공사", backupLines: ["세종 201번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_NASEONG_TERM_R", routeNo: "세종 B2 BRT / 201번", busType: "BRT/간선버스", fromStopId: "STOP_SEJONG_02", toStopId: "STOP_SEJONG_NASEONG", distanceKm: 2.1, durationMin: 5, intervalMin: 6, fare: 1400, operatingCity: "세종특별자치시", tip: "세종터미널에서 나성동 방면 탑승.", firstTime: "05:30", lastTime: "23:40", intervalText: "5~8분", operatingCompany: "세종도시교통공사", backupLines: ["세종 201번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_HANSOL_TERM_F", routeNo: "세종 1004번 / 221번", busType: "간선버스", fromStopId: "STOP_SEJONG_HANSOL", toStopId: "STOP_SEJONG_02", distanceKm: 1.5, durationMin: 4, intervalMin: 8, fare: 1400, operatingCity: "세종특별자치시", tip: "한솔동 첫마을에서 세종터미널 방면 탑승!", firstTime: "05:40", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "세종도시교통공사", backupLines: ["세종 221번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_HANSOL_TERM_R", routeNo: "세종 1004번 / 221번", busType: "간선버스", fromStopId: "STOP_SEJONG_02", toStopId: "STOP_SEJONG_HANSOL", distanceKm: 1.5, durationMin: 4, intervalMin: 8, fare: 1400, operatingCity: "세종특별자치시", tip: "세종터미널에서 한솔동 첫마을 방면 탑승.", firstTime: "05:40", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "세종도시교통공사", backupLines: ["세종 221번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_DAJEONG_NASEONG_F", routeNo: "세종 203번", busType: "지선버스", fromStopId: "STOP_SEJONG_DAJEONG", toStopId: "STOP_SEJONG_NASEONG", distanceKm: 1.4, durationMin: 4, intervalMin: 10, fare: 1400, operatingCity: "세종특별자치시", tip: "다정동에서 나성동 방면 탑승!", firstTime: "05:40", lastTime: "23:00", intervalText: "8~12분", operatingCompany: "세종도시교통공사", backupLines: ["세종 201번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_DAJEONG_NASEONG_R", routeNo: "세종 203번", busType: "지선버스", fromStopId: "STOP_SEJONG_NASEONG", toStopId: "STOP_SEJONG_DAJEONG", distanceKm: 1.4, durationMin: 4, intervalMin: 10, fare: 1400, operatingCity: "세종특별자치시", tip: "나성동에서 다정동 방면 탑승.", firstTime: "05:40", lastTime: "23:00", intervalText: "8~12분", operatingCompany: "세종도시교통공사", backupLines: ["세종 201번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_SAEROM_NASEONG_F", routeNo: "세종 201번 / 203번", busType: "지선버스", fromStopId: "STOP_SEJONG_SAEROM", toStopId: "STOP_SEJONG_NASEONG", distanceKm: 1.1, durationMin: 3, intervalMin: 8, fare: 1400, operatingCity: "세종특별자치시", tip: "새롬동에서 나성동 방면 탑승!", firstTime: "05:40", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "세종도시교통공사", backupLines: ["세종 201번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEJONG_SAEROM_NASEONG_R", routeNo: "세종 201번 / 203번", busType: "지선버스", fromStopId: "STOP_SEJONG_NASEONG", toStopId: "STOP_SEJONG_SAEROM", distanceKm: 1.1, durationMin: 3, intervalMin: 8, fare: 1400, operatingCity: "세종특별자치시", tip: "나성동에서 새롬동 방면 탑승.", firstTime: "05:40", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "세종도시교통공사", backupLines: ["세종 201번"], transferDiscount: "INTEGRATED" },

  // 2. 서울/수도권 도심·상권 노선
  { id: "R_SEOUL_GWANGHWAMUN_SEOUL_F", routeNo: "서울 150번 / 702번", busType: "간선버스", fromStopId: "STOP_SEOUL_GWANGHWAMUN", toStopId: "STOP_SEOUL_01", distanceKm: 2.2, durationMin: 7, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "광화문에서 세종대로 경유 서울역 탑승!", firstTime: "04:30", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 도선여객", backupLines: ["서울 702번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_GWANGHWAMUN_SEOUL_R", routeNo: "서울 150번 / 702번", busType: "간선버스", fromStopId: "STOP_SEOUL_01", toStopId: "STOP_SEOUL_GWANGHWAMUN", distanceKm: 2.2, durationMin: 7, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "서울역에서 세종대로 경유 광화문 방면 탑승.", firstTime: "04:30", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 도선여객", backupLines: ["서울 702번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_CITYHALL_SEOUL_F", routeNo: "서울 150번 / 502번", busType: "간선버스", fromStopId: "STOP_SEOUL_CITYHALL", toStopId: "STOP_SEOUL_01", distanceKm: 1.2, durationMin: 4, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "서울시청/덕수궁에서 서울역 방면 탑승!", firstTime: "04:30", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 도선여객", backupLines: ["서울 502번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_CITYHALL_SEOUL_R", routeNo: "서울 150번 / 502번", busType: "간선버스", fromStopId: "STOP_SEOUL_01", toStopId: "STOP_SEOUL_CITYHALL", distanceKm: 1.2, durationMin: 4, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "서울역에서 시청앞 방면 탑승.", firstTime: "04:30", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 도선여객", backupLines: ["서울 502번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_YEOUIDO_SEOUL_F", routeNo: "서울 160번 / 503번", busType: "간선버스", fromStopId: "STOP_SEOUL_YEOUIDO", toStopId: "STOP_SEOUL_01", distanceKm: 6.5, durationMin: 18, intervalMin: 7, fare: 1500, operatingCity: "서울특별시", tip: "여의도환승센터에서 마포대교 경유 서울역 탑승!", firstTime: "04:30", lastTime: "23:30", intervalText: "6~9분", operatingCompany: "서울 서울승합", backupLines: ["서울 260번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_YEOUIDO_SEOUL_R", routeNo: "서울 160번 / 503번", busType: "간선버스", fromStopId: "STOP_SEOUL_01", toStopId: "STOP_SEOUL_YEOUIDO", distanceKm: 6.5, durationMin: 18, intervalMin: 7, fare: 1500, operatingCity: "서울특별시", tip: "서울역에서 여의도환승센터 방면 탑승.", firstTime: "04:30", lastTime: "23:30", intervalText: "6~9분", operatingCompany: "서울 서울승합", backupLines: ["서울 260번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_SINCHON_SEOUL_F", routeNo: "서울 602번 / 271번", busType: "간선버스", fromStopId: "STOP_SEOUL_SINCHON", toStopId: "STOP_SEOUL_01", distanceKm: 4.8, durationMin: 15, intervalMin: 6, fare: 1500, operatingCity: "서울특별시", tip: "신촌역에서 충정로 경유 서울역 탑승!", firstTime: "04:30", lastTime: "23:30", intervalText: "5~8분", operatingCompany: "서울 경성여객", backupLines: ["서울 7013번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_SINCHON_SEOUL_R", routeNo: "서울 602번 / 271번", busType: "간선버스", fromStopId: "STOP_SEOUL_01", toStopId: "STOP_SEOUL_SINCHON", distanceKm: 4.8, durationMin: 15, intervalMin: 6, fare: 1500, operatingCity: "서울특별시", tip: "서울역에서 신촌역/연세대 방면 탑승.", firstTime: "04:30", lastTime: "23:30", intervalText: "5~8분", operatingCompany: "서울 경성여객", backupLines: ["서울 7013번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_HONGDAE_SINCHON_F", routeNo: "서울 271번 / 273번", busType: "간선버스", fromStopId: "STOP_SEOUL_HONGDAE", toStopId: "STOP_SEOUL_SINCHON", distanceKm: 1.5, durationMin: 5, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "홍대입구역에서 신촌로터리 방면 탑승!", firstTime: "04:30", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 경성여객", backupLines: ["서울 7612번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_HONGDAE_SINCHON_R", routeNo: "서울 271번 / 273번", busType: "간선버스", fromStopId: "STOP_SEOUL_SINCHON", toStopId: "STOP_SEOUL_HONGDAE", distanceKm: 1.5, durationMin: 5, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "신촌역에서 홍대입구역 방면 탑승.", firstTime: "04:30", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 경성여객", backupLines: ["서울 7612번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_JONGNO_SEOUL_F", routeNo: "서울 150번 / 260번", busType: "간선버스", fromStopId: "STOP_SEOUL_JONGNO", toStopId: "STOP_SEOUL_01", distanceKm: 2.8, durationMin: 9, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "종로3가에서 종로 중앙차로 경유 서울역 탑승!", firstTime: "04:30", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 도선여객", backupLines: ["서울 260번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_JONGNO_SEOUL_R", routeNo: "서울 150번 / 260번", busType: "간선버스", fromStopId: "STOP_SEOUL_01", toStopId: "STOP_SEOUL_JONGNO", distanceKm: 2.8, durationMin: 9, intervalMin: 5, fare: 1500, operatingCity: "서울특별시", tip: "서울역에서 종로3가 방면 탑승.", firstTime: "04:30", lastTime: "23:40", intervalText: "4~7분", operatingCompany: "서울 도선여객", backupLines: ["서울 260번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_NOWON_CHUNGRYANG_F", routeNo: "서울 105번 / 146번", busType: "간선버스", fromStopId: "STOP_SEOUL_NOWON", toStopId: "STOP_SEOUL_03", distanceKm: 9.8, durationMin: 26, intervalMin: 7, fare: 1500, operatingCity: "서울특별시", tip: "노원역에서 동일로 경유 청량리역환승센터 탑승!", firstTime: "04:20", lastTime: "23:30", intervalText: "6~9분", operatingCompany: "서울 삼화상운", backupLines: ["서울 105번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_NOWON_CHUNGRYANG_R", routeNo: "서울 105번 / 146번", busType: "간선버스", fromStopId: "STOP_SEOUL_03", toStopId: "STOP_SEOUL_NOWON", distanceKm: 9.8, durationMin: 26, intervalMin: 7, fare: 1500, operatingCity: "서울특별시", tip: "청량리역에서 노원역 방면 탑승.", firstTime: "04:20", lastTime: "23:30", intervalText: "6~9분", operatingCompany: "서울 삼화상운", backupLines: ["서울 105번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_SUYU_SEOUL_F", routeNo: "서울 150번 / 106번", busType: "간선버스", fromStopId: "STOP_SEOUL_SUYU", toStopId: "STOP_SEOUL_01", distanceKm: 12.0, durationMin: 32, intervalMin: 6, fare: 1500, operatingCity: "서울특별시", tip: "수유역에서 도봉로/대학로 경유 서울역 탑승!", firstTime: "04:00", lastTime: "23:10", intervalText: "5~8분", operatingCompany: "서울 도선여객", backupLines: ["서울 106번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_SUYU_SEOUL_R", routeNo: "서울 150번 / 106번", busType: "간선버스", fromStopId: "STOP_SEOUL_01", toStopId: "STOP_SEOUL_SUYU", distanceKm: 12.0, durationMin: 32, intervalMin: 6, fare: 1500, operatingCity: "서울특별시", tip: "서울역에서 수유역 방면 탑승.", firstTime: "04:00", lastTime: "23:10", intervalText: "5~8분", operatingCompany: "서울 도선여객", backupLines: ["서울 106번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_KONKUK_JAMSIL_F", routeNo: "서울 2224번 / 2415번", busType: "지선버스", fromStopId: "STOP_SEOUL_KONKUK", toStopId: "STOP_SEOUL_JAMSIL", distanceKm: 4.2, durationMin: 12, intervalMin: 8, fare: 1500, operatingCity: "서울특별시", tip: "건대입구에서 잠실대교 경유 잠실역 탑승!", firstTime: "04:30", lastTime: "23:30", intervalText: "6~10분", operatingCompany: "서울 대원여객", backupLines: ["서울 2415번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_KONKUK_JAMSIL_R", routeNo: "서울 2224번 / 2415번", busType: "지선버스", fromStopId: "STOP_SEOUL_JAMSIL", toStopId: "STOP_SEOUL_KONKUK", distanceKm: 4.2, durationMin: 12, intervalMin: 8, fare: 1500, operatingCity: "서울특별시", tip: "잠실역에서 건대입구역 방면 탑승.", firstTime: "04:30", lastTime: "23:30", intervalText: "6~10분", operatingCompany: "서울 대원여객", backupLines: ["서울 2415번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_YEONGDEUNGPO_SEOUL_F", routeNo: "서울 160번 / 503번", busType: "간선버스", fromStopId: "STOP_SEOUL_YEONGDEUNGPO", toStopId: "STOP_SEOUL_01", distanceKm: 8.2, durationMin: 22, intervalMin: 7, fare: 1500, operatingCity: "서울특별시", tip: "영등포역환승센터에서 서울역 방면 탑승!", firstTime: "04:30", lastTime: "23:30", intervalText: "6~9분", operatingCompany: "서울 서울승합", backupLines: ["서울 260번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOUL_YEONGDEUNGPO_SEOUL_R", routeNo: "서울 160번 / 503번", busType: "간선버스", fromStopId: "STOP_SEOUL_01", toStopId: "STOP_SEOUL_YEONGDEUNGPO", distanceKm: 8.2, durationMin: 22, intervalMin: 7, fare: 1500, operatingCity: "서울특별시", tip: "서울역에서 영등포역 방면 탑승.", firstTime: "04:30", lastTime: "23:30", intervalText: "6~9분", operatingCompany: "서울 서울승합", backupLines: ["서울 260번"], transferDiscount: "INTEGRATED" },
  { id: "R_PANGYO_GANGNAM_F", routeNo: "서울 9401번 / 광역급행 M4102", busType: "직행좌석버스", fromStopId: "STOP_GYEONGGI_PANGYO", toStopId: "STOP_SEOUL_02", distanceKm: 14.5, durationMin: 20, intervalMin: 6, fare: 2800, operatingCity: "성남시/서울특별시", tip: "판교역에서 경부고속도로 경유 강남역 직행 탑승!", firstTime: "05:00", lastTime: "00:30", intervalText: "4~8분", operatingCompany: "경기 남성버스 / 대원고속", backupLines: ["경기 9004번"], transferDiscount: "INTEGRATED" },
  { id: "R_PANGYO_GANGNAM_R", routeNo: "서울 9401번 / 광역급행 M4102", busType: "직행좌석버스", fromStopId: "STOP_SEOUL_02", toStopId: "STOP_GYEONGGI_PANGYO", distanceKm: 14.5, durationMin: 20, intervalMin: 6, fare: 2800, operatingCity: "서울특별시/성남시", tip: "강남역에서 판교역 방면 탑승.", firstTime: "05:00", lastTime: "00:30", intervalText: "4~8분", operatingCompany: "경기 남성버스", backupLines: ["경기 9004번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOHYEON_PANGYO_F", routeNo: "경기 380번 / 390번", busType: "시내버스", fromStopId: "STOP_GYEONGGI_SEOHYEON", toStopId: "STOP_GYEONGGI_PANGYO", distanceKm: 2.8, durationMin: 8, intervalMin: 8, fare: 1450, operatingCity: "성남시 분당구", tip: "분당 서현역에서 판교역 테크노밸리 탑승!", firstTime: "05:20", lastTime: "23:30", intervalText: "6~10분", operatingCompany: "경기 대원버스", backupLines: ["경기 390번"], transferDiscount: "INTEGRATED" },
  { id: "R_SEOHYEON_PANGYO_R", routeNo: "경기 380번 / 390번", busType: "시내버스", fromStopId: "STOP_GYEONGGI_PANGYO", toStopId: "STOP_GYEONGGI_SEOHYEON", distanceKm: 2.8, durationMin: 8, intervalMin: 8, fare: 1450, operatingCity: "성남시 분당구", tip: "판교역에서 분당 서현역 방면 탑승.", firstTime: "05:20", lastTime: "23:30", intervalText: "6~10분", operatingCompany: "경기 대원버스", backupLines: ["경기 390번"], transferDiscount: "INTEGRATED" },
  { id: "R_GWANGGYO_SUWON_F", routeNo: "경기 720-2번 / 수원 20번", busType: "시내버스", fromStopId: "STOP_GYEONGGI_GWANGGYO", toStopId: "STOP_GYEONGGI_02", distanceKm: 7.2, durationMin: 18, intervalMin: 8, fare: 1450, operatingCity: "수원시", tip: "광교중앙역에서 아주대 경유 수원역 탑승!", firstTime: "05:10", lastTime: "23:00", intervalText: "6~10분", operatingCompany: "수원 용남고속", backupLines: ["경기 720-1번"], transferDiscount: "INTEGRATED" },
  { id: "R_GWANGGYO_SUWON_R", routeNo: "경기 720-2번 / 수원 20번", busType: "시내버스", fromStopId: "STOP_GYEONGGI_02", toStopId: "STOP_GYEONGGI_GWANGGYO", distanceKm: 7.2, durationMin: 18, intervalMin: 8, fare: 1450, operatingCity: "수원시", tip: "수원역에서 아주대 경유 광교중앙역 방면 탑승.", firstTime: "05:10", lastTime: "23:00", intervalText: "6~10분", operatingCompany: "수원 용남고속", backupLines: ["경기 720-1번"], transferDiscount: "INTEGRATED" },
  { id: "R_ILSAN_SEOUL_F", routeNo: "경기 707번 / 서울 773번", busType: "직행좌석버스", fromStopId: "STOP_GYEONGGI_ILSAN", toStopId: "STOP_SEOUL_01", distanceKm: 24.0, durationMin: 38, intervalMin: 10, fare: 2800, operatingCity: "고양시/서울특별시", tip: "일산 마두역에서 중앙로 경유 서울역 탑승!", firstTime: "05:00", lastTime: "00:00", intervalText: "8~14분", operatingCompany: "경기 신성교통", backupLines: ["경기 M7106"], transferDiscount: "INTEGRATED" },
  { id: "R_ILSAN_SEOUL_R", routeNo: "경기 707번 / 서울 773번", busType: "직행좌석버스", fromStopId: "STOP_SEOUL_01", toStopId: "STOP_GYEONGGI_ILSAN", distanceKm: 24.0, durationMin: 38, intervalMin: 10, fare: 2800, operatingCity: "서울특별시/고양시", tip: "서울역에서 일산 마두역/킨텍스 방면 탑승.", firstTime: "05:00", lastTime: "00:00", intervalText: "8~14분", operatingCompany: "경기 신성교통", backupLines: ["경기 M7106"], transferDiscount: "INTEGRATED" },
  { id: "R_BUCHEON_INCHEON_F", routeNo: "인천 88번 / 경기 83번", busType: "시내버스", fromStopId: "STOP_GYEONGGI_BUCHEON", toStopId: "STOP_INCHEON_01", distanceKm: 9.5, durationMin: 24, intervalMin: 7, fare: 1450, operatingCity: "부천시/인천광역시", tip: "부천역에서 경인로 경유 인천터미널 탑승!", firstTime: "05:00", lastTime: "23:30", intervalText: "5~8분", operatingCompany: "부천 부천버스", backupLines: ["인천 88번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUCHEON_INCHEON_R", routeNo: "인천 88번 / 경기 83번", busType: "시내버스", fromStopId: "STOP_INCHEON_01", toStopId: "STOP_GYEONGGI_BUCHEON", distanceKm: 9.5, durationMin: 24, intervalMin: 7, fare: 1450, operatingCity: "인천광역시/부천시", tip: "인천터미널에서 부천역 방면 탑승.", firstTime: "05:00", lastTime: "23:30", intervalText: "5~8분", operatingCompany: "부천 부천버스", backupLines: ["인천 88번"], transferDiscount: "INTEGRATED" },
  { id: "R_ANSAN_ANYANG_F", routeNo: "경기 350번 / 경기 320번", busType: "시내버스", fromStopId: "STOP_GYEONGGI_ANSAN", toStopId: "STOP_GYEONGGI_01", distanceKm: 14.2, durationMin: 28, intervalMin: 10, fare: 1450, operatingCity: "안산시/안양시", tip: "안산 중앙역에서 안양역 방면 탑승!", firstTime: "05:10", lastTime: "23:00", intervalText: "8~12분", operatingCompany: "경기 경원여객", backupLines: ["경기 320번"], transferDiscount: "INTEGRATED" },
  { id: "R_ANSAN_ANYANG_R", routeNo: "경기 350번 / 경기 320번", busType: "시내버스", fromStopId: "STOP_GYEONGGI_01", toStopId: "STOP_GYEONGGI_ANSAN", distanceKm: 14.2, durationMin: 28, intervalMin: 10, fare: 1450, operatingCity: "안양시/안산시", tip: "안양역에서 안산 중앙역 방면 탑승.", firstTime: "05:10", lastTime: "23:00", intervalText: "8~12분", operatingCompany: "경기 경원여객", backupLines: ["경기 320번"], transferDiscount: "INTEGRATED" },
  { id: "R_SONGDO_INCHEON_F", routeNo: "인천 8번 / 9201번", busType: "간선버스", fromStopId: "STOP_INCHEON_SONGDO", toStopId: "STOP_INCHEON_01", distanceKm: 8.5, durationMin: 20, intervalMin: 8, fare: 1500, operatingCity: "인천광역시 송도동", tip: "송도센트럴파크에서 인천터미널 방면 8번 탑승!", firstTime: "05:10", lastTime: "23:20", intervalText: "6~10분", operatingCompany: "인천 송도버스", backupLines: ["인천 9201번"], transferDiscount: "INTEGRATED" },
  { id: "R_SONGDO_INCHEON_R", routeNo: "인천 8번 / 9201번", busType: "간선버스", fromStopId: "STOP_INCHEON_01", toStopId: "STOP_INCHEON_SONGDO", distanceKm: 8.5, durationMin: 20, intervalMin: 8, fare: 1500, operatingCity: "인천광역시", tip: "인천터미널에서 송도 센트럴파크 방면 탑승.", firstTime: "05:10", lastTime: "23:20", intervalText: "6~10분", operatingCompany: "인천 송도버스", backupLines: ["인천 9201번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUPYEONG_INCHEON_F", routeNo: "인천 30번 / 88번", busType: "간선버스", fromStopId: "STOP_INCHEON_BUPYEONG", toStopId: "STOP_INCHEON_01", distanceKm: 6.2, durationMin: 16, intervalMin: 6, fare: 1500, operatingCity: "인천광역시", tip: "부평역에서 인천터미널역 방면 탑승!", firstTime: "05:00", lastTime: "23:40", intervalText: "5~8분", operatingCompany: "인천 세원교통", backupLines: ["인천 34번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUPYEONG_INCHEON_R", routeNo: "인천 30번 / 88번", busType: "간선버스", fromStopId: "STOP_INCHEON_01", toStopId: "STOP_INCHEON_BUPYEONG", distanceKm: 6.2, durationMin: 16, intervalMin: 6, fare: 1500, operatingCity: "인천광역시", tip: "인천터미널에서 부평역 방면 탑승.", firstTime: "05:00", lastTime: "23:40", intervalText: "5~8분", operatingCompany: "인천 세원교통", backupLines: ["인천 34번"], transferDiscount: "INTEGRATED" },

  // 3. 대전/충청 도심 노선
  { id: "R_DAEJEON_DUNSAN_STN_F", routeNo: "대전 106번 / 705번", busType: "간선버스", fromStopId: "STOP_DAEJEON_DUNSAN", toStopId: "STOP_DAEJEON_01", distanceKm: 5.5, durationMin: 16, intervalMin: 7, fare: 1500, operatingCity: "대전광역시", tip: "대전시청/둔산동에서 대전역 동광장 방면 106번 탑승!", firstTime: "05:40", lastTime: "22:45", intervalText: "6~9분", operatingCompany: "대전 대전교통", backupLines: ["대전 705번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_DUNSAN_STN_R", routeNo: "대전 106번 / 705번", busType: "간선버스", fromStopId: "STOP_DAEJEON_01", toStopId: "STOP_DAEJEON_DUNSAN", distanceKm: 5.5, durationMin: 16, intervalMin: 7, fare: 1500, operatingCity: "대전광역시", tip: "대전역에서 둔산동/대전시청 방면 탑승.", firstTime: "05:40", lastTime: "22:45", intervalText: "6~9분", operatingCompany: "대전 대전교통", backupLines: ["대전 705번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_CNU_YUSEONG_F", routeNo: "대전 102번 / 108번", busType: "간선버스", fromStopId: "STOP_DAEJEON_CNU", toStopId: "STOP_DAEJEON_02", distanceKm: 1.6, durationMin: 5, intervalMin: 6, fare: 1500, operatingCity: "대전광역시", tip: "충남대 정문에서 유성온천역 방면 탑승!", firstTime: "05:40", lastTime: "22:45", intervalText: "5~8분", operatingCompany: "대전 대전교통", backupLines: ["대전 108번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_CNU_YUSEONG_R", routeNo: "대전 102번 / 108번", busType: "간선버스", fromStopId: "STOP_DAEJEON_02", toStopId: "STOP_DAEJEON_CNU", distanceKm: 1.6, durationMin: 5, intervalMin: 6, fare: 1500, operatingCity: "대전광역시", tip: "유성온천역에서 충남대 방면 탑승.", firstTime: "05:40", lastTime: "22:45", intervalText: "5~8분", operatingCompany: "대전 대전교통", backupLines: ["대전 108번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_EUNHAENG_STN_F", routeNo: "대전 102번 / 607번", busType: "간선버스", fromStopId: "STOP_DAEJEON_EUNHAENG", toStopId: "STOP_DAEJEON_01", distanceKm: 1.0, durationMin: 4, intervalMin: 5, fare: 1500, operatingCity: "대전광역시", tip: "은행동 성심당에서 대전역 동광장 방면 탑승!", firstTime: "05:40", lastTime: "22:45", intervalText: "4~7분", operatingCompany: "대전 대전교통", backupLines: ["대전 607번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_EUNHAENG_STN_R", routeNo: "대전 102번 / 607번", busType: "간선버스", fromStopId: "STOP_DAEJEON_01", toStopId: "STOP_DAEJEON_EUNHAENG", distanceKm: 1.0, durationMin: 4, intervalMin: 5, fare: 1500, operatingCity: "대전광역시", tip: "대전역에서 은행동/중앙로역 방면 탑승.", firstTime: "05:40", lastTime: "22:45", intervalText: "4~7분", operatingCompany: "대전 대전교통", backupLines: ["대전 607번"], transferDiscount: "INTEGRATED" },
  { id: "R_ASAN_CHEONAN_F", routeNo: "천안/아산 900번 / 990번", busType: "시내버스", fromStopId: "STOP_CHUNGNAM_ASAN", toStopId: "STOP_CHUNGNAM_02", distanceKm: 12.5, durationMin: 25, intervalMin: 10, fare: 1500, operatingCity: "아산시/천안시", tip: "온양온천역에서 천안역 동부광장 방면 900번 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "8~14분", operatingCompany: "아산 온양교통 / 천안 보성여객", backupLines: ["천안 990번"], transferDiscount: "CHUNGNAM_LOCAL" },
  { id: "R_ASAN_CHEONAN_R", routeNo: "천안/아산 900번 / 990번", busType: "시내버스", fromStopId: "STOP_CHUNGNAM_02", toStopId: "STOP_CHUNGNAM_ASAN", distanceKm: 12.5, durationMin: 25, intervalMin: 10, fare: 1500, operatingCity: "천안시/아산시", tip: "천안역에서 온양온천역 방면 900번 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "8~14분", operatingCompany: "천안 보성여객 / 아산 온양교통", backupLines: ["천안 990번"], transferDiscount: "CHUNGNAM_LOCAL" },
  { id: "R_CHEONGJU_SANGDANG_OSONG_F", routeNo: "청주 747번 (급행) / 502번", busType: "급행시내버스", fromStopId: "STOP_CHUNGBUK_CHEONGJU_SANGDANG", toStopId: "STOP_CHUNGBUK_05", distanceKm: 18.5, durationMin: 32, intervalMin: 12, fare: 1900, operatingCity: "청주시", tip: "청주 상당산성/육거리에서 오송역/공항 방면 747번 급행 탑승!", firstTime: "05:50", lastTime: "22:20", intervalText: "10~15분", operatingCompany: "청주 청주교통", backupLines: ["청주 502번"], transferDiscount: "CHUNGBUK_LOCAL" },
  { id: "R_CHEONGJU_SANGDANG_OSONG_R", routeNo: "청주 747번 (급행) / 502번", busType: "급행시내버스", fromStopId: "STOP_CHUNGBUK_05", toStopId: "STOP_CHUNGBUK_CHEONGJU_SANGDANG", distanceKm: 18.5, durationMin: 32, intervalMin: 12, fare: 1900, operatingCity: "청주시", tip: "오송역에서 청주 시내(상당공원/육거리) 방면 747번 탑승.", firstTime: "05:50", lastTime: "22:20", intervalText: "10~15분", operatingCompany: "청주 청주교통", backupLines: ["청주 502번"], transferDiscount: "CHUNGBUK_LOCAL" },

  // 4. 대구/경북 도심 노선
  { id: "R_DAEGU_DONGSEONGRO_DONGDAEGU_F", routeNo: "대구 급행1번 / 708번", busType: "급행/간선버스", fromStopId: "STOP_DAEGU_DONGSEONGRO", toStopId: "STOP_DAEGU_02", distanceKm: 3.8, durationMin: 12, intervalMin: 6, fare: 1500, operatingCity: "대구광역시", tip: "동성로/반월당에서 동대구역복합환승센터 방면 탑승!", firstTime: "05:30", lastTime: "23:00", intervalText: "5~8분", operatingCompany: "대구 우주교통", backupLines: ["대구 708번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEGU_DONGSEONGRO_DONGDAEGU_R", routeNo: "대구 급행1번 / 708번", busType: "급행/간선버스", fromStopId: "STOP_DAEGU_02", toStopId: "STOP_DAEGU_DONGSEONGRO", distanceKm: 3.8, durationMin: 12, intervalMin: 6, fare: 1500, operatingCity: "대구광역시", tip: "동대구역에서 반월당/동성로 방면 탑승.", firstTime: "05:30", lastTime: "23:00", intervalText: "5~8분", operatingCompany: "대구 우주교통", backupLines: ["대구 708번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEGU_KNU_DONGDAEGU_F", routeNo: "대구 937번 / 708번", busType: "간선버스", fromStopId: "STOP_DAEGU_KNU", toStopId: "STOP_DAEGU_02", distanceKm: 2.8, durationMin: 9, intervalMin: 8, fare: 1500, operatingCity: "대구광역시", tip: "경북대 북문에서 동대구역 방면 탑승!", firstTime: "05:30", lastTime: "23:00", intervalText: "6~10분", operatingCompany: "대구 우주교통", backupLines: ["대구 937번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEGU_KNU_DONGDAEGU_R", routeNo: "대구 937번 / 708번", busType: "간선버스", fromStopId: "STOP_DAEGU_02", toStopId: "STOP_DAEGU_KNU", distanceKm: 2.8, durationMin: 9, intervalMin: 8, fare: 1500, operatingCity: "대구광역시", tip: "동대구역에서 경북대학교 방면 탑승.", firstTime: "05:30", lastTime: "23:00", intervalText: "6~10분", operatingCompany: "대구 우주교통", backupLines: ["대구 937번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEGU_SUSEONG_DONGDAEGU_F", routeNo: "대구 410-1번 / 순환3-1번", busType: "간선버스", fromStopId: "STOP_DAEGU_SUSEONG", toStopId: "STOP_DAEGU_02", distanceKm: 6.2, durationMin: 18, intervalMin: 9, fare: 1500, operatingCity: "대구광역시", tip: "수성못에서 동대구역 복합환승센터 방면 탑승!", firstTime: "05:30", lastTime: "22:45", intervalText: "8~12분", operatingCompany: "대구 우주교통", backupLines: ["대구 순환3-1번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEGU_SUSEONG_DONGDAEGU_R", routeNo: "대구 410-1번 / 순환3-1번", busType: "간선버스", fromStopId: "STOP_DAEGU_02", toStopId: "STOP_DAEGU_SUSEONG", distanceKm: 6.2, durationMin: 18, intervalMin: 9, fare: 1500, operatingCity: "대구광역시", tip: "동대구역에서 수성못 방면 탑승.", firstTime: "05:30", lastTime: "22:45", intervalText: "8~12분", operatingCompany: "대구 우주교통", backupLines: ["대구 순환3-1번"], transferDiscount: "INTEGRATED" },
  { id: "R_GYEONGSAN_DONGDAEGU_F", routeNo: "대구 840번 / 경산 100번", busType: "간선버스", fromStopId: "STOP_GYEONGBUK_GYEONGSAN", toStopId: "STOP_DAEGU_02", distanceKm: 14.5, durationMin: 32, intervalMin: 8, fare: 1500, operatingCity: "경산시/대구광역시", tip: "영남대학교에서 달구벌대로 경유 동대구역 탑승!", firstTime: "05:30", lastTime: "22:50", intervalText: "7~11분", operatingCompany: "경산 경산버스 / 대구 경신교통", backupLines: ["경산 100번"], transferDiscount: "INTEGRATED" },
  { id: "R_GYEONGSAN_DONGDAEGU_R", routeNo: "대구 840번 / 경산 100번", busType: "간선버스", fromStopId: "STOP_DAEGU_02", toStopId: "STOP_GYEONGBUK_GYEONGSAN", distanceKm: 14.5, durationMin: 32, intervalMin: 8, fare: 1500, operatingCity: "대구광역시/경산시", tip: "동대구역에서 영남대/경산 방면 탑승.", firstTime: "05:30", lastTime: "22:50", intervalText: "7~11분", operatingCompany: "대구 경신교통", backupLines: ["경산 100번"], transferDiscount: "INTEGRATED" },

  // 5. 부산/울산/경남 도심 노선
  { id: "R_BUSAN_SEOMYEON_BUSAN_STN_F", routeNo: "부산 88번 / 1004번 (급행) / 87번", busType: "시내버스", fromStopId: "STOP_BUSAN_SEOMYEON", toStopId: "STOP_BUSAN_02", distanceKm: 5.5, durationMin: 14, intervalMin: 5, fare: 1550, operatingCity: "부산광역시", tip: "서면역 롯데백화점에서 중앙대로 BRT 경유 부산역 탑승!", firstTime: "05:00", lastTime: "23:30", intervalText: "4~7분", operatingCompany: "부산 삼화여객", backupLines: ["부산 1004번", "부산 87번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_SEOMYEON_BUSAN_STN_R", routeNo: "부산 88번 / 1004번 (급행) / 87번", busType: "시내버스", fromStopId: "STOP_BUSAN_02", toStopId: "STOP_BUSAN_SEOMYEON", distanceKm: 5.5, durationMin: 14, intervalMin: 5, fare: 1550, operatingCity: "부산광역시", tip: "부산역에서 중앙대로 BRT 경유 서면 방면 탑승.", firstTime: "05:00", lastTime: "23:30", intervalText: "4~7분", operatingCompany: "부산 삼화여객", backupLines: ["부산 1004번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_HAEUNDAE_CENTUM_F", routeNo: "부산 1003번 (급행) / 39번", busType: "급행시내버스", fromStopId: "STOP_BUSAN_HAEUNDAE", toStopId: "STOP_BUSAN_CENTUM", distanceKm: 3.5, durationMin: 10, intervalMin: 6, fare: 1550, operatingCity: "부산광역시", tip: "해운대해수욕장에서 벡스코/센텀시티역 방면 탑승!", firstTime: "05:00", lastTime: "23:30", intervalText: "5~8분", operatingCompany: "부산 부산여객", backupLines: ["부산 39번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_HAEUNDAE_CENTUM_R", routeNo: "부산 1003번 (급행) / 39번", busType: "급행시내버스", fromStopId: "STOP_BUSAN_CENTUM", toStopId: "STOP_BUSAN_HAEUNDAE", distanceKm: 3.5, durationMin: 10, intervalMin: 6, fare: 1550, operatingCity: "부산광역시", tip: "센텀시티역에서 해운대해수욕장 방면 탑승.", firstTime: "05:00", lastTime: "23:30", intervalText: "5~8분", operatingCompany: "부산 부산여객", backupLines: ["부산 39번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_CENTUM_SEOMYEON_F", routeNo: "부산 5-1번 / 155번", busType: "시내버스", fromStopId: "STOP_BUSAN_CENTUM", toStopId: "STOP_BUSAN_SEOMYEON", distanceKm: 8.8, durationMin: 22, intervalMin: 7, fare: 1550, operatingCity: "부산광역시", tip: "센텀시티에서 수영교차로 경유 서면역 탑승!", firstTime: "05:00", lastTime: "23:20", intervalText: "6~9분", operatingCompany: "부산 삼화여객", backupLines: ["부산 155번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_CENTUM_SEOMYEON_R", routeNo: "부산 5-1번 / 155번", busType: "시내버스", fromStopId: "STOP_BUSAN_SEOMYEON", toStopId: "STOP_BUSAN_CENTUM", distanceKm: 8.8, durationMin: 22, intervalMin: 7, fare: 1550, operatingCity: "부산광역시", tip: "서면역에서 센텀시티/벡스코 방면 탑승.", firstTime: "05:00", lastTime: "23:20", intervalText: "6~9분", operatingCompany: "부산 삼화여객", backupLines: ["부산 155번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_NAMPO_BUSAN_STN_F", routeNo: "부산 87번 / 26번 / 103번", busType: "시내버스", fromStopId: "STOP_BUSAN_NAMPO", toStopId: "STOP_BUSAN_02", distanceKm: 2.2, durationMin: 6, intervalMin: 4, fare: 1550, operatingCity: "부산광역시", tip: "남포동/자갈치에서 부산역 방면 탑승!", firstTime: "05:00", lastTime: "23:45", intervalText: "3~6분", operatingCompany: "부산 남성여객", backupLines: ["부산 26번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_NAMPO_BUSAN_STN_R", routeNo: "부산 87번 / 26번 / 103번", busType: "시내버스", fromStopId: "STOP_BUSAN_02", toStopId: "STOP_BUSAN_NAMPO", distanceKm: 2.2, durationMin: 6, intervalMin: 4, fare: 1550, operatingCity: "부산광역시", tip: "부산역에서 남포동/자갈치시장 방면 탑승.", firstTime: "05:00", lastTime: "23:45", intervalText: "3~6분", operatingCompany: "부산 남성여객", backupLines: ["부산 26번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_GWANGAN_SEOMYEON_F", routeNo: "부산 20번 / 62번", busType: "시내버스", fromStopId: "STOP_BUSAN_GWANGAN", toStopId: "STOP_BUSAN_SEOMYEON", distanceKm: 6.8, durationMin: 18, intervalMin: 7, fare: 1550, operatingCity: "부산광역시", tip: "광안리에서 황령터널 경유 서면 탑승!", firstTime: "05:00", lastTime: "23:20", intervalText: "6~9분", operatingCompany: "부산 오성여객", backupLines: ["부산 62번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_GWANGAN_SEOMYEON_R", routeNo: "부산 20번 / 62번", busType: "시내버스", fromStopId: "STOP_BUSAN_SEOMYEON", toStopId: "STOP_BUSAN_GWANGAN", distanceKm: 6.8, durationMin: 18, intervalMin: 7, fare: 1550, operatingCity: "부산광역시", tip: "서면에서 광안리해수욕장 방면 탑승.", firstTime: "05:00", lastTime: "23:20", intervalText: "6~9분", operatingCompany: "부산 오성여객", backupLines: ["부산 62번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_SASANG_SEOMYEON_F", routeNo: "부산 62번 / 138번", busType: "시내버스", fromStopId: "STOP_BUSAN_SASANG", toStopId: "STOP_BUSAN_SEOMYEON", distanceKm: 7.2, durationMin: 19, intervalMin: 6, fare: 1550, operatingCity: "부산광역시", tip: "사상역 서부터미널에서 가야대로 경유 서면 탑승!", firstTime: "05:00", lastTime: "23:30", intervalText: "5~8분", operatingCompany: "부산 삼진여객", backupLines: ["부산 138번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_SASANG_SEOMYEON_R", routeNo: "부산 62번 / 138번", busType: "시내버스", fromStopId: "STOP_BUSAN_SEOMYEON", toStopId: "STOP_BUSAN_SASANG", distanceKm: 7.2, durationMin: 19, intervalMin: 6, fare: 1550, operatingCity: "부산광역시", tip: "서면에서 사상 서부터미널 방면 탑승.", firstTime: "05:00", lastTime: "23:30", intervalText: "5~8분", operatingCompany: "부산 삼진여객", backupLines: ["부산 138번"], transferDiscount: "INTEGRATED" },
  { id: "R_ULSAN_SAMSAN_EONYANG_F", routeNo: "울산 1713번 (직행좌석) / 1703번", busType: "직행좌석버스", fromStopId: "STOP_ULSAN_SAMSAN", toStopId: "STOP_ULSAN_01", distanceKm: 24.5, durationMin: 35, intervalMin: 12, fare: 2300, operatingCity: "울산광역시", tip: "울산 삼산동 롯데백화점에서 언양터미널 탑승!", firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "울산 울산여객", backupLines: ["울산 1703번"], transferDiscount: "INTEGRATED" },
  { id: "R_ULSAN_SAMSAN_EONYANG_R", routeNo: "울산 1713번 (직행좌석) / 1703번", busType: "직행좌석버스", fromStopId: "STOP_ULSAN_01", toStopId: "STOP_ULSAN_SAMSAN", distanceKm: 24.5, durationMin: 35, intervalMin: 12, fare: 2300, operatingCity: "울산광역시", tip: "언양터미널에서 삼산동 롯데백화점 방면 탑승.", firstTime: "05:30", lastTime: "23:00", intervalText: "10~15분", operatingCompany: "울산 울산여객", backupLines: ["울산 1703번"], transferDiscount: "INTEGRATED" },
  { id: "R_CHANGWON_SANGNAM_TERM_F", routeNo: "창원 100번 / 101번", busType: "간선시내버스", fromStopId: "STOP_GYEONGNAM_SANGNAM", toStopId: "STOP_GYEONGNAM_01", distanceKm: 3.5, durationMin: 10, intervalMin: 6, fare: 1500, operatingCity: "창원시", tip: "상남동에서 창원종합버스터미널 방면 100번 탑승!", firstTime: "05:30", lastTime: "23:00", intervalText: "5~8분", operatingCompany: "창원 마창여객", backupLines: ["창원 101번"], transferDiscount: "INTEGRATED" },
  { id: "R_CHANGWON_SANGNAM_TERM_R", routeNo: "창원 100번 / 101번", busType: "간선시내버스", fromStopId: "STOP_GYEONGNAM_01", toStopId: "STOP_GYEONGNAM_SANGNAM", distanceKm: 3.5, durationMin: 10, intervalMin: 6, fare: 1500, operatingCity: "창원시", tip: "창원터미널에서 상남동 방면 탑승.", firstTime: "05:30", lastTime: "23:00", intervalText: "5~8분", operatingCompany: "창원 마창여객", backupLines: ["창원 101번"], transferDiscount: "INTEGRATED" },
  { id: "R_MASAN_CHANGWON_TERM_F", routeNo: "창원 100번 / 70번", busType: "간선시내버스", fromStopId: "STOP_GYEONGNAM_MASAN", toStopId: "STOP_GYEONGNAM_01", distanceKm: 7.8, durationMin: 20, intervalMin: 7, fare: 1500, operatingCity: "창원시 마산합포구", tip: "마산 어시장에서 창원종합버스터미널 탑승!", firstTime: "05:30", lastTime: "23:00", intervalText: "6~9분", operatingCompany: "창원 마창여객", backupLines: ["창원 70번"], transferDiscount: "INTEGRATED" },
  { id: "R_MASAN_CHANGWON_TERM_R", routeNo: "창원 100번 / 70번", busType: "간선시내버스", fromStopId: "STOP_GYEONGNAM_01", toStopId: "STOP_GYEONGNAM_MASAN", distanceKm: 7.8, durationMin: 20, intervalMin: 7, fare: 1500, operatingCity: "창원시", tip: "창원터미널에서 마산 어시장 방면 탑승.", firstTime: "05:30", lastTime: "23:00", intervalText: "6~9분", operatingCompany: "창원 마창여객", backupLines: ["창원 70번"], transferDiscount: "INTEGRATED" },

  // 6. 광주/전라 도심 노선
  { id: "R_GWANGJU_SANGMU_USQUARE_F", routeNo: "광주 순환01번 / 첨단20번", busType: "급행/간선버스", fromStopId: "STOP_GWANGJU_SANGMU", toStopId: "STOP_GWANGJU_01", distanceKm: 2.8, durationMin: 8, intervalMin: 6, fare: 1400, operatingCity: "광주광역시", tip: "상무지구/시청에서 유스퀘어 광천터미널 탑승!", firstTime: "05:40", lastTime: "22:50", intervalText: "5~8분", operatingCompany: "광주 대원시내버스", backupLines: ["광주 첨단20번"], transferDiscount: "INTEGRATED" },
  { id: "R_GWANGJU_SANGMU_USQUARE_R", routeNo: "광주 순환01번 / 첨단20번", busType: "급행/간선버스", fromStopId: "STOP_GWANGJU_01", toStopId: "STOP_GWANGJU_SANGMU", distanceKm: 2.8, durationMin: 8, intervalMin: 6, fare: 1400, operatingCity: "광주광역시", tip: "유스퀘어에서 상무지구/시청 방면 탑승.", firstTime: "05:40", lastTime: "22:50", intervalText: "5~8분", operatingCompany: "광주 대원시내버스", backupLines: ["광주 첨단20번"], transferDiscount: "INTEGRATED" },
  { id: "R_GWANGJU_CHUNGJANG_USQUARE_F", routeNo: "광주 송정98번 / 문흥39번", busType: "간선버스", fromStopId: "STOP_GWANGJU_CHUNGJANG", toStopId: "STOP_GWANGJU_01", distanceKm: 4.5, durationMin: 14, intervalMin: 7, fare: 1400, operatingCity: "광주광역시", tip: "충장로/문화전당에서 유스퀘어 탑승!", firstTime: "05:40", lastTime: "22:50", intervalText: "6~9분", operatingCompany: "광주 대원시내버스", backupLines: ["광주 문흥39번"], transferDiscount: "INTEGRATED" },
  { id: "R_GWANGJU_CHUNGJANG_USQUARE_R", routeNo: "광주 송정98번 / 문흥39번", busType: "간선버스", fromStopId: "STOP_GWANGJU_01", toStopId: "STOP_GWANGJU_CHUNGJANG", distanceKm: 4.5, durationMin: 14, intervalMin: 7, fare: 1400, operatingCity: "광주광역시", tip: "유스퀘어에서 충장로 방면 탑승.", firstTime: "05:40", lastTime: "22:50", intervalText: "6~9분", operatingCompany: "광주 대원시내버스", backupLines: ["광주 문흥39번"], transferDiscount: "INTEGRATED" },
  { id: "R_GWANGJU_CNU_USQUARE_F", routeNo: "광주 문흥39번 / 일곡28번", busType: "간선버스", fromStopId: "STOP_GWANGJU_CNU", toStopId: "STOP_GWANGJU_01", distanceKm: 3.5, durationMin: 11, intervalMin: 7, fare: 1400, operatingCity: "광주광역시", tip: "전남대 정문에서 유스퀘어 광천터미널 탑승!", firstTime: "05:40", lastTime: "22:50", intervalText: "6~9분", operatingCompany: "광주 을로운수", backupLines: ["광주 일곡28번"], transferDiscount: "INTEGRATED" },
  { id: "R_GWANGJU_CNU_USQUARE_R", routeNo: "광주 문흥39번 / 일곡28번", busType: "간선버스", fromStopId: "STOP_GWANGJU_01", toStopId: "STOP_GWANGJU_CNU", distanceKm: 3.5, durationMin: 11, intervalMin: 7, fare: 1400, operatingCity: "광주광역시", tip: "유스퀘어에서 전남대학교 방면 탑승.", firstTime: "05:40", lastTime: "22:50", intervalText: "6~9분", operatingCompany: "광주 을로운수", backupLines: ["광주 일곡28번"], transferDiscount: "INTEGRATED" },
  { id: "R_GWANGJU_SONGJEONG_USQUARE_F", routeNo: "광주 좌석02번 (급행) / 송정19번", busType: "급행버스", fromStopId: "STOP_GWANGJU_SONGJEONG", toStopId: "STOP_GWANGJU_01", distanceKm: 9.8, durationMin: 22, intervalMin: 8, fare: 1800, operatingCity: "광주광역시", tip: "광주송정역에서 상무대로 경유 유스퀘어 탑승!", firstTime: "05:30", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "광주 대원시내버스", backupLines: ["광주 송정19번"], transferDiscount: "INTEGRATED" },
  { id: "R_GWANGJU_SONGJEONG_USQUARE_R", routeNo: "광주 좌석02번 (급행) / 송정19번", busType: "급행버스", fromStopId: "STOP_GWANGJU_01", toStopId: "STOP_GWANGJU_SONGJEONG", distanceKm: 9.8, durationMin: 22, intervalMin: 8, fare: 1800, operatingCity: "광주광역시", tip: "유스퀘어에서 광주송정역 방면 탑승.", firstTime: "05:30", lastTime: "23:00", intervalText: "7~10분", operatingCompany: "광주 대원시내버스", backupLines: ["광주 송정19번"], transferDiscount: "INTEGRATED" },
  { id: "R_JEONJU_HANOK_TERM_F", routeNo: "전주 1000번 / 119번", busType: "시내버스", fromStopId: "STOP_JEONBUK_HANOK", toStopId: "STOP_JEONBUK_02", distanceKm: 3.2, durationMin: 10, intervalMin: 6, fare: 1500, operatingCity: "전주시", tip: "전주 한옥마을에서 전주시외버스터미널 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "5~8분", operatingCompany: "전주 전주교통", backupLines: ["전주 119번"], transferDiscount: "JEONBUK_LOCAL" },
  { id: "R_JEONJU_HANOK_TERM_R", routeNo: "전주 1000번 / 119번", busType: "시내버스", fromStopId: "STOP_JEONBUK_02", toStopId: "STOP_JEONBUK_HANOK", distanceKm: 3.2, durationMin: 10, intervalMin: 6, fare: 1500, operatingCity: "전주시", tip: "전주터미널에서 한옥마을 방면 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "5~8분", operatingCompany: "전주 전주교통", backupLines: ["전주 119번"], transferDiscount: "JEONBUK_LOCAL" },
  { id: "R_JEONJU_JBNU_TERM_F", routeNo: "전주 165번 / 61번", busType: "시내버스", fromStopId: "STOP_JEONBUK_JBNU", toStopId: "STOP_JEONBUK_02", distanceKm: 1.8, durationMin: 6, intervalMin: 6, fare: 1500, operatingCity: "전주시", tip: "전북대학교 정문에서 전주시외버스터미널 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "5~8분", operatingCompany: "전주 전주교통", backupLines: ["전주 61번"], transferDiscount: "JEONBUK_LOCAL" },
  { id: "R_JEONJU_JBNU_TERM_R", routeNo: "전주 165번 / 61번", busType: "시내버스", fromStopId: "STOP_JEONBUK_02", toStopId: "STOP_JEONBUK_JBNU", distanceKm: 1.8, durationMin: 6, intervalMin: 6, fare: 1500, operatingCity: "전주시", tip: "전주터미널에서 전북대학교 방면 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "5~8분", operatingCompany: "전주 전주교통", backupLines: ["전주 61번"], transferDiscount: "JEONBUK_LOCAL" },
  { id: "R_GUNSAN_IKSON_F", routeNo: "군산/익산 20번 / 26번", busType: "시내버스", fromStopId: "STOP_JEONBUK_GUNSAN", toStopId: "STOP_JEONBUK_01", distanceKm: 24.0, durationMin: 38, intervalMin: 15, fare: 1500, operatingCity: "군산시/익산시", tip: "군산 근대역사박물관에서 익산역 방면 20번 탑승!", firstTime: "06:00", lastTime: "22:00", intervalText: "12~18분", operatingCompany: "군산 군산여객 / 익산 익산여객", backupLines: ["군산 26번"], transferDiscount: "JEONBUK_LOCAL" },
  { id: "R_GUNSAN_IKSON_R", routeNo: "군산/익산 20번 / 26번", busType: "시내버스", fromStopId: "STOP_JEONBUK_01", toStopId: "STOP_JEONBUK_GUNSAN", distanceKm: 24.0, durationMin: 38, intervalMin: 15, fare: 1500, operatingCity: "익산시/군산시", tip: "익산역에서 군산 근대역사박물관 방면 탑승.", firstTime: "06:00", lastTime: "22:00", intervalText: "12~18분", operatingCompany: "익산 익산여객", backupLines: ["군산 26번"], transferDiscount: "JEONBUK_LOCAL" },

  // === 7. 전국 주요 도시권 시내(Intra-City) 100% 실측 노선망 ===
  // [강원권 시내]
  { id: "R_GANGW_GANGNEUNG_ANMOK_F", routeNo: "강릉 202-1번 / 223번", busType: "시내버스", fromStopId: "STOP_GANGWON_04", toStopId: "STOP_GANGW_ANMOK", distanceKm: 4.8, durationMin: 12, intervalMin: 10, fare: 1700, operatingCity: "강릉시", tip: "강릉역에서 안목해변 커피거리 방면 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "8~12분", operatingCompany: "강릉 동진버스", backupLines: ["강릉 223번"], transferDiscount: "INTEGRATED" },
  { id: "R_GANGW_GANGNEUNG_ANMOK_R", routeNo: "강릉 202-1번 / 223번", busType: "시내버스", fromStopId: "STOP_GANGW_ANMOK", toStopId: "STOP_GANGWON_04", distanceKm: 4.8, durationMin: 12, intervalMin: 10, fare: 1700, operatingCity: "강릉시", tip: "안목커피거리에서 강릉역 방면 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "8~12분", operatingCompany: "강릉 동진버스", backupLines: ["강릉 223번"], transferDiscount: "INTEGRATED" },
  { id: "R_GANGW_GANGNEUNG_GYEONGPO_F", routeNo: "강릉 202번 / 202-1번", busType: "시내버스", fromStopId: "STOP_GANGWON_04", toStopId: "STOP_GANGW_GYEONGPO", distanceKm: 5.5, durationMin: 14, intervalMin: 10, fare: 1700, operatingCity: "강릉시", tip: "강릉역에서 경포호/경포해수욕장 방면 202번 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "8~12분", operatingCompany: "강릉 동진버스", backupLines: ["강릉 202-1번"], transferDiscount: "INTEGRATED" },
  { id: "R_GANGW_GANGNEUNG_GYEONGPO_R", routeNo: "강릉 202번 / 202-1번", busType: "시내버스", fromStopId: "STOP_GANGW_GYEONGPO", toStopId: "STOP_GANGWON_04", distanceKm: 5.5, durationMin: 14, intervalMin: 10, fare: 1700, operatingCity: "강릉시", tip: "경포해변에서 강릉역 방면 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "8~12분", operatingCompany: "강릉 동진버스", backupLines: ["강릉 202-1번"], transferDiscount: "INTEGRATED" },
  { id: "R_GANGW_SOKCHO_BEACH_F", routeNo: "속초 1번 / 7번 / 9번", busType: "시내버스", fromStopId: "STOP_GANGWON_SOKCHO", toStopId: "STOP_GANGW_SOKCHO_BEACH", distanceKm: 2.1, durationMin: 6, intervalMin: 6, fare: 1700, operatingCity: "속초시", tip: "속초고속터미널에서 속초해수욕장/속초아이 방면 탑승!", firstTime: "06:00", lastTime: "22:40", intervalText: "5~8분", operatingCompany: "속초 강원투자여객", backupLines: ["속초 7번"], transferDiscount: "INTEGRATED" },
  { id: "R_GANGW_SOKCHO_BEACH_R", routeNo: "속초 1번 / 7번 / 9번", busType: "시내버스", fromStopId: "STOP_GANGW_SOKCHO_BEACH", toStopId: "STOP_GANGWON_SOKCHO", distanceKm: 2.1, durationMin: 6, intervalMin: 6, fare: 1700, operatingCity: "속초시", tip: "속초해변에서 고속터미널 방면 탑승.", firstTime: "06:00", lastTime: "22:40", intervalText: "5~8분", operatingCompany: "속초 강원투자여객", backupLines: ["속초 7번"], transferDiscount: "INTEGRATED" },
  { id: "R_GANGW_CHUNCHEON_KNU_F", routeNo: "춘천 11번 / 12번 / 16번", busType: "시내버스", fromStopId: "STOP_GANGWON_01", toStopId: "STOP_GANGW_CHUNCHEON_KNU", distanceKm: 3.2, durationMin: 9, intervalMin: 8, fare: 1700, operatingCity: "춘천시", tip: "춘천역에서 강원대학교 정문 방면 시내버스 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "7~10분", operatingCompany: "춘천 춘천시민버스", backupLines: ["춘천 12번"], transferDiscount: "INTEGRATED" },
  { id: "R_GANGW_CHUNCHEON_KNU_R", routeNo: "춘천 11번 / 12번 / 16번", busType: "시내버스", fromStopId: "STOP_GANGW_CHUNCHEON_KNU", toStopId: "STOP_GANGWON_01", distanceKm: 3.2, durationMin: 9, intervalMin: 8, fare: 1700, operatingCity: "춘천시", tip: "강원대학교에서 춘천역 방면 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "7~10분", operatingCompany: "춘천 춘천시민버스", backupLines: ["춘천 12번"], transferDiscount: "INTEGRATED" },
  { id: "R_GANGW_WONJU_INNO_F", routeNo: "원주 18번 / 19번 / 100번", busType: "시내버스", fromStopId: "STOP_GANGWON_03", toStopId: "STOP_GANGW_WONJU_INNO", distanceKm: 6.5, durationMin: 16, intervalMin: 10, fare: 1700, operatingCity: "원주시", tip: "원주터미널에서 혁신도시/건강보험공단 방면 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "8~12분", operatingCompany: "원주 대신네트웍스", backupLines: ["원주 19번"], transferDiscount: "INTEGRATED" },
  { id: "R_GANGW_WONJU_INNO_R", routeNo: "원주 18번 / 19번 / 100번", busType: "시내버스", fromStopId: "STOP_GANGW_WONJU_INNO", toStopId: "STOP_GANGWON_03", distanceKm: 6.5, durationMin: 16, intervalMin: 10, fare: 1700, operatingCity: "원주시", tip: "원주 혁신도시에서 원주터미널 방면 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "8~12분", operatingCompany: "원주 대신네트웍스", backupLines: ["원주 19번"], transferDiscount: "INTEGRATED" },

  // [충청권 시내]
  { id: "R_CHEONAN_TERM_STN_F", routeNo: "천안 1번 / 11번 / 200번", busType: "간선버스", fromStopId: "STOP_CHUNGNAM_02", toStopId: "STOP_CHUNGNAM_CHEONAN_TERM", distanceKm: 2.2, durationMin: 7, intervalMin: 5, fare: 1500, operatingCity: "천안시", tip: "천안역에서 천안 종합터미널(신세계) 탑승!", firstTime: "06:00", lastTime: "23:00", intervalText: "4~6분", operatingCompany: "천안 보성여객", backupLines: ["천안 11번"], transferDiscount: "INTEGRATED" },
  { id: "R_CHEONAN_TERM_STN_R", routeNo: "천안 1번 / 11번 / 200번", busType: "간선버스", fromStopId: "STOP_CHUNGNAM_CHEONAN_TERM", toStopId: "STOP_CHUNGNAM_02", distanceKm: 2.2, durationMin: 7, intervalMin: 5, fare: 1500, operatingCity: "천안시", tip: "천안 종합터미널에서 천안역 방면 탑승.", firstTime: "06:00", lastTime: "23:00", intervalText: "4~6분", operatingCompany: "천안 보성여객", backupLines: ["천안 11번"], transferDiscount: "INTEGRATED" },
  { id: "R_CHEONGJU_GAGYEONG_CBNU_F", routeNo: "청주 502번 / 832번 / 105번", busType: "간선버스", fromStopId: "STOP_CHUNGBUK_CHEONGJU_GAGYEONG", toStopId: "STOP_CHUNGBUK_CHEONGJU_CBNU", distanceKm: 3.1, durationMin: 9, intervalMin: 5, fare: 1500, operatingCity: "청주시", tip: "가경동 터미널에서 충북대학교 사창사거리 탑승!", firstTime: "05:40", lastTime: "22:50", intervalText: "4~7분", operatingCompany: "청주 청주교통", backupLines: ["청주 832번"], transferDiscount: "INTEGRATED" },
  { id: "R_CHEONGJU_GAGYEONG_CBNU_R", routeNo: "청주 502번 / 832번 / 105번", busType: "간선버스", fromStopId: "STOP_CHUNGBUK_CHEONGJU_CBNU", toStopId: "STOP_CHUNGBUK_CHEONGJU_GAGYEONG", distanceKm: 3.1, durationMin: 9, intervalMin: 5, fare: 1500, operatingCity: "청주시", tip: "충북대학교에서 가경동 시외고속터미널 방면 탑승.", firstTime: "05:40", lastTime: "22:50", intervalText: "4~7분", operatingCompany: "청주 청주교통", backupLines: ["청주 832번"], transferDiscount: "INTEGRATED" },
  { id: "R_CHEONGJU_CBNU_SANGDANG_F", routeNo: "청주 105번 / 502번 / 747번", busType: "간선버스", fromStopId: "STOP_CHUNGBUK_CHEONGJU_CBNU", toStopId: "STOP_CHUNGBUK_CHEONGJU_SANGDANG", distanceKm: 3.4, durationMin: 10, intervalMin: 5, fare: 1500, operatingCity: "청주시", tip: "충북대에서 육거리시장/상당공원 방면 탑승!", firstTime: "05:40", lastTime: "22:50", intervalText: "4~6분", operatingCompany: "청주 동일유리", backupLines: ["청주 502번"], transferDiscount: "INTEGRATED" },
  { id: "R_CHEONGJU_CBNU_SANGDANG_R", routeNo: "청주 105번 / 502번 / 747번", busType: "간선버스", fromStopId: "STOP_CHUNGBUK_CHEONGJU_SANGDANG", toStopId: "STOP_CHUNGBUK_CHEONGJU_CBNU", distanceKm: 3.4, durationMin: 10, intervalMin: 5, fare: 1500, operatingCity: "청주시", tip: "상당공원에서 충북대 방면 탑승.", firstTime: "05:40", lastTime: "22:50", intervalText: "4~6분", operatingCompany: "청주 동일유리", backupLines: ["청주 502번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_STN_EXPO_F", routeNo: "대전 705번 / 604번", busType: "간선시내버스", fromStopId: "STOP_DAEJEON_01", toStopId: "STOP_DAEJEON_EXPO", distanceKm: 6.8, durationMin: 19, intervalMin: 8, fare: 1500, operatingCity: "대전광역시", tip: "대전역에서 엑스포과학공원/신세계백화점 탑승!", firstTime: "05:45", lastTime: "22:40", intervalText: "7~10분", operatingCompany: "대전 대전버스", backupLines: ["대전 604번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_STN_EXPO_R", routeNo: "대전 705번 / 604번", busType: "간선시내버스", fromStopId: "STOP_DAEJEON_EXPO", toStopId: "STOP_DAEJEON_01", distanceKm: 6.8, durationMin: 19, intervalMin: 8, fare: 1500, operatingCity: "대전광역시", tip: "신세계/엑스포에서 대전역 방면 탑승.", firstTime: "05:45", lastTime: "22:40", intervalText: "7~10분", operatingCompany: "대전 대전버스", backupLines: ["대전 604번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_DUNSAN_EXPO_F", routeNo: "대전 604번 / 606번", busType: "간선시내버스", fromStopId: "STOP_DAEJEON_DUNSAN", toStopId: "STOP_DAEJEON_EXPO", distanceKm: 2.9, durationMin: 8, intervalMin: 8, fare: 1500, operatingCity: "대전광역시", tip: "둔산동 시청에서 엑스포/신세계 탑승!", firstTime: "05:45", lastTime: "22:40", intervalText: "7~10분", operatingCompany: "대전 계룡버스", backupLines: ["대전 606번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEJEON_DUNSAN_EXPO_R", routeNo: "대전 604번 / 606번", busType: "간선시내버스", fromStopId: "STOP_DAEJEON_EXPO", toStopId: "STOP_DAEJEON_DUNSAN", distanceKm: 2.9, durationMin: 8, intervalMin: 8, fare: 1500, operatingCity: "대전광역시", tip: "신세계에서 둔산 시청 방면 탑승.", firstTime: "05:45", lastTime: "22:40", intervalText: "7~10분", operatingCompany: "대전 계룡버스", backupLines: ["대전 606번"], transferDiscount: "INTEGRATED" },

  // [영남권 시내]
  { id: "R_DAEGU_BANWOL_DURYU_F", routeNo: "대구 급행6번 / 503번 / 650번", busType: "급행/간선버스", fromStopId: "STOP_DAEGU_DONGSEONGRO", toStopId: "STOP_DAEGU_DURYU", distanceKm: 3.8, durationMin: 11, intervalMin: 6, fare: 1500, operatingCity: "대구광역시", tip: "반월당역에서 달구벌대로 경유 두류공원/이월드 탑승!", firstTime: "05:30", lastTime: "23:00", intervalText: "5~8분", operatingCompany: "대구 신흥버스", backupLines: ["대구 503번"], transferDiscount: "INTEGRATED" },
  { id: "R_DAEGU_BANWOL_DURYU_R", routeNo: "대구 급행6번 / 503번 / 650번", busType: "급행/간선버스", fromStopId: "STOP_DAEGU_DURYU", toStopId: "STOP_DAEGU_DONGSEONGRO", distanceKm: 3.8, durationMin: 11, intervalMin: 6, fare: 1500, operatingCity: "대구광역시", tip: "두류공원에서 반월당 동성로 방면 탑승.", firstTime: "05:30", lastTime: "23:00", intervalText: "5~8분", operatingCompany: "대구 신흥버스", backupLines: ["대구 503번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_NAMPO_TAEJONG_F", routeNo: "부산 8번 / 30번 / 88번", busType: "시내버스", fromStopId: "STOP_BUSAN_NAMPO", toStopId: "STOP_BUSAN_TAEJONGDAE", distanceKm: 8.4, durationMin: 22, intervalMin: 5, fare: 1550, operatingCity: "부산광역시", tip: "남포동/자갈치시장에서 영도 태종대 직통 탑승!", firstTime: "05:00", lastTime: "23:20", intervalText: "4~7분", operatingCompany: "부산 신성여객", backupLines: ["부산 88번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_NAMPO_TAEJONG_R", routeNo: "부산 8번 / 30번 / 88번", busType: "시내버스", fromStopId: "STOP_BUSAN_TAEJONGDAE", toStopId: "STOP_BUSAN_NAMPO", distanceKm: 8.4, durationMin: 22, intervalMin: 5, fare: 1550, operatingCity: "부산광역시", tip: "태종대에서 남포동/부산역 방면 탑승.", firstTime: "05:00", lastTime: "23:20", intervalText: "4~7분", operatingCompany: "부산 신성여객", backupLines: ["부산 88번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_SEOMYEON_DONGNAE_F", routeNo: "부산 86번 / 110번 / 111번", busType: "시내버스", fromStopId: "STOP_BUSAN_SEOMYEON", toStopId: "STOP_BUSAN_DONGNAE", distanceKm: 6.2, durationMin: 16, intervalMin: 5, fare: 1550, operatingCity: "부산광역시", tip: "서면에서 중앙대로 BRT 경유 동래역 탑승!", firstTime: "05:00", lastTime: "23:30", intervalText: "4~7분", operatingCompany: "부산 삼화피앤씨", backupLines: ["부산 111번"], transferDiscount: "INTEGRATED" },
  { id: "R_BUSAN_SEOMYEON_DONGNAE_R", routeNo: "부산 86번 / 110번 / 111번", busType: "시내버스", fromStopId: "STOP_BUSAN_DONGNAE", toStopId: "STOP_BUSAN_SEOMYEON", distanceKm: 6.2, durationMin: 16, intervalMin: 5, fare: 1550, operatingCity: "부산광역시", tip: "동래역에서 서면 방면 탑승.", firstTime: "05:00", lastTime: "23:30", intervalText: "4~7분", operatingCompany: "부산 삼화피앤씨", backupLines: ["부산 111번"], transferDiscount: "INTEGRATED" },
  { id: "R_ULSAN_SAMSAN_TAEHWA_F", routeNo: "울산 133번 / 407번 / 708번", busType: "시내버스", fromStopId: "STOP_ULSAN_SAMSAN", toStopId: "STOP_ULSAN_TAEHWA", distanceKm: 4.5, durationMin: 13, intervalMin: 7, fare: 1500, operatingCity: "울산광역시", tip: "삼산동 롯데백화점에서 태화강 국가정원 탑승!", firstTime: "05:30", lastTime: "23:00", intervalText: "6~9분", operatingCompany: "울산 유진버스", backupLines: ["울산 407번"], transferDiscount: "INTEGRATED" },
  { id: "R_ULSAN_SAMSAN_TAEHWA_R", routeNo: "울산 133번 / 407번 / 708번", busType: "시내버스", fromStopId: "STOP_ULSAN_TAEHWA", toStopId: "STOP_ULSAN_SAMSAN", distanceKm: 4.5, durationMin: 13, intervalMin: 7, fare: 1500, operatingCity: "울산광역시", tip: "태화강 국가정원에서 삼산동 방면 탑승.", firstTime: "05:30", lastTime: "23:00", intervalText: "6~9분", operatingCompany: "울산 유진버스", backupLines: ["울산 407번"], transferDiscount: "INTEGRATED" },
  { id: "R_POHANG_TERM_YEONGIL_F", routeNo: "포항 105번 / 207번", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_07", toStopId: "STOP_GYEONGBUK_POHANG_YEONGIL", distanceKm: 6.2, durationMin: 18, intervalMin: 8, fare: 1500, operatingCity: "포항시", tip: "포항시외터미널에서 죽도시장 경유 영일대해수욕장 탑승!", firstTime: "05:40", lastTime: "22:40", intervalText: "7~10분", operatingCompany: "포항 신안여객", backupLines: ["포항 207번"], transferDiscount: "INTEGRATED" },
  { id: "R_POHANG_TERM_YEONGIL_R", routeNo: "포항 105번 / 207번", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_POHANG_YEONGIL", toStopId: "STOP_GYEONGBUK_07", distanceKm: 6.2, durationMin: 18, intervalMin: 8, fare: 1500, operatingCity: "포항시", tip: "영일대해변에서 포항터미널 방면 탑승.", firstTime: "05:40", lastTime: "22:40", intervalText: "7~10분", operatingCompany: "포항 신안여객", backupLines: ["포항 207번"], transferDiscount: "INTEGRATED" },
  { id: "R_GYEONGJU_TERM_BOMUN_F", routeNo: "경주 10번 / 11번 / 700번", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_06", toStopId: "STOP_GYEONGBUK_GYEONGJU_BOMUN", distanceKm: 8.5, durationMin: 20, intervalMin: 10, fare: 1700, operatingCity: "경주시", tip: "경주고속터미널에서 보문관광단지 10번 순환버스 탑승!", firstTime: "06:00", lastTime: "22:00", intervalText: "8~12분", operatingCompany: "경주 새천년미소", backupLines: ["경주 11번"], transferDiscount: "INTEGRATED" },
  { id: "R_GYEONGJU_TERM_BOMUN_R", routeNo: "경주 10번 / 11번 / 700번", busType: "시내버스", fromStopId: "STOP_GYEONGBUK_GYEONGJU_BOMUN", toStopId: "STOP_GYEONGBUK_06", distanceKm: 8.5, durationMin: 20, intervalMin: 10, fare: 1700, operatingCity: "경주시", tip: "보문단지에서 경주터미널 방면 11번 탑승.", firstTime: "06:00", lastTime: "22:00", intervalText: "8~12분", operatingCompany: "경주 새천년미소", backupLines: ["경주 11번"], transferDiscount: "INTEGRATED" },
  { id: "R_JINJU_TERM_GNU_F", routeNo: "진주 120번 / 130번 / 200번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_02", toStopId: "STOP_GYEONGNAM_JINJU_GNU", distanceKm: 4.8, durationMin: 14, intervalMin: 6, fare: 1500, operatingCity: "진주시", tip: "진주시외터미널에서 가좌동 경상국립대학교 정문 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "5~8분", operatingCompany: "진주 삼성교통", backupLines: ["진주 130번"], transferDiscount: "INTEGRATED" },
  { id: "R_JINJU_TERM_GNU_R", routeNo: "진주 120번 / 130번 / 200번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_JINJU_GNU", toStopId: "STOP_GYEONGNAM_02", distanceKm: 4.8, durationMin: 14, intervalMin: 6, fare: 1500, operatingCity: "진주시", tip: "경상대에서 진주시외터미널 방면 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "5~8분", operatingCompany: "진주 삼성교통", backupLines: ["진주 130번"], transferDiscount: "INTEGRATED" },

  // [호남권 시내]
  { id: "R_JEONJU_HANOK_PYEONGHWA_F", routeNo: "전주 1000번 / 119번 / 380번", busType: "시내버스", fromStopId: "STOP_JEONBUK_HANOK", toStopId: "STOP_JEONBUK_PYEONGHWA", distanceKm: 3.6, durationMin: 10, intervalMin: 5, fare: 1500, operatingCity: "전주시", tip: "한옥마을에서 평화동 종점 차고지 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "4~7분", operatingCompany: "전주 전주교통", backupLines: ["전주 119번"], transferDiscount: "JEONBUK_LOCAL" },
  { id: "R_JEONJU_HANOK_PYEONGHWA_R", routeNo: "전주 1000번 / 119번 / 380번", busType: "시내버스", fromStopId: "STOP_JEONBUK_PYEONGHWA", toStopId: "STOP_JEONBUK_HANOK", distanceKm: 3.6, durationMin: 10, intervalMin: 5, fare: 1500, operatingCity: "전주시", tip: "평화동에서 한옥마을 방면 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "4~7분", operatingCompany: "전주 전주교통", backupLines: ["전주 119번"], transferDiscount: "JEONBUK_LOCAL" },
  { id: "R_IKSAN_STN_WONKWANG_F", routeNo: "익산 108번 / 333번 / 104번", busType: "시내버스", fromStopId: "STOP_JEONBUK_01", toStopId: "STOP_JEONBUK_WONKWANG", distanceKm: 4.2, durationMin: 12, intervalMin: 8, fare: 1500, operatingCity: "익산시", tip: "익산역에서 원광대학교 대학로 탑승!", firstTime: "06:00", lastTime: "22:20", intervalText: "6~9분", operatingCompany: "익산 익산여객", backupLines: ["익산 333번"], transferDiscount: "JEONBUK_LOCAL" },
  { id: "R_IKSAN_STN_WONKWANG_R", routeNo: "익산 108번 / 333번 / 104번", busType: "시내버스", fromStopId: "STOP_JEONBUK_WONKWANG", toStopId: "STOP_JEONBUK_01", distanceKm: 4.2, durationMin: 12, intervalMin: 8, fare: 1500, operatingCity: "익산시", tip: "원광대에서 익산역 방면 탑승.", firstTime: "06:00", lastTime: "22:20", intervalText: "6~9분", operatingCompany: "익산 익산여객", backupLines: ["익산 333번"], transferDiscount: "JEONBUK_LOCAL" },
  { id: "R_SUNCHEON_STN_GARDEN_F", routeNo: "순천 66번 / 670번", busType: "시내버스", fromStopId: "STOP_JEONNAM_03", toStopId: "STOP_JEONNAM_SUNCHEON_GARDEN", distanceKm: 3.5, durationMin: 10, intervalMin: 10, fare: 1500, operatingCity: "순천시", tip: "순천역에서 순천만국가정원/습지 탑승!", firstTime: "06:00", lastTime: "22:00", intervalText: "8~12분", operatingCompany: "순천 순천교통", backupLines: ["순천 670번"], transferDiscount: "INTEGRATED" },
  { id: "R_SUNCHEON_STN_GARDEN_R", routeNo: "순천 66번 / 670번", busType: "시내버스", fromStopId: "STOP_JEONNAM_SUNCHEON_GARDEN", toStopId: "STOP_JEONNAM_03", distanceKm: 3.5, durationMin: 10, intervalMin: 10, fare: 1500, operatingCity: "순천시", tip: "순천만국가정원에서 순천역 방면 탑승.", firstTime: "06:00", lastTime: "22:00", intervalText: "8~12분", operatingCompany: "순천 순천교통", backupLines: ["순천 670번"], transferDiscount: "INTEGRATED" },
  { id: "R_YEOSU_TERM_ODONGDO_F", routeNo: "여수 2번 / 999번 / 111번", busType: "시내버스", fromStopId: "STOP_GYEONGNAM_YEOSU", toStopId: "STOP_JEONNAM_YEOSU_ODONGDO", distanceKm: 5.2, durationMin: 15, intervalMin: 8, fare: 1500, operatingCity: "여수시", tip: "여수종합터미널에서 오동도 입구 탑승!", firstTime: "06:00", lastTime: "22:30", intervalText: "6~10분", operatingCompany: "여수 여수여객", backupLines: ["여수 999번"], transferDiscount: "INTEGRATED" },
  { id: "R_YEOSU_TERM_ODONGDO_R", routeNo: "여수 2번 / 999번 / 111번", busType: "시내버스", fromStopId: "STOP_JEONNAM_YEOSU_ODONGDO", toStopId: "STOP_GYEONGNAM_YEOSU", distanceKm: 5.2, durationMin: 15, intervalMin: 8, fare: 1500, operatingCity: "여수시", tip: "오동도에서 여수터미널 방면 탑승.", firstTime: "06:00", lastTime: "22:30", intervalText: "6~10분", operatingCompany: "여수 여수여객", backupLines: ["여수 999번"], transferDiscount: "INTEGRATED" },
  { id: "R_MOKPO_TERM_PEACE_F", routeNo: "목포 1번 / 20번 / 30번", busType: "간선시내버스", fromStopId: "STOP_JEONNAM_02", toStopId: "STOP_JEONNAM_MOKPO_PEACE", distanceKm: 4.6, durationMin: 13, intervalMin: 7, fare: 1500, operatingCity: "목포시", tip: "목포역/터미널에서 하당 평화광장/갓바위 탑승!", firstTime: "06:00", lastTime: "22:40", intervalText: "6~9분", operatingCompany: "목포 태원여객", backupLines: ["목포 20번"], transferDiscount: "INTEGRATED" },
  { id: "R_MOKPO_TERM_PEACE_R", routeNo: "목포 1번 / 20번 / 30번", busType: "간선시내버스", fromStopId: "STOP_JEONNAM_MOKPO_PEACE", toStopId: "STOP_JEONNAM_02", distanceKm: 4.6, durationMin: 13, intervalMin: 7, fare: 1500, operatingCity: "목포시", tip: "평화광장에서 목포역/종합터미널 방면 탑승.", firstTime: "06:00", lastTime: "22:40", intervalText: "6~9분", operatingCompany: "목포 태원여객", backupLines: ["목포 20번"], transferDiscount: "INTEGRATED" },

  // [제주도 시내 & 일주 노선]
  { id: "R_JEJU_AIRPORT_DONGMUN_F", routeNo: "제주 316번 / 325번 / 365번", busType: "간선버스", fromStopId: "STOP_JEJU_01", toStopId: "STOP_JEJU_DONGMUN", distanceKm: 4.2, durationMin: 14, intervalMin: 6, fare: 1200, operatingCity: "제주시", tip: "제주국제공항에서 동문시장/관덕정 방면 탑승!", firstTime: "06:00", lastTime: "22:20", intervalText: "5~8분", operatingCompany: "제주 삼영교통", backupLines: ["제주 365번"], transferDiscount: "JEJU_LOCAL" },
  { id: "R_JEJU_AIRPORT_DONGMUN_R", routeNo: "제주 316번 / 325번 / 365번", busType: "간선버스", fromStopId: "STOP_JEJU_DONGMUN", toStopId: "STOP_JEJU_01", distanceKm: 4.2, durationMin: 14, intervalMin: 6, fare: 1200, operatingCity: "제주시", tip: "동문시장에서 제주공항 방면 탑승.", firstTime: "06:00", lastTime: "22:20", intervalText: "5~8분", operatingCompany: "제주 삼영교통", backupLines: ["제주 365번"], transferDiscount: "JEJU_LOCAL" },
  { id: "R_JEJU_AIRPORT_JUNGMUN_F", routeNo: "제주 182번 (급행) / 600번", busType: "급행버스", fromStopId: "STOP_JEJU_01", toStopId: "STOP_JEJU_JUNGMUN", distanceKm: 38.5, durationMin: 45, intervalMin: 15, fare: 3000, operatingCity: "제주특별자치도", tip: "제주공항에서 평화로 경유 중문관광단지 탑승!", firstTime: "06:00", lastTime: "22:00", intervalText: "12~18분", operatingCompany: "제주 금남여객", backupLines: ["제주 600번"], transferDiscount: "JEJU_LOCAL" },
  { id: "R_JEJU_AIRPORT_JUNGMUN_R", routeNo: "제주 182번 (급행) / 600번", busType: "급행버스", fromStopId: "STOP_JEJU_JUNGMUN", toStopId: "STOP_JEJU_01", distanceKm: 38.5, durationMin: 45, intervalMin: 15, fare: 3000, operatingCity: "제주특별자치도", tip: "중문관광단지에서 제주국제공항 방면 탑승.", firstTime: "06:00", lastTime: "22:00", intervalText: "12~18분", operatingCompany: "제주 금남여객", backupLines: ["제주 600번"], transferDiscount: "JEJU_LOCAL" },
  { id: "R_JEJU_DONGMUN_SEONGSAN_F", routeNo: "제주 101번 (동일주 급행) / 201번", busType: "급행/간선버스", fromStopId: "STOP_JEJU_DONGMUN", toStopId: "STOP_JEJU_SEONGSAN", distanceKm: 46.0, durationMin: 58, intervalMin: 15, fare: 3000, operatingCity: "제주특별자치도", tip: "동문시장/제주에서 함덕·세화 경유 성산일출봉 탑승!", firstTime: "06:00", lastTime: "21:50", intervalText: "12~18분", operatingCompany: "제주 동진여객", backupLines: ["제주 201번"], transferDiscount: "JEJU_LOCAL" },
  { id: "R_JEJU_DONGMUN_SEONGSAN_R", routeNo: "제주 101번 (동일주 급행) / 201번", busType: "급행/간선버스", fromStopId: "STOP_JEJU_SEONGSAN", toStopId: "STOP_JEJU_DONGMUN", distanceKm: 46.0, durationMin: 58, intervalMin: 15, fare: 3000, operatingCity: "제주특별자치도", tip: "성산일출봉에서 제주시내/동문시장 방면 탑승.", firstTime: "06:00", lastTime: "21:50", intervalText: "12~18분", operatingCompany: "제주 동진여객", backupLines: ["제주 201번"], transferDiscount: "JEJU_LOCAL" }
];



