import { calculateDistanceKm } from '../utils/geoUtils.js';
import { BusRouteAutoUpdater } from '../services/busRouteAutoUpdater.js';

// 대한민국 전국 시내버스/농어촌버스 정류장 종합 데이터베이스 (전국 17개 시도 세부 버스정류장)
export const BUS_STOPS = [
  // === 1. 수도권 (서울 / 경기 / 인천 / 공항 / 구리) ===
  { id: "STOP_SEOUL_01", name: "서울역 (버스환승센터)", city: "서울특별시 중구", region: "수도권", lat: 37.5559, lng: 126.9723, isHub: true, desc: "전국 시내버스 일주 출발 1위 거점" },
  { id: "STOP_SEOUL_02", name: "강남역 버스정류장", city: "서울특별시 강남구", region: "수도권", lat: 37.4979, lng: 127.0276, isHub: true, desc: "경기 남부/동부 광역 및 시내버스 연계 정류장" },
  { id: "STOP_SEOUL_03", name: "청량리역 환승센터", city: "서울특별시 동대문구", region: "수도권", lat: 37.5802, lng: 127.0468, isHub: true, desc: "경기 동북부(구리, 남양주, 가평) 시내버스 환승 거점" },
  { id: "STOP_SEOUL_04", name: "사당역 버스정류장", city: "서울특별시 동작구", region: "수도권", lat: 37.4765, lng: 126.9816, isHub: true, desc: "과천, 안양, 수원, 화성행 광역시내버스 터미널" },
  { id: "STOP_SEOUL_JAMSIL_STADIUM", name: "종합운동장역.잠실야구장 버스정류장", city: "서울특별시 송파구 잠실동", region: "수도권", lat: 37.5109, lng: 127.0736, isHub: false, desc: "잠실 종합운동장 나들목 및 잠실야구장 바로 앞 정류장" },
  { id: "STOP_SEOUL_JAMSIL", name: "잠실역.신천동 버스정류장", city: "서울특별시 송파구 신천동", region: "수도권", lat: 37.5133, lng: 127.1001, isHub: false, desc: "잠실 롯데월드타워 및 송파구 버스 환승 거점" },
  { id: "STOP_SEOUL_SAMSEONG", name: "삼성역.무역센터 버스정류장", city: "서울특별시 강남구 삼성동", region: "수도권", lat: 37.5088, lng: 127.0632, isHub: false, desc: "코엑스 및 봉은사로 시내버스 정류장" },
  { id: "STOP_INCHEON_AIRPORT_T2", name: "인천공항T2 버스정류장", city: "인천광역시 중구 운서동", region: "수도권", lat: 37.4687, lng: 126.4339, isHub: false, desc: "인천국제공항 제2여객터미널 고가도로 및 시내/좌석버스 승차장" },
  { id: "STOP_INCHEON_AIRPORT_T1", name: "인천공항T1 버스정류장", city: "인천광역시 중구 운서동", region: "수도권", lat: 37.4491, lng: 126.4514, isHub: false, desc: "인천국제공항 제1여객터미널 시내버스 승차장" },
  { id: "STOP_SIHEUNG_01", name: "시흥사거리 버스정류장", city: "서울특별시 금천구 시흥동", region: "수도권", lat: 37.4532, lng: 126.9038, isHub: true, desc: "서울 올빼미 N75번 종점 및 경기 안양/수원 연계 정류장" },
  { id: "STOP_INCHEON_01", name: "인천터미널역 버스정류장", city: "인천광역시 미추홀구", region: "수도권", lat: 37.4412, lng: 126.7011, isHub: true, desc: "인천 시내 및 부천, 시흥 연계 정류장" },
  { id: "STOP_GYEONGGI_01", name: "안양역 버스정류장", city: "안양시 만안구", region: "수도권", lat: 37.4027, lng: 126.9224, isHub: true, desc: "서울 150번 및 경기 900번 시내버스 환승역" },
  { id: "STOP_GYEONGGI_02", name: "수원역 (AK플라자)", city: "수원시 팔달구", region: "수도권", lat: 37.2656, lng: 127.0000, isHub: true, desc: "경기 남부 최고의 교통 허브. 평택, 용인, 화성 연계" },
  { id: "STOP_GYEONGGI_03", name: "오산역 환승센터", city: "오산시", region: "수도권", lat: 37.1459, lng: 127.0667, isHub: true, desc: "수원과 평택, 화성 동탄을 잇는 시내버스 중간 요충지" },
  { id: "STOP_GYEONGGI_04", name: "평택역 (AK플라자)", city: "평택시", region: "수도권", lat: 36.9907, lng: 127.0854, isHub: true, desc: "수도권 시내버스의 최남단 핵심 거점. 충남 성환/천안 연계" },
  { id: "STOP_GYEONGGI_05", name: "화성 동탄역 버스정류장", city: "화성시 동탄동", region: "수도권", lat: 37.1995, lng: 127.0965, isHub: true, desc: "화성 동탄신도시 시내버스 환승 거점" },
  { id: "STOP_GYEONGGI_GURI", name: "구리역.돌다리 버스정류장", city: "경기도 구리시 인창동/안골로", region: "수도권", lat: 37.6033, lng: 127.1438, isHub: false, desc: "구리시 안골로, 돌다리시장 및 청량리/남양주 시내버스 거점" },
  { id: "STOP_GYEONGGI_NAMYANGJU", name: "남양주시청.금곡역 버스정류장", city: "경기도 남양주시 금곡동", region: "수도권", lat: 37.6358, lng: 127.2062, isHub: false, desc: "남양주시 시내버스 및 가평/춘천 연계 정류장" },

  // === 2. 충청권 (충남 / 충북 / 대전 / 세종 / 공주 / 청주 / 충주) ===
  { id: "STOP_CHUNGNAM_01", name: "성환버스터미널", city: "천안시 성환읍", region: "충청권", lat: 36.9168, lng: 127.1325, isHub: true, desc: "수도권(평택)과 충청권(천안) 시내버스가 만나는 역사적 접점" },
  { id: "STOP_CHUNGNAM_02", name: "천안역 (동부광장)", city: "천안시 동남구", region: "충청권", lat: 36.8097, lng: 127.1462, isHub: true, desc: "충남 교통의 요충지. 공주, 아산, 전의/세종 시내버스 이동" },
  { id: "STOP_CHUNGNAM_GANGGYEONG", name: "강경버스터미널", city: "충남 논산시 강경읍", region: "충청권", lat: 36.1554, lng: 127.0142, isHub: true, desc: "대전/논산 시내버스와 익산 시내버스(333번/108번) 환승 필수 접점" },
  { id: "STOP_CHUNGNAM_03", name: "전의역 정류장", city: "세종특별자치시 전의면", region: "충청권", lat: 36.6853, lng: 127.2008, isHub: true, desc: "천안시내버스(700번)와 세종시내버스(801번) 환승 필수 거점" },
  { id: "STOP_CHUNGNAM_04", name: "공주 종합버스터미널 앞 버스정류장", city: "공주시 신관동", region: "충청권", lat: 36.4623, lng: 127.1264, isHub: true, desc: "백제 문화 거점 및 세종/천안/대전 시내버스 교차점" },
  { id: "STOP_SEJONG_01", name: "조치원역 버스정류장", city: "세종특별자치시 조치원읍", region: "충청권", lat: 36.6014, lng: 127.2965, isHub: true, desc: "세종시, 청주시, 대전시 시내버스 삼각 교차점" },
  { id: "STOP_SEJONG_02", name: "세종고속시외버스터미널 (시내버스)", city: "세종특별자치시 대평동", region: "충청권", lat: 36.4712, lng: 127.2571, isHub: true, desc: "세종시청, 보람동, 아름동 시내버스 및 BRT 중심 거점" },
  { id: "STOP_SEJONG_03", name: "세종충남대학교병원 버스정류장", city: "세종특별자치시 도담동", region: "충청권", lat: 36.5165, lng: 127.2608, isHub: true, desc: "세종충남대병원 헬스케어센터 및 보듬7로 시내버스 정류장" },
  { id: "STOP_SEJONG_SUMOK", name: "국립세종수목원 / 세종호수공원 버스정류장", city: "세종특별자치시 수목원로", region: "충청권", lat: 36.4950, lng: 127.2800, isHub: false, desc: "국립세종수목원 정문 및 세종호수공원 수목원로 정류장" },
  { id: "STOP_SEJONG_GOVERNMENT", name: "정부세종청사 버스정류장", city: "세종특별자치시 어진동", region: "충청권", lat: 36.5042, lng: 127.2612, isHub: false, desc: "정부세종청사 중앙동 및 시내버스 환승장" },
  { id: "STOP_DAEJEON_01", name: "대전역 동광장", city: "대전광역시 동구", region: "충청권", lat: 36.3323, lng: 127.4342, isHub: true, desc: "대전 시내버스의 중심. 옥천(607번), 공주, 세종 BRT 탑승" },
  { id: "STOP_DAEJEON_02", name: "대전 유성온천역 버스정류장", city: "대전광역시 유성구", region: "충청권", lat: 36.3538, lng: 127.3415, isHub: true, desc: "세종, 공주, 논산 방면 대전 서부 시내버스 거점" },
  { id: "STOP_CHUNGBUK_01", name: "옥천 시내버스종점", city: "충북 옥천군", region: "충청권", lat: 36.3015, lng: 127.5681, isHub: true, desc: "대전 607번 내리는 곳 및 영동 시내버스 환승 정류장" },
  { id: "STOP_CHUNGBUK_02", name: "영동역 버스정류장", city: "충북 영동군", region: "충청권", lat: 36.1751, lng: 127.7772, isHub: true, desc: "충북 영동군과 경북 김천시 도경계(추풍령)로 향하는 시내버스" },
  { id: "STOP_CHUNGBUK_03", name: "추풍령 시내버스정류장", city: "충북 영동군 추풍령면", region: "충청권", lat: 36.2163, lng: 127.9942, isHub: true, desc: "충청북도와 경상북도의 경계! 시내버스 전국일주 거점" },
  { id: "STOP_CHUNGBUK_04", name: "충주시외버스터미널 앞 정류장", city: "충주시 칠금동", region: "충청권", lat: 36.9804, lng: 127.9142, isHub: true, desc: "중원 문화 거점 및 원주, 제천, 음성 연계 시내버스 정류장" },
  { id: "STOP_CHUNGBUK_05", name: "청주 오송역 / 청주공항 환승센터", city: "청주시 흥덕구 오송읍", region: "충청권", lat: 36.6348, lng: 127.2858, isHub: true, desc: "청주 747번 및 세종 B1/B2/B3/B4 BRT 핵심 기점" },

  // === 3. 강원권 (강원특별자치도 - 춘천, 홍천, 원주, 강릉) ===
  { id: "STOP_GANGWON_01", name: "춘천역 환승정류장", city: "춘천시", region: "강원권", lat: 37.8848, lng: 127.7169, isHub: true, desc: "가평/청평 시내버스 연계 춘천 중심 정류장" },
  { id: "STOP_GANGWON_02", name: "홍천터미널 앞 (시내버스)", city: "홍천군", region: "강원권", lat: 37.6892, lng: 127.8821, isHub: true, desc: "양평/용문에서 홍천, 인제 방면 농어촌버스" },
  { id: "STOP_GANGWON_03", name: "원주시외버스터미널 앞 정류장", city: "원주시 단계동", region: "강원권", lat: 37.3441, lng: 127.9304, isHub: true, desc: "강원 남부 시내버스 허브 (제천, 충주, 횡성, 춘천 연계)" },
  { id: "STOP_GANGWON_04", name: "강릉역 버스정류장", city: "강릉시", region: "강원권", lat: 37.7638, lng: 128.8996, isHub: true, desc: "서울-강릉 시내버스 일주 최종 도달지!" },

  // === 4. 영남권 (경북 / 경남 / 대구 / 울산 / 부산 / 포항 / 창원 / 진주) ===
  { id: "STOP_GYEONGBUK_01", name: "김천역 버스정류장", city: "김천시", region: "영남권", lat: 36.1241, lng: 128.1189, isHub: true, desc: "추풍령 시내버스 11번 종점. 구미행 55번 환승" },
  { id: "STOP_GYEONGBUK_02", name: "구미역 버스정류장", city: "구미시", region: "영남권", lat: 36.1284, lng: 128.3312, isHub: true, desc: "김천-구미 555번 및 왜관/대구 방면 111번 시내버스 환승" },
  { id: "STOP_GYEONGBUK_03", name: "왜관북부정류장", city: "칠곡군 왜관읍", region: "영남권", lat: 35.9924, lng: 128.3995, isHub: true, desc: "구미 시내버스와 대구 진입 칠곡 250번 버스의 환승장" },
  { id: "STOP_DAEGU_01", name: "대구 북부정류장 (태전역)", city: "대구광역시 북구", region: "영남권", lat: 35.9189, lng: 128.5492, isHub: true, desc: "칠곡250번 하차 및 대구시내버스 708/55번 환승" },
  { id: "STOP_DAEGU_02", name: "대구 동대구역 복합환승센터", city: "대구광역시 동구", region: "영남권", lat: 35.8778, lng: 128.6285, isHub: true, desc: "영천(55번/555번), 경산, 하양 방면 시내버스 탑승" },
  { id: "STOP_GYEONGBUK_04", name: "영천 시외버스터미널 앞", city: "영천시", region: "영남권", lat: 35.9678, lng: 128.9351, isHub: true, desc: "대구 555번 완착 및 경주 아화 방면 영천 753번 시내버스 탑승" },
  { id: "STOP_GYEONGBUK_05", name: "경주 아화 버스정류장", city: "경주시 서면", region: "영남권", lat: 35.9067, lng: 129.0723, isHub: true, desc: "영천시내버스와 경주시내버스(300번대)의 연결 고리" },
  { id: "STOP_GYEONGBUK_06", name: "경주고속버스터미널 앞 정류장", city: "경주시", region: "영남권", lat: 35.8392, lng: 129.2045, isHub: true, desc: "경주시내버스 500번/506번 탑승하여 울산 언양으로 이동" },
  { id: "STOP_GYEONGBUK_07", name: "포항 시외버스터미널 앞 버스정류장", city: "포항시 남구", region: "영남권", lat: 36.0124, lng: 129.3512, isHub: true, desc: "동해안 해안선 시내버스 및 경주 200번/포항 101번 거점" },
  { id: "STOP_ULSAN_01", name: "언양임시공용버스터미널 (시내버스)", city: "울산광역시 울주군", region: "영남권", lat: 35.5684, lng: 129.1235, isHub: true, desc: "경주 500번 하차 후 울산 직행좌석 1713/1127/2100번 환승장" },
  { id: "STOP_BUSAN_01", name: "부산 노포역 (종합버스터미널 시내버스)", city: "부산광역시 금정구", region: "영남권", lat: 35.2847, lng: 129.0954, isHub: true, desc: "울산/양산 시내버스가 부산으로 들어오는 관문" },
  { id: "STOP_BUSAN_02", name: "부산역 (시내버스 환승센터)", city: "부산광역시 동구", region: "영남권", lat: 35.1152, lng: 129.0422, isHub: true, desc: "서울-부산 시내버스 일주 최후의 도달지점!" },
  { id: "STOP_GYEONGNAM_01", name: "창원 종합버스터미널 앞 정류장", city: "창원시 의창구", region: "영남권", lat: 35.2361, lng: 128.6558, isHub: true, desc: "경남 시내버스 중심 및 부산 2000번/창원 100번 연계" },
  { id: "STOP_GYEONGNAM_02", name: "진주시외버스터미널 앞 정류장", city: "진주시 장대동", region: "영남권", lat: 35.1872, lng: 128.0881, isHub: true, desc: "서부경남 시내버스 중심 및 남해안/지리산 연계 정류장" },

  // === 5. 호남권 (전북 / 전남 / 광주 / 정읍 / 순천 / 목포) ===
  { id: "STOP_JEONBUK_01", name: "익산역 버스정류장", city: "익산시", region: "호남권", lat: 35.9404, lng: 126.9545, isHub: true, desc: "충남 논산/강경에서 전북으로 들어오는 시내버스 접점" },
  { id: "STOP_JEONBUK_02", name: "전주시외버스터미널 앞 (시내버스)", city: "전주시 덕진구", region: "호남권", lat: 35.8341, lng: 127.1332, isHub: true, desc: "전주 한옥마을, 정읍, 완주 시내버스 연계" },
  { id: "STOP_JEONBUK_03", name: "정읍역 버스정류장", city: "정읍시 연지동", region: "호남권", lat: 35.5756, lng: 126.8524, isHub: true, desc: "전북-전남 도경계(노령재) 시내버스 환승 거점" },
  { id: "STOP_JEONNAM_01", name: "장성 사거리버스정류장", city: "전남 장성군 북이면", region: "호남권", lat: 35.3905, lng: 126.8488, isHub: true, desc: "전라북도 정읍시와 전라남도 장성군의 도경계 시내버스 접점" },
  { id: "STOP_GWANGJU_01", name: "광주 유스퀘어 (종합버스터미널 시내버스)", city: "광주광역시 서구", region: "호남권", lat: 35.1601, lng: 126.8793, isHub: true, desc: "호남권 최고 시내버스 교통 허브" },
  { id: "STOP_JEONNAM_02", name: "목포역 버스정류장", city: "목포시", region: "호남권", lat: 34.7912, lng: 126.3881, isHub: true, desc: "전남 서남권 시내버스 최종 목적지" },
  { id: "STOP_JEONNAM_03", name: "순천역 버스정류장", city: "순천시 덕암동", region: "호남권", lat: 34.9458, lng: 127.5032, isHub: true, desc: "여수, 광양, 남원 연계 동전남 시내버스 중심 정류장" },

  // === 6. 제주특별자치도 ===
  { id: "STOP_JEJU_01", name: "제주국제공항 (시내버스 환승)", city: "제주시", region: "제주도", lat: 33.5068, lng: 126.4929, isHub: true, desc: "제주 전역 시내버스 & 급행버스 시작점" },
  { id: "STOP_JEJU_02", name: "서귀포 버스터미널", city: "서귀포시", region: "제주도", lat: 33.2491, lng: 126.5098, isHub: true, desc: "제주 남부 시내버스 중심 정류장" },

  // === 7. 강원 동해안/산간권 (태백·삼척·동해·강릉·속초·고성·인제·양양) ===
  { id: "STOP_GANGWON_TAEBAEK", name: "태백시외버스터미널 앞 정류장", city: "태백시", region: "강원권", lat: 37.1698, lng: 128.9854, isHub: true, desc: "태백 시내버스 중심. 삼척·정선·영월 연계" },
  { id: "STOP_GANGWON_SAMCHEOK", name: "삼척종합버스터미널 앞 정류장", city: "삼척시", region: "강원권", lat: 37.4512, lng: 129.1649, isHub: true, desc: "동해안 시내버스 및 태백·동해 연계" },
  { id: "STOP_GANGWON_DONGHAE", name: "동해시외버스터미널 앞 정류장", city: "동해시", region: "강원권", lat: 37.5213, lng: 129.1148, isHub: true, desc: "강릉·삼척 방면 시내버스 연결 거점" },
  { id: "STOP_GANGWON_JEONGSEON", name: "정선공용버스터미널 앞", city: "정선군", region: "강원권", lat: 37.3808, lng: 128.6608, isHub: true, desc: "정선군 시내버스 중심. 영월·태백 연계" },
  { id: "STOP_GANGWON_YEONGWOL", name: "영월버스터미널 앞 정류장", city: "영월군", region: "강원권", lat: 37.1837, lng: 128.4615, isHub: true, desc: "제천·충주·정선 방면 농어촌버스 허브" },
  { id: "STOP_GANGWON_INJE", name: "인제버스터미널 앞 정류장", city: "인제군", region: "강원권", lat: 38.0690, lng: 128.1707, isHub: true, desc: "춘천·속초·양양 연계 산간 버스 거점" },
  { id: "STOP_GANGWON_YANGYANG", name: "양양버스터미널 앞 정류장", city: "양양군", region: "강원권", lat: 38.0777, lng: 128.6192, isHub: true, desc: "속초·강릉·인제 방면 동해안 연계" },
  { id: "STOP_GANGWON_SOKCHO", name: "속초종합버스터미널 앞", city: "속초시", region: "강원권", lat: 38.2040, lng: 128.5915, isHub: true, desc: "고성·양양·인제 연계 동해안 북단 허브" },
  { id: "STOP_GANGWON_GOSEONG", name: "고성버스터미널 앞", city: "고성군 (강원)", region: "강원권", lat: 38.3802, lng: 128.4675, isHub: true, desc: "속초 북방 및 통일전망대 방면 농어촌버스" },

  // === 8. 경북 내륙권 (안동·영주·봉화·청송·영양·영덕·의성·군위) ===
  { id: "STOP_GYEONGBUK_ANDONG", name: "안동버스터미널 앞 정류장", city: "안동시", region: "영남권", lat: 36.5683, lng: 128.7293, isHub: true, desc: "경북 북부 시내버스 핵심 허브. 영주·의성·청송 연계" },
  { id: "STOP_GYEONGBUK_YEONGJU", name: "영주시외버스터미널 앞 정류장", city: "영주시", region: "영남권", lat: 36.8047, lng: 128.6238, isHub: true, desc: "봉화·안동·단양 연계 경북 서북부 허브" },
  { id: "STOP_GYEONGBUK_BONGHWA", name: "봉화버스터미널 앞 정류장", city: "봉화군", region: "영남권", lat: 36.8934, lng: 128.7327, isHub: true, desc: "영주·태백·울진 연계 농어촌버스" },
  { id: "STOP_GYEONGBUK_CHEONGSONG", name: "청송버스터미널 앞 정류장", city: "청송군", region: "영남권", lat: 36.4349, lng: 129.0568, isHub: true, desc: "안동·영덕·포항 연계 경북 내륙 거점" },
  { id: "STOP_GYEONGBUK_YEONGYANG", name: "영양버스터미널 앞 정류장", city: "영양군", region: "영남권", lat: 36.6684, lng: 129.1133, isHub: true, desc: "청송·봉화·울진 연계 농어촌버스 정류장" },
  { id: "STOP_GYEONGBUK_YEONGDEOK", name: "영덕버스터미널 앞 정류장", city: "영덕군", region: "영남권", lat: 36.4154, lng: 129.3650, isHub: true, desc: "포항·청송·울진 연계 동해안 시내버스" },
  { id: "STOP_GYEONGBUK_UISEONG", name: "의성버스터미널 앞 정류장", city: "의성군", region: "영남권", lat: 36.3528, lng: 128.6966, isHub: true, desc: "안동·군위·구미 연계 경북 중부 농어촌버스" },
  { id: "STOP_GYEONGBUK_GUNWI", name: "군위버스터미널 앞 정류장", city: "군위군 (대구)", region: "영남권", lat: 36.2417, lng: 128.5723, isHub: true, desc: "대구·의성·상주 연계 농어촌버스" },
  { id: "STOP_GYEONGBUK_ULCHIN", name: "울진버스터미널 앞 정류장", city: "울진군", region: "영남권", lat: 36.9935, lng: 129.4006, isHub: true, desc: "영덕·영양·봉화·삼척 연계 동해안 북부" },

  // === 9. 경남 산간권 (거창·함양·산청·합천·남해·하동·통영·고성) ===
  { id: "STOP_GYEONGNAM_GEOCHANG", name: "거창버스터미널 앞 정류장", city: "거창군", region: "영남권", lat: 35.6878, lng: 127.9099, isHub: true, desc: "합천·함양·대구 연계 경남 북부 산간 거점" },
  { id: "STOP_GYEONGNAM_HAMYANG", name: "함양버스터미널 앞 정류장", city: "함양군", region: "영남권", lat: 35.5211, lng: 127.7252, isHub: true, desc: "거창·산청·전주 연계 지리산권 시내버스" },
  { id: "STOP_GYEONGNAM_SANCHEONG", name: "산청버스터미널 앞 정류장", city: "산청군", region: "영남권", lat: 35.4152, lng: 127.8730, isHub: true, desc: "함양·진주 연계 지리산 동쪽 농어촌버스" },
  { id: "STOP_GYEONGNAM_HAPCHEON", name: "합천버스터미널 앞 정류장", city: "합천군", region: "영남권", lat: 35.5662, lng: 128.1659, isHub: true, desc: "거창·대구(옥포)·진주 연계 경남 내륙" },
  { id: "STOP_GYEONGNAM_NAMHAE", name: "남해버스터미널 앞 정류장", city: "남해군", region: "영남권", lat: 34.8373, lng: 127.8920, isHub: true, desc: "남해안 시내버스. 진주·여수 연계" },
  { id: "STOP_GYEONGNAM_HADONG", name: "하동버스터미널 앞 정류장", city: "하동군", region: "영남권", lat: 35.0674, lng: 127.7514, isHub: true, desc: "진주·광양·순천 연계 경남-전남 도경계 거점" },
  { id: "STOP_GYEONGNAM_TONGYEONG", name: "통영버스터미널 앞 정류장", city: "통영시", region: "영남권", lat: 34.8545, lng: 128.4335, isHub: true, desc: "고성·거제·마산 연계 남해안 시내버스" },
  { id: "STOP_GYEONGNAM_GOSEONG", name: "고성버스터미널 앞 정류장 (경남)", city: "고성군 (경남)", region: "영남권", lat: 34.9732, lng: 128.3225, isHub: true, desc: "통영·창원·진주 연계 경남 내륙" },
  { id: "STOP_GYEONGNAM_SACHEON", name: "사천버스터미널 앞 정류장", city: "사천시", region: "영남권", lat: 35.0033, lng: 128.0636, isHub: true, desc: "진주·남해 연계 경남 남해안 시내버스" },
  { id: "STOP_GYEONGNAM_YEOSU", name: "여수버스터미널 앞 정류장", city: "여수시", region: "호남권", lat: 34.7604, lng: 127.6622, isHub: true, desc: "순천·광양·광주 연계 전남 동부 시내버스" },

  // === 10. 충북 내륙권 (제천·단양·보은·괴산·음성) ===
  { id: "STOP_CHUNGBUK_JECHEON", name: "제천시외버스터미널 앞 정류장", city: "제천시", region: "충청권", lat: 37.1327, lng: 128.2047, isHub: true, desc: "충주·원주·단양·영월 연계 충북 동북부 허브" },
  { id: "STOP_CHUNGBUK_DANYANG", name: "단양버스터미널 앞 정류장", city: "단양군", region: "충청권", lat: 36.9845, lng: 128.3691, isHub: true, desc: "제천·영월·영주 연계 소백산권 농어촌버스" },
  { id: "STOP_CHUNGBUK_BOEUN", name: "보은버스터미널 앞 정류장", city: "보은군", region: "충청권", lat: 36.4892, lng: 127.7295, isHub: true, desc: "청주·옥천·속리산 연계 충북 중남부 거점" },
  { id: "STOP_CHUNGBUK_GOESAN", name: "괴산버스터미널 앞 정류장", city: "괴산군", region: "충청권", lat: 36.8153, lng: 127.7873, isHub: true, desc: "충주·청주·문경 연계 농어촌버스" },
  { id: "STOP_CHUNGBUK_EUMSEONG", name: "음성버스터미널 앞 정류장", city: "음성군", region: "충청권", lat: 36.9403, lng: 127.6907, isHub: true, desc: "충주·청주·이천 연계 충북 북서부" },

  // === 11. 전남 동부·남해안권 (광양·고흥·보성·장흥·해남·완도) ===
  { id: "STOP_JEONNAM_GWANGYANG", name: "광양버스터미널 앞 정류장", city: "광양시", region: "호남권", lat: 34.9404, lng: 127.6963, isHub: true, desc: "순천·여수·하동 연계 전남-경남 도경계 거점" },
  { id: "STOP_JEONNAM_GOHEUNG", name: "고흥버스터미널 앞 정류장", city: "고흥군", region: "호남권", lat: 34.6038, lng: 127.2798, isHub: true, desc: "보성·순천 연계 남해안 전남 농어촌버스" },
  { id: "STOP_JEONNAM_BOSEONG", name: "보성버스터미널 앞 정류장", city: "보성군", region: "호남권", lat: 34.7718, lng: 127.0803, isHub: true, desc: "광주·순천·고흥 연계 전남 중남부" },
  { id: "STOP_JEONNAM_HAENAM", name: "해남버스터미널 앞 정류장", city: "해남군", region: "호남권", lat: 34.5727, lng: 126.5998, isHub: true, desc: "목포·완도·강진 연계 한반도 최남단 거점" },
  { id: "STOP_JEONNAM_WANDO", name: "완도버스터미널 앞 정류장", city: "완도군", region: "호남권", lat: 34.3143, lng: 126.7542, isHub: true, desc: "해남·강진 연계 전남 도서권 시내버스" },
  { id: "STOP_JEONNAM_SUNCHEON_YEOMSU", name: "여수터미널 연결 순천 정류장", city: "순천시/여수시", region: "호남권", lat: 34.8732, lng: 127.5843, isHub: false, desc: "순천-여수 시내버스 중간 경유 거점" },

  // === 12. 충남 서해안 / 북부 접경 / 산간 추가 정류소 ===
  { id: "STOP_CHUNGNAM_SEOSAN", name: "서산공용버스터미널 앞 정류장", city: "서산시", region: "충청권", lat: 36.7844, lng: 126.4503, isHub: true, desc: "당진·태안·홍성 연계 충남 서해안 허브" },
  { id: "STOP_CHUNGNAM_TAEAN", name: "태안공용버스터미널 앞 정류장", city: "태안군", region: "충청권", lat: 36.7533, lng: 126.2977, isHub: true, desc: "서산·안면도 연계 충남 서해안 최서단 거점" },
  { id: "STOP_GANGWON_CHEORWON", name: "철원 신철원버스터미널 앞", city: "철원군", region: "강원권", lat: 38.1466, lng: 127.3134, isHub: true, desc: "포천·화천·동송 연계 강원 북서단 버스 거점" },
  { id: "STOP_GANGWON_HWACHEON", name: "화천공영버스터미널 앞", city: "화천군", region: "강원권", lat: 38.1062, lng: 127.7082, isHub: true, desc: "춘천·철원·양구 연계 산간 농어촌버스" },
  { id: "STOP_GANGWON_YANGGU", name: "양구시외버스터미널 앞", city: "양구군", region: "강원권", lat: 38.1085, lng: 127.9902, isHub: true, desc: "춘천·화천·인제 연계 국토정중앙 거점" },
  { id: "STOP_GYEONGNAM_GEOJE", name: "거제 고현버스터미널 앞 정류장", city: "거제시", region: "영남권", lat: 34.8879, lng: 128.6231, isHub: true, desc: "부산 2000번 및 통영 시내버스 연계 거제도 중심" },

  // === 13. 세종특별자치시 생활권별 상세 실제 버스정류장 ===
  { id: "STOP_SEJONG_AREUM", name: "아름초등학교.아름동 버스정류장", city: "세종특별자치시 아름동", region: "충청권", lat: 36.5165, lng: 127.2483, isHub: false, desc: "세종 1-2생활권 아름동 중심. 세종 221번/201번/1004번 탑승" },
  { id: "STOP_SEJONG_DODAM", name: "도담동.도담역 버스정류장", city: "세종특별자치시 도담동", region: "충청권", lat: 36.5140, lng: 127.2612, isHub: false, desc: "세종 BRT B0/B2 노선 및 1-4생활권 중심" },
  { id: "STOP_SEJONG_JONGCHON", name: "종촌동.가재마을 버스정류장", city: "세종특별자치시 종촌동", region: "충청권", lat: 36.5050, lng: 127.2450, isHub: false, desc: "세종 1-3생활권 종촌동 중심 정류장" },
  { id: "STOP_SEJONG_GOUN", name: "고운동.가락마을 버스정류장", city: "세종특별자치시 고운동", region: "충청권", lat: 36.5280, lng: 127.2380, isHub: false, desc: "세종 1-1생활권 고운동 중심 시내버스 정류장" },
  { id: "STOP_SEJONG_DAJEONG", name: "다정동.가온마을 버스정류장", city: "세종특별자치시 다정동", region: "충청권", lat: 36.4940, lng: 127.2450, isHub: false, desc: "세종 2-1생활권 다정동 중심 정류장" },
  { id: "STOP_SEJONG_SAEROM", name: "새롬동.새뜸마을 버스정류장", city: "세종특별자치시 새롬동", region: "충청권", lat: 36.4850, lng: 127.2520, isHub: false, desc: "세종 2-2생활권 새롬동 중심 정류장" },
  { id: "STOP_SEJONG_HANSOL", name: "한솔동.첫마을 버스정류장", city: "세종특별자치시 한솔동", region: "충청권", lat: 36.4780, lng: 127.2550, isHub: false, desc: "세종 2-3생활권 첫마을 환승 정류장" },
  { id: "STOP_SEJONG_BORAM", name: "세종시청.보람동 버스정류장", city: "세종특별자치시 보람동", region: "충청권", lat: 36.4801, lng: 127.2890, isHub: false, desc: "세종 3-2생활권 세종시청 및 보람동 중심" },
  { id: "STOP_SEJONG_NASEONG", name: "나성동.어반아트리움 버스정류장", city: "세종특별자치시 나성동", region: "충청권", lat: 36.4890, lng: 127.2600, isHub: false, desc: "세종 2-4생활권 나성동 중심 상업지구 정류장" },

  // === 14. 서울 / 수도권 주요 동·역·랜드마크 상세 정류장 ===
  { id: "STOP_SEOUL_GWANGHWAMUN", name: "광화문역.세종문화회관 버스정류장", city: "서울특별시 종로구", region: "수도권", lat: 37.5714, lng: 126.9768, isHub: false, desc: "광화문광장 및 세종대로 시내버스 거점" },
  { id: "STOP_SEOUL_CITYHALL", name: "서울시청.덕수궁 버스정류장", city: "서울특별시 중구", region: "수도권", lat: 37.5663, lng: 126.9778, isHub: false, desc: "서울 도심 시청앞 광장 및 덕수궁 버스정류장" },
  { id: "STOP_SEOUL_YEOUIDO", name: "여의도환승센터 버스정류장", city: "서울특별시 영등포구 여의도동", region: "수도권", lat: 37.5255, lng: 126.9242, isHub: true, desc: "여의도 금융가 및 인천/경기 서부 광역환승 거점" },
  { id: "STOP_SEOUL_SINCHON", name: "신촌역.신촌오거리 버스정류장", city: "서울특별시 마포구/서대문구", region: "수도권", lat: 37.5552, lng: 126.9368, isHub: false, desc: "연세대·이화여대·서강대 대학가 중심 정류장" },
  { id: "STOP_SEOUL_HONGDAE", name: "홍대입구역 버스정류장", city: "서울특별시 마포구", region: "수도권", lat: 37.5572, lng: 126.9245, isHub: false, desc: "양화로 중앙버스전용차로 및 홍대 상권 정류장" },
  { id: "STOP_SEOUL_JONGNO", name: "종로3가.탑골공원 버스정류장", city: "서울특별시 종로구", region: "수도권", lat: 37.5704, lng: 126.9918, isHub: false, desc: "종로 중앙버스전용차로 핵심 정류장" },
  { id: "STOP_SEOUL_NOWON", name: "노원역.롯데백화점 버스정류장", city: "서울특별시 노원구", region: "수도권", lat: 37.6552, lng: 127.0612, isHub: false, desc: "서울 동북권 최고 상권 및 버스 환승 거점" },
  { id: "STOP_SEOUL_SUYU", name: "수유역.강북구청 버스정류장", city: "서울특별시 강북구", region: "수도권", lat: 37.6380, lng: 127.0257, isHub: false, desc: "도봉로 중앙차로 및 의정부 방면 시내버스 환승" },
  { id: "STOP_SEOUL_KONKUK", name: "건대입구역 버스정류장", city: "서울특별시 광진구", region: "수도권", lat: 37.5404, lng: 127.0692, isHub: false, desc: "건국대·세종대 및 아차산로 시내버스 정류장" },
  { id: "STOP_SEOUL_YEONGDEUNGPO", name: "영등포역 버스환승센터", city: "서울특별시 영등포구", region: "수도권", lat: 37.5156, lng: 126.9076, isHub: true, desc: "경서지역 및 안양/수원/부천 연계 버스 환승센터" },
  { id: "STOP_GYEONGGI_PANGYO", name: "판교역.테크노밸리 버스정류장", city: "성남시 분당구 삼평동", region: "수도권", lat: 37.3948, lng: 127.1112, isHub: false, desc: "판교 테크노밸리 및 분당내곡로 버스 환승장" },
  { id: "STOP_GYEONGGI_SEOHYEON", name: "분당 서현역.AK플라자 정류장", city: "성남시 분당구 서현동", region: "수도권", lat: 37.3850, lng: 127.1230, isHub: false, desc: "분당 신도시 중심 상권 및 시내/광역버스 거점" },
  { id: "STOP_GYEONGGI_GWANGGYO", name: "광교중앙역.아주대 환승센터", city: "수원시 영통구 이의동", region: "수도권", lat: 37.2882, lng: 127.0515, isHub: false, desc: "광교신도시 및 경기도청 신청사 버스 환승센터" },
  { id: "STOP_GYEONGGI_ILSAN", name: "일산 킨텍스.마두역 버스정류장", city: "고양시 일산동구", region: "수도권", lat: 37.6580, lng: 126.7700, isHub: false, desc: "일산 중앙로 버스전용차로 및 킨텍스 정류장" },
  { id: "STOP_GYEONGGI_BUCHEON", name: "부천역.심곡동 버스정류장", city: "부천시 원미구", region: "수도권", lat: 37.4840, lng: 126.7820, isHub: false, desc: "경인로 시내버스 및 인천-서울 연계 정류장" },
  { id: "STOP_GYEONGGI_ANSAN", name: "안산 중앙역 버스정류장", city: "안산시 단원구 고잔동", region: "수도권", lat: 37.3160, lng: 126.8390, isHub: false, desc: "안산 구도심 중심 및 시흥/화성 방면 시내버스" },
  { id: "STOP_INCHEON_SONGDO", name: "송도 센트럴파크.컨벤시아 정류장", city: "인천광역시 연수구 송도동", region: "수도권", lat: 37.3930, lng: 126.6450, isHub: false, desc: "송도국제도시 및 인천 8번/M6405번 시내버스 거점" },
  { id: "STOP_INCHEON_BUPYEONG", name: "부평역 버스정류장", city: "인천광역시 부평구", region: "수도권", lat: 37.4895, lng: 126.7240, isHub: true, desc: "인천 최대 교통 요충지 및 부천/서울 연계 정류장" },

  // === 15. 대전 / 충청 주요 로컬 정류장 ===
  { id: "STOP_DAEJEON_DUNSAN", name: "대전시청.둔산동 버스정류장", city: "대전광역시 서구 둔산동", region: "충청권", lat: 36.3504, lng: 127.3845, isHub: false, desc: "대전 행정·금융 중심 둔산신도시 정류장" },
  { id: "STOP_DAEJEON_CNU", name: "충남대학교 대덕캠퍼스 정문 정류장", city: "대전광역시 유성구 궁동", region: "충청권", lat: 36.3630, lng: 127.3450, isHub: false, desc: "충남대·카이스트 대학로 시내버스 정류장" },
  { id: "STOP_DAEJEON_EUNHAENG", name: "은행동.성심당.중앙로역 정류장", city: "대전광역시 중구 은행동", region: "충청권", lat: 36.3275, lng: 127.4270, isHub: false, desc: "대전 원도심 으능정이거리 및 성심당 본점 정류장" },
  { id: "STOP_CHUNGNAM_ASAN", name: "아산 온양온천역 버스정류장", city: "아산시 온천동", region: "충청권", lat: 36.7800, lng: 127.0040, isHub: false, desc: "천안-아산 연계 시내버스 및 온양 중심 정류장" },
  { id: "STOP_CHUNGBUK_CHEONGJU_SANGDANG", name: "청주 상당산성.육거리시장 정류장", city: "청주시 상당구 남문로", region: "충청권", lat: 36.6350, lng: 127.4900, isHub: false, desc: "청주 구도심 및 상당로 시내버스 메인 정류장" },

  // === 16. 대구 / 경북 주요 로컬 정류장 ===
  { id: "STOP_DAEGU_DONGSEONGRO", name: "대구 동성로.반월당역 정류장", city: "대구광역시 중구 동성로", region: "영남권", lat: 35.8655, lng: 128.5933, isHub: false, desc: "대구 최고 번화가 및 달구벌대로 시내버스 환승 거점" },
  { id: "STOP_DAEGU_KNU", name: "경북대학교 북문 버스정류장", city: "대구광역시 북구 산격동", region: "영남권", lat: 35.8905, lng: 128.6100, isHub: false, desc: "경북대 대학가 및 칠곡/동대구 방면 시내버스 정류장" },
  { id: "STOP_DAEGU_SUSEONG", name: "대구 수성못 버스정류장", city: "대구광역시 수성구 두산동", region: "영남권", lat: 35.8270, lng: 128.6160, isHub: false, desc: "수성못 및 범어동 연계 시내버스 정류장" },
  { id: "STOP_GYEONGBUK_GYEONGSAN", name: "경산 영남대학교 정문 정류장", city: "경산시 대동", region: "영남권", lat: 35.8350, lng: 128.7530, isHub: false, desc: "대구-경산 연계 시내버스 (대구 840번/경산 100번)" },

  // === 17. 부산 / 울산 / 경남 주요 로컬 정류장 ===
  { id: "STOP_BUSAN_SEOMYEON", name: "부산 서면역.롯데백화점 정류장", city: "부산광역시 부산진구 부전동", region: "영남권", lat: 35.1578, lng: 129.0594, isHub: true, desc: "부산 교통·상권의 심장 및 중앙대로 BRT 정류장" },
  { id: "STOP_BUSAN_HAEUNDAE", name: "해운대해수욕장.구남로 버스정류장", city: "부산광역시 해운대구 우동", region: "영남권", lat: 35.1631, lng: 129.1636, isHub: false, desc: "해운대 해변 및 기장/송정 방면 시내버스 정류장" },
  { id: "STOP_BUSAN_CENTUM", name: "벡스코.센텀시티역 버스정류장", city: "부산광역시 해운대구 우동", region: "영남권", lat: 35.1689, lng: 129.1317, isHub: false, desc: "신세계 센텀시티 및 해운대로 BRT 환승 정류장" },
  { id: "STOP_BUSAN_NAMPO", name: "남포동.자갈치시장 버스정류장", city: "부산광역시 중구 남포동", region: "영남권", lat: 35.0975, lng: 129.0305, isHub: false, desc: "자갈치시장, BIFF광장, 영도 연계 시내버스 정류장" },
  { id: "STOP_BUSAN_GWANGAN", name: "광안리해수욕장 입구 정류장", city: "부산광역시 수영구 광안동", region: "영남권", lat: 35.1532, lng: 129.1186, isHub: false, desc: "광안대교 조망 및 수영로 시내버스 정류장" },
  { id: "STOP_BUSAN_SASANG", name: "사상역.서부버스터미널 정류장", city: "부산광역시 사상구 괘법동", region: "영남권", lat: 35.1628, lng: 128.9855, isHub: true, desc: "서부산 최고 교통 허브 및 김해/창원/양산 연계" },
  { id: "STOP_ULSAN_SAMSAN", name: "울산 롯데백화점.삼산동 정류장", city: "울산광역시 남구 삼산동", region: "영남권", lat: 35.5390, lng: 129.3360, isHub: false, desc: "울산 신도심 삼산로 시내버스 중심 정류장" },
  { id: "STOP_GYEONGNAM_SANGNAM", name: "창원 상남동.창원시청 정류장", city: "창원시 성산구 상남동", region: "영남권", lat: 35.2280, lng: 128.6815, isHub: false, desc: "창원 중앙대로 및 상남상업지구 시내버스 정류장" },
  { id: "STOP_GYEONGNAM_MASAN", name: "마산 어시장.합포구청 정류장", city: "창원시 마산합포구", region: "영남권", lat: 35.2050, lng: 128.5750, isHub: false, desc: "마산 해안도로 및 창원/진해 연계 시내버스 정류장" },

  // === 18. 광주 / 전라 주요 로컬 정류장 ===
  { id: "STOP_GWANGJU_SANGMU", name: "광주 상무지구.광주시청 정류장", city: "광주광역시 서구 치평동", region: "호남권", lat: 35.1595, lng: 126.8526, isHub: false, desc: "광주 신도심 상무중앙로 시내버스 핵심 정류장" },
  { id: "STOP_GWANGJU_CHUNGJANG", name: "충장로.국립아시아문화전당 정류장", city: "광주광역시 동구 금남로", region: "호남권", lat: 35.1465, lng: 126.9200, isHub: false, desc: "광주 구도심 충장로 및 금남로 버스 정류장" },
  { id: "STOP_GWANGJU_CNU", name: "전남대학교 용봉캠퍼스 정문 정류장", city: "광주광역시 북구 용봉동", region: "호남권", lat: 35.1760, lng: 126.9090, isHub: false, desc: "전남대 대학로 및 광주 북구 시내버스 정류장" },
  { id: "STOP_GWANGJU_SONGJEONG", name: "광주송정역 버스정류장", city: "광주광역시 광산구 송정동", region: "호남권", lat: 35.1375, lng: 126.7900, isHub: true, desc: "호남선 KTX 연계 및 나주/영광/함평 방면 시내버스" },
  { id: "STOP_JEONBUK_HANOK", name: "전주 한옥마을 버스정류장", city: "전주시 완산구 교동", region: "호남권", lat: 35.8145, lng: 127.1525, isHub: false, desc: "전주 대표 관광지 한옥마을 및 기린대로 시내버스" },
  { id: "STOP_JEONBUK_JBNU", name: "전북대학교 정문 버스정류장", city: "전주시 덕진구 덕진동", region: "호남권", lat: 35.8470, lng: 127.1290, isHub: false, desc: "전북대 대학로 및 익산/군산 방면 시내버스 정류장" },
  { id: "STOP_JEONBUK_GUNSAN", name: "군산 근대역사박물관 정류장", city: "군산시 장미동", region: "호남권", lat: 35.9890, lng: 126.7110, isHub: false, desc: "군산 시간여행마을 및 익산/장항 연계 시내버스" },

  // === 19. 전국 주요 도시권 시내(Intra-City) 핵심 생활권 & 관광 랜드마크 정류장 ===
  // 강원권 시내
  { id: "STOP_GANGW_ANMOK", name: "강릉 안목커피거리 정류장", city: "강릉시 견소동", region: "강원권", lat: 37.7718, lng: 128.9485, isHub: false, desc: "강릉 안목해변 및 카페거리 시내버스 종점" },
  { id: "STOP_GANGW_GYEONGPO", name: "강릉 경포대.경포해변 정류장", city: "강릉시 안현동", region: "강원권", lat: 37.7980, lng: 128.9080, isHub: false, desc: "강릉 경포호 및 경포해변 시내버스 (202번 등)" },
  { id: "STOP_GANGW_SOKCHO_BEACH", name: "속초해수욕장.속초아이 정류장", city: "속초시 조양동", region: "강원권", lat: 38.1905, lng: 128.6030, isHub: false, desc: "속초 청초호 및 속초해변 시내버스" },
  { id: "STOP_GANGW_CHUNCHEON_KNU", name: "강원대학교 춘천캠퍼스 정문 정류장", city: "춘천시 효자동", region: "강원권", lat: 37.8685, lng: 127.7440, isHub: false, desc: "춘천 대학로 및 명동/남춘천역 연계 시내버스" },
  { id: "STOP_GANGW_WONJU_INNO", name: "원주 혁신도시.건강보험공단 정류장", city: "원주시 반곡동", region: "강원권", lat: 37.3210, lng: 127.9780, isHub: false, desc: "원주 혁신도시 공공기관 및 원주역 연계 시내버스" },

  // 충청권 시내
  { id: "STOP_CHUNGNAM_CHEONAN_TERM", name: "천안 종합터미널.신세계백화점 정류장", city: "천안시 동남구 신부동", region: "충청권", lat: 36.8198, lng: 127.1558, isHub: true, desc: "천안 최대 교통 상권 요충지 및 시내버스 환승센터" },
  { id: "STOP_CHUNGBUK_CHEONGJU_GAGYEONG", name: "청주 가경동 시외고속터미널 앞 정류장", city: "청주시 흥덕구 가경동", region: "충청권", lat: 36.6265, lng: 127.4320, isHub: true, desc: "청주 서부 대규모 상권 및 시내버스 환승 결절점" },
  { id: "STOP_CHUNGBUK_CHEONGJU_CBNU", name: "충북대학교 중문.사창사거리 정류장", city: "청주시 서원구 사창동", region: "충청권", lat: 36.6320, lng: 127.4580, isHub: false, desc: "충북대 대학로 및 청주 동서축 시내버스 메인 정류장" },
  { id: "STOP_DAEJEON_EXPO", name: "대전 신세계.엑스포과학공원 정류장", city: "대전광역시 유성구 도룡동", region: "충청권", lat: 36.3760, lng: 127.3820, isHub: false, desc: "대전 엑스포, DCC 컨벤션센터 및 신세계백화점 시내버스" },

  // 영남권 시내
  { id: "STOP_DAEGU_DURYU", name: "대구 두류공원.이월드 정류장", city: "대구광역시 달서구 두류동", region: "영남권", lat: 35.8530, lng: 128.5640, isHub: false, desc: "대구 이월드·두류타워 및 달구벌대로 시내버스" },
  { id: "STOP_BUSAN_TAEJONGDAE", name: "부산 영도 태종대 정류장", city: "부산광역시 영도구 동삼동", region: "영남권", lat: 35.0535, lng: 129.0870, isHub: false, desc: "영도 절영로 및 남포동/부산역 직통 시내버스 (8, 30, 88번)" },
  { id: "STOP_BUSAN_DONGNAE", name: "부산 동래역.온천천 정류장", city: "부산광역시 동래구 온천동", region: "영남권", lat: 35.2055, lng: 129.0780, isHub: true, desc: "부산 중북부 최고 상권 및 중앙대로/금강로 시내버스" },
  { id: "STOP_ULSAN_TAEHWA", name: "울산 태화강 국가정원 정류장", city: "울산광역시 중구 태화동", region: "영남권", lat: 35.5510, lng: 129.2970, isHub: false, desc: "울산 태화강 십리대숲 및 삼산/공업탑 연계 시내버스" },
  { id: "STOP_GYEONGBUK_POHANG_YEONGIL", name: "포항 영일대해수욕장.해상누각 정류장", city: "포항시 북구 두호동", region: "영남권", lat: 36.0560, lng: 129.3780, isHub: false, desc: "포항 도심 해변 및 죽도시장/포항역 연계 시내버스 (105, 207번)" },
  { id: "STOP_GYEONGBUK_GYEONGJU_BOMUN", name: "경주 보문단지.힐튼호텔 정류장", city: "경주시 신평동", region: "영남권", lat: 35.8420, lng: 129.2880, isHub: false, desc: "경주 보문관광단지 및 경주역/터미널 연계 시내버스 (10, 11번)" },
  { id: "STOP_GYEONGNAM_JINJU_GNU", name: "경상국립대학교 가좌캠퍼스 정문", city: "진주시 가좌동", region: "영남권", lat: 35.1530, lng: 128.0990, isHub: false, desc: "진주 남부 대학가 및 진주역/시외터미널 연계 시내버스" },

  // 호남권 시내
  { id: "STOP_JEONBUK_PYEONGHWA", name: "전주 평화동 종점 버스정류장", city: "전주시 완산구 평화동", region: "호남권", lat: 35.7890, lng: 127.1350, isHub: true, desc: "전주 남부 최대 버스 차고지 및 남원/임실/순창 방면 연계" },
  { id: "STOP_JEONBUK_WONKWANG", name: "익산 원광대학교.원대병원 정류장", city: "익산시 신동", region: "호남권", lat: 35.9680, lng: 126.9580, isHub: false, desc: "익산 대학로 및 익산역/터미널/함열 연계 시내버스 (108, 333번)" },
  { id: "STOP_JEONNAM_SUNCHEON_GARDEN", name: "순천만 국가정원.만습지 정류장", city: "순천시 오천동", region: "호남권", lat: 34.9290, lng: 127.5110, isHub: false, desc: "순천만국가정원 및 순천역 연계 시내버스 (66번 등)" },
  { id: "STOP_JEONNAM_YEOSU_ODONGDO", name: "여수 오동도 입구.엑스포공원 정류장", city: "여수시 수정동", region: "호남권", lat: 34.7460, lng: 127.7660, isHub: false, desc: "오동도, 해상케이블카 및 여수엑스포역 연계 시내버스 (2, 999번)" },
  { id: "STOP_JEONNAM_MOKPO_PEACE", name: "목포 평화광장.갓바위 정류장", city: "목포시 상동", region: "호남권", lat: 34.7950, lng: 126.4250, isHub: false, desc: "목포 하당 신도심 및 목포역/터미널 연계 시내버스 (1, 20번)" },

  // 제주도 시내
  { id: "STOP_JEJU_DONGMUN", name: "제주 동문시장.관덕정 정류장", city: "제주시 일도일동", region: "제주도", lat: 33.5130, lng: 126.5270, isHub: false, desc: "제주 구도심 중앙로 및 제주공항 연계 간선버스 (316, 365번)" },
  { id: "STOP_JEJU_JUNGMUN", name: "서귀포 중문관광단지입구 정류장", city: "서귀포시 색달동", region: "제주도", lat: 33.2530, lng: 126.4180, isHub: false, desc: "중문단지 및 서귀포터미널/제주공항 연계 급행·간선버스 (182, 510, 600번)" },
  { id: "STOP_JEJU_SEONGSAN", name: "성산일출봉 입구 정류장", city: "서귀포시 성산읍", region: "제주도", lat: 33.4580, lng: 126.9340, isHub: false, desc: "성산일출봉 및 제주/서귀포 동일주 간선버스 (101, 201번)" }
];

export const REGIONS = [
  { id: "ALL", name: "전국 전체" },
  { id: "수도권", name: "수도권 (서울/경기/인천)" },
  { id: "충청권", name: "충청권 (대전/세종/충남/충북)" },
  { id: "영남권", name: "영남권 (부산/대구/울산/경북/경남)" },
  { id: "호남권", name: "호남권 (광주/전북/전남)" },
  { id: "강원권", name: "강원특별자치도" },
  { id: "제주도", name: "제주특별자치도" }
];

export function findNearestRealBusStop(lat, lng) {
  let minDistanceKm = Infinity;
  let nearestStop = BUS_STOPS[0];

  BUS_STOPS.forEach(stop => {
    const dist = calculateDistanceKm(lat, lng, stop.lat, stop.lng);
    if (dist < minDistanceKm) {
      minDistanceKm = dist;
      nearestStop = stop;
    }
  });

  const distMeters = Math.round(minDistanceKm * 1000);
  const walkMin = Math.max(1, Math.round(distMeters / 70));

  return {
    nearestStop,
    distMeters,
    walkMin,
    formattedText: `🚏 가장 가까운 버스정류장: ${nearestStop.name} (약 ${distMeters}m, 도보 ${walkMin}분)`
  };
}

export function resolveOrCreateStop(input, customCoords = null) {
  if (!input && !customCoords) return null;

  if (typeof input === 'string') {
    const trimmed = input.trim();
    const exactMatch = BUS_STOPS.find(s => s.id === trimmed || s.name === trimmed);
    if (exactMatch) return exactMatch;

    const partialMatch = BUS_STOPS.find(s => s.name.toLowerCase().includes(trimmed.toLowerCase()));
    if (partialMatch) return partialMatch;
  }

  // 1. GPS 지도 핀 선택 시 exact 공간 매칭
  if (customCoords && customCoords.lat && customCoords.lng) {
    const lat = Number(customCoords.lat);
    const lng = Number(customCoords.lng);

    // 인천공항 영종도 핀 선택 시
    if (lat >= 37.430 && lat <= 37.490 && lng >= 126.400 && lng <= 126.480) {
      return BUS_STOPS.find(s => s.id === "STOP_INCHEON_AIRPORT_T2") || BUS_STOPS[0];
    }
    // 구리시 안골로/돌다리 핀 선택 시
    if (lat >= 37.590 && lat <= 37.620 && lng >= 127.120 && lng <= 127.160) {
      return BUS_STOPS.find(s => s.id === "STOP_GYEONGGI_GURI") || BUS_STOPS[0];
    }
    // 세종 수목원/호수공원 핀 선택 시
    if (lat >= 36.485 && lat <= 36.508 && lng >= 127.270 && lng <= 127.290) {
      return BUS_STOPS.find(s => s.id === "STOP_SEJONG_SUMOK") || BUS_STOPS[0];
    }
    // 잠실/종합운동장/야구장 핀 선택 시
    if (lat >= 37.502 && lat <= 37.518 && lng >= 127.065 && lng <= 127.085) {
      return BUS_STOPS.find(s => s.id === "STOP_SEOUL_JAMSIL_STADIUM") || BUS_STOPS[0];
    }

    const nearestInfo = findNearestRealBusStop(lat, lng);
    const name = input || `찍은 위치 (${lat.toFixed(4)}, ${lng.toFixed(4)})`;

    if (nearestInfo.distMeters < 150) {
      return nearestInfo.nearestStop;
    }

    // 전국 모든 버스 정류장 노드 동적 동기화
    return BusRouteAutoUpdater.registerDynamicStopNode({ lat, lng, name }, nearestInfo.nearestStop.city);
  }

  // 2. 키워드 검색 시 정밀 세부 정류소 매핑
  if (typeof input === 'string' && input.trim()) {
    const name = input.trim();

    // 2-1. 인천공항
    if (name.includes("공항") || name.includes("인천공항") || name.includes("T2") || name.includes("제2터미널") || name.includes("고가도로")) {
      return BUS_STOPS.find(s => s.id === "STOP_INCHEON_AIRPORT_T2") || BUS_STOPS[0];
    }

    // 2-2. 구리시 / 안골로 / 돌다리
    if (name.includes("구리") || name.includes("안골로") || name.includes("돌다리") || name.includes("인창")) {
      return BUS_STOPS.find(s => s.id === "STOP_GYEONGGI_GURI") || BUS_STOPS[0];
    }

    // 2-3. 세종 수목원 / 호수공원
    if (name.includes("수목원") || name.includes("호수공원") || name.includes("수목원로")) {
      return BUS_STOPS.find(s => s.id === "STOP_SEJONG_SUMOK") || BUS_STOPS[0];
    }

    // 2-4. 서울 종합운동장 / 잠실야구장 / 나들목
    if (name.includes("종합운동장") || name.includes("야구장") || name.includes("나들목") || name.includes("잠실운동장")) {
      return BUS_STOPS.find(s => s.id === "STOP_SEOUL_JAMSIL_STADIUM") || BUS_STOPS[0];
    }

    // 2-5. 기타 대표 키워드
    if (name.includes("세종충남대") || name.includes("충남대병원")) {
      return BUS_STOPS.find(s => s.id === "STOP_SEJONG_03") || BUS_STOPS[0];
    }
    if (name.includes("잠실역") || name.includes("롯데월드")) {
      return BUS_STOPS.find(s => s.id === "STOP_SEOUL_JAMSIL") || BUS_STOPS[0];
    }

    let approxLat = 37.5665;
    let approxLng = 126.9780;
    let city = name;

    // 세종 / 충청권
    if (name.includes("시흥사거리") || name.includes("시흥동")) { approxLat = 37.4532; approxLng = 126.9038; city = "서울특별시 금천구 시흥동"; }
    else if (name.includes("세종시청") || name.includes("보람동")) { approxLat = 36.4801; approxLng = 127.2890; city = "세종특별자치시 보람동"; }
    else if (name.includes("세종") || name.includes("아름") || name.includes("범지기") || name.includes("한누리대로")) { approxLat = 36.5050; approxLng = 127.2580; city = "세종특별자치시"; }
    else if (name.includes("조치원") || name.includes("오송")) { approxLat = 36.6015; approxLng = 127.2990; city = "세종/청주 오송"; }
    else if (name.includes("공주")) { approxLat = 36.4623; approxLng = 127.1264; city = "충청남도 공주시"; }
    else if (name.includes("청주") || name.includes("상당")) { approxLat = 36.6350; approxLng = 127.4900; city = "충청북도 청주시"; }
    else if (name.includes("증평")) { approxLat = 36.7850; approxLng = 127.5810; city = "충청북도 증평군"; }
    else if (name.includes("음성")) { approxLat = 36.9340; approxLng = 127.6900; city = "충청북도 음성군"; }
    else if (name.includes("충주") || name.includes("주덕")) { approxLat = 36.9804; approxLng = 127.9142; city = "충청북도 충주시"; }
    else if (name.includes("제천") || name.includes("백운") || name.includes("산척")) { approxLat = 37.1326; approxLng = 128.2052; city = "충청북도 제천시"; }
    else if (name.includes("단양") || name.includes("죽령") || name.includes("고수동굴")) { approxLat = 36.9845; approxLng = 128.3655; city = "충청북도 단양군"; }
    else if (name.includes("보은") || name.includes("속리산")) { approxLat = 36.4890; approxLng = 127.7340; city = "충청북도 보은군"; }
    else if (name.includes("옥천")) { approxLat = 36.3060; approxLng = 127.5710; city = "충청북도 옥천군"; }
    else if (name.includes("영동") || name.includes("추풍령")) { approxLat = 36.1750; approxLng = 127.7830; city = "충청북도 영동군"; }
    else if (name.includes("괴산")) { approxLat = 36.8150; approxLng = 127.7860; city = "충청북도 괴산군"; }

    // 경북 내륙 / 동해안
    else if (name.includes("청송") || name.includes("주왕산") || name.includes("상의리") || name.includes("달기약수")) { approxLat = 36.4020; approxLng = 129.1350; city = "경상북도 청송군"; }
    else if (name.includes("영주") || name.includes("풍기") || name.includes("소수서원")) { approxLat = 36.8057; approxLng = 128.6241; city = "경상북도 영주시"; }
    else if (name.includes("안동") || name.includes("하회마을") || name.includes("도산서원") || name.includes("길안")) { approxLat = 36.5684; approxLng = 128.7294; city = "경상북도 안동시"; }
    else if (name.includes("봉화") || name.includes("춘양") || name.includes("석포")) { approxLat = 36.8930; approxLng = 128.7320; city = "경상북도 봉화군"; }
    else if (name.includes("영양")) { approxLat = 36.6660; approxLng = 129.1120; city = "경상북도 영양군"; }
    else if (name.includes("영덕") || name.includes("강구") || name.includes("축산")) { approxLat = 36.4150; approxLng = 129.3650; city = "경상북도 영덕군"; }
    else if (name.includes("울진") || name.includes("후포") || name.includes("죽변")) { approxLat = 36.9930; approxLng = 129.4000; city = "경상북도 울진군"; }
    else if (name.includes("의성")) { approxLat = 36.3525; approxLng = 128.6970; city = "경상북도 의성군"; }
    else if (name.includes("군위")) { approxLat = 36.2420; approxLng = 128.5720; city = "대구광역시 군위군"; }
    else if (name.includes("김천")) { approxLat = 36.1398; approxLng = 128.1136; city = "경상북도 김천시"; }
    else if (name.includes("구미")) { approxLat = 36.1195; approxLng = 128.3444; city = "경상북도 구미시"; }
    else if (name.includes("포항")) { approxLat = 36.0124; approxLng = 129.3512; city = "경상북도 포항시"; }
    else if (name.includes("경주")) { approxLat = 35.8562; approxLng = 129.2247; city = "경상북도 경주시"; }

    // 강원권
    else if (name.includes("태백") || name.includes("황지") || name.includes("통리")) { approxLat = 37.1640; approxLng = 128.9850; city = "강원특별자치도 태백시"; }
    else if (name.includes("삼척") || name.includes("도계") || name.includes("임원")) { approxLat = 37.4498; approxLng = 129.1652; city = "강원특별자치도 삼척시"; }
    else if (name.includes("동해") || name.includes("묵호") || name.includes("추암")) { approxLat = 37.5247; approxLng = 129.1143; city = "강원특별자치도 동해시"; }
    else if (name.includes("강릉") || name.includes("주문진") || name.includes("정동진") || name.includes("안목")) { approxLat = 37.7519; approxLng = 128.8761; city = "강원특별자치도 강릉시"; }
    else if (name.includes("속초")) { approxLat = 38.2070; approxLng = 128.5918; city = "강원특별자치도 속초시"; }
    else if (name.includes("고성") && (name.includes("강원") || name.includes("간성") || name.includes("거진") || name.includes("통일전망대"))) { approxLat = 38.3800; approxLng = 128.4670; city = "강원특별자치도 고성군"; }
    else if (name.includes("양양")) { approxLat = 38.0754; approxLng = 128.6189; city = "강원특별자치도 양양군"; }
    else if (name.includes("원주")) { approxLat = 37.3441; approxLng = 127.9304; city = "강원특별자치도 원주시"; }
    else if (name.includes("춘천")) { approxLat = 37.8813; approxLng = 127.7298; city = "강원특별자치도 춘천시"; }
    else if (name.includes("정선") || name.includes("사북") || name.includes("고한")) { approxLat = 37.3800; approxLng = 128.6600; city = "강원특별자치도 정선군"; }
    else if (name.includes("영월")) { approxLat = 37.1830; approxLng = 128.4610; city = "강원특별자치도 영월군"; }
    else if (name.includes("평창") || name.includes("대관령") || name.includes("진부")) { approxLat = 37.3700; approxLng = 128.3900; city = "강원특별자치도 평창군"; }
    else if (name.includes("홍천")) { approxLat = 37.6970; approxLng = 127.8880; city = "강원특별자치도 홍천군"; }
    else if (name.includes("인제") || name.includes("원통")) { approxLat = 38.0690; approxLng = 128.1700; city = "강원특별자치도 인제군"; }

    // 경남 / 호남 / 수도권
    else if (name.includes("창원") || name.includes("마산") || name.includes("진해")) { approxLat = 35.2361; approxLng = 128.6558; city = "경상남도 창원시"; }
    else if (name.includes("진주")) { approxLat = 35.1872; approxLng = 128.0881; city = "경상남도 진주시"; }
    else if (name.includes("통영")) { approxLat = 34.8540; approxLng = 128.4330; city = "경상남도 통영시"; }
    else if (name.includes("거제")) { approxLat = 34.8800; approxLng = 128.6210; city = "경상남도 거제시"; }
    else if (name.includes("사천") || name.includes("삼천포")) { approxLat = 35.0030; approxLng = 128.0640; city = "경상남도 사천시"; }
    else if (name.includes("거창")) { approxLat = 35.6860; approxLng = 127.9090; city = "경상남도 거창군"; }
    else if (name.includes("함양")) { approxLat = 35.5200; approxLng = 127.7250; city = "경상남도 함양군"; }
    else if (name.includes("산청")) { approxLat = 35.4150; approxLng = 127.8730; city = "경상남도 산청군"; }
    else if (name.includes("합천")) { approxLat = 35.5660; approxLng = 128.1650; city = "경상남도 합천군"; }
    else if (name.includes("남해")) { approxLat = 34.8370; approxLng = 127.8920; city = "경상남도 남해군"; }
    else if (name.includes("하동")) { approxLat = 35.0670; approxLng = 127.7510; city = "경상남도 하동군"; }
    else if (name.includes("순천")) { approxLat = 34.9458; approxLng = 127.5032; city = "전라남도 순천시"; }
    else if (name.includes("여수")) { approxLat = 34.7604; approxLng = 127.6622; city = "전라남도 여수시"; }
    else if (name.includes("목포")) { approxLat = 34.8118; approxLng = 126.3922; city = "전라남도 목포시"; }
    else if (name.includes("광주")) { approxLat = 35.1595; approxLng = 126.8526; city = "광주광역시"; }
    else if (name.includes("전주")) { approxLat = 35.8242; approxLng = 127.1480; city = "전북특별자치도 전주시"; }
    else if (name.includes("익산")) { approxLat = 35.9483; approxLng = 126.9576; city = "전북특별자치도 익산시"; }
    else if (name.includes("군산")) { approxLat = 35.9676; approxLng = 126.7366; city = "전북특별자치도 군산시"; }
    else if (name.includes("부산")) { approxLat = 35.1796; approxLng = 129.0756; city = "부산광역시"; }
    else if (name.includes("대구")) { approxLat = 35.8714; approxLng = 128.6014; city = "대구광역시"; }
    else if (name.includes("대전")) { approxLat = 36.3504; approxLng = 127.3845; city = "대전광역시"; }
    else if (name.includes("울산")) { approxLat = 35.5384; approxLng = 129.3114; city = "울산광역시"; }
    else if (name.includes("인천")) { approxLat = 37.4563; approxLng = 126.7052; city = "인천광역시"; }
    else if (name.includes("수원")) { approxLat = 37.2636; approxLng = 127.0286; city = "경기도 수원시"; }
    else if (name.includes("평택")) { approxLat = 36.9921; approxLng = 127.1129; city = "경기도 평택시"; }
    else if (name.includes("천안")) { approxLat = 36.8151; approxLng = 127.1139; city = "충청남도 천안시"; }
    else if (name.includes("제주")) { approxLat = 33.4996; approxLng = 126.5312; city = "제주특별자치도"; }

    return BusRouteAutoUpdater.registerDynamicStopNode({ lat: approxLat, lng: approxLng, name }, city);
  }

  return null;
}
