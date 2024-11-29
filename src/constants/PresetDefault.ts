import { Category } from '@/constants/Category';

export const PresetDefault = [
  {
    category: Category.LIVING_ROOM,
    items: [
      { id: 1, description: '정리정돈' },
      { id: 2, description: '쓰레기통 비우기' },
      { id: 3, description: '먼지 닦기' },
      { id: 4, description: '진공청소기 돌리기' },
      { id: 5, description: '바닥 걸레질' },
      { id: 6, description: '창문 청소' },
      { id: 7, description: '카펫 및 러그 청소' },
    ],
  },
  {
    category: Category.BED_ROOM,
    items: [
      { id: 1, description: '침구 정리' },
      { id: 2, description: '진공청소기 돌리기' },
      { id: 3, description: '바닥 걸레질' },
      { id: 4, description: '침구 교체' },
      { id: 5, description: '옷장 정리' },
      { id: 6, description: '창문 청소' },
      { id: 7, description: '매트리스 청소' },
    ],
  },
  {
    category: Category.KITCHEN,
    items: [
      { id: 1, description: '설거지' },
      { id: 2, description: '조리대 및 싱크대 닦기' },
      { id: 3, description: '쓰레기통 비우기' },
      { id: 4, description: '냉장고 정리' },
      { id: 5, description: '오븐 및 전자레인지 청소' },
      { id: 6, description: '바닥 진공청소기 및 걸레질' },
      { id: 7, description: '찬장 및 서랍 정리' },
      { id: 8, description: '환풍기 필터 청소' },
    ],
  },
  {
    category: Category.BATH_ROOM,
    items: [
      { id: 1, description: '세면대 및 거울 닦기' },
      { id: 2, description: '변기 청소' },
      { id: 3, description: '샤워기 및 욕조 물기 닦기' },
      { id: 4, description: '바닥 및 타일 청소' },
      { id: 5, description: '샤워 커튼 및 욕조 청소' },
      { id: 6, description: '휴지통 비우기' },
      { id: 7, description: '배수구 청소' },
      { id: 8, description: '환풍기 필터 청소' },
    ],
  },
  {
    category: Category.ETC,
    items: [
      { id: 1, description: '쓰레기 분리수거' },
      { id: 2, description: '강아지 산책' },
      { id: 3, description: '화분 물 주기' },
      { id: 4, description: '자동차 세차' },
    ],
  },
];
