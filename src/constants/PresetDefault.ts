import { Category } from '@/constants/Category';

export const PresetDefault = [
  {
    category: Category.LIVING_ROOM,
    items: [
      { id: 101, description: '정리정돈' },
      { id: 102, description: '쓰레기통 비우기' },
      { id: 103, description: '먼지 닦기' },
      { id: 104, description: '진공청소기 돌리기' },
      { id: 105, description: '바닥 걸레질' },
      { id: 106, description: '창문 청소' },
      { id: 107, description: '카펫 및 러그 청소' },
    ],
  },
  {
    category: Category.BED_ROOM,
    items: [
      { id: 201, description: '침구 정리' },
      { id: 202, description: '진공청소기 돌리기' },
      { id: 203, description: '바닥 걸레질' },
      { id: 204, description: '침구 교체' },
      { id: 205, description: '옷장 정리' },
      { id: 206, description: '창문 청소' },
      { id: 207, description: '매트리스 청소' },
    ],
  },
  {
    category: Category.KITCHEN,
    items: [
      { id: 301, description: '설거지' },
      { id: 302, description: '조리대 및 싱크대 닦기' },
      { id: 303, description: '쓰레기통 비우기' },
      { id: 304, description: '냉장고 정리' },
      { id: 305, description: '오븐 및 전자레인지 청소' },
      { id: 306, description: '바닥 진공청소기 및 걸레질' },
      { id: 307, description: '찬장 및 서랍 정리' },
      { id: 308, description: '환풍기 필터 청소' },
    ],
  },
  {
    category: Category.BATH_ROOM,
    items: [
      { id: 401, description: '세면대 및 거울 닦기' },
      { id: 402, description: '변기 청소' },
      { id: 403, description: '샤워기 및 욕조 물기 닦기' },
      { id: 404, description: '바닥 및 타일 청소' },
      { id: 405, description: '샤워 커튼 및 욕조 청소' },
      { id: 406, description: '휴지통 비우기' },
      { id: 407, description: '배수구 청소' },
      { id: 408, description: '환풍기 필터 청소' },
    ],
  },
  {
    category: Category.ETC,
    items: [
      { id: 501, description: '쓰레기 분리수거' },
      { id: 502, description: '강아지 산책' },
      { id: 503, description: '화분 물 주기' },
      { id: 504, description: '자동차 세차' },
    ],
  },
];
