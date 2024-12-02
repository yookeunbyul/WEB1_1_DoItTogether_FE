import { create } from 'zustand';

interface TotalCountData {
  /** 완료 개수 */
  completeCount: number;
  /** 미완료 개수 */
  notCompleteCount: number;
  /** 칭찬 개수 */
  complimentCount: number;
  /** 찌르기 개수 */
  pokeCount: number;
}

interface WeeklyState {
  /** 선택 날짜 */
  currentDate: Date;
  setCurrentDate: (updater: (prevDate: Date) => Date) => void;
  /** 완료, 미완료, 칭찬, 찌르기 카운트 데이터 */
  totalCountData: TotalCountData;
  setTotalCountData: (data: TotalCountData) => void;
}

const useWeeklyStateStore = create<WeeklyState>(set => ({
  currentDate: new Date(),
  setCurrentDate: updater => set(state => ({ currentDate: updater(state.currentDate) })),
  totalCountData: {
    completeCount: 0,
    notCompleteCount: 0,
    complimentCount: 0,
    pokeCount: 0,
  },
  setTotalCountData: data => set(() => ({ totalCountData: data })),
}));

export default useWeeklyStateStore;
