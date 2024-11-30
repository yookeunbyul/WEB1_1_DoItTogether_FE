import { create } from 'zustand';
import { Category, PresetTabName } from '@/constants';

interface Category {
  presetCategoryId: number;
  category: string;
}

interface PresetState {
  // 카테고리 리스트
  categoryList: Category[];
  setCategoryList: (categories: Category[]) => void;
  // 활성화 탭 (사용자정의 | 프리셋)
  activeTab: string;
  setActiveTab: (activeTab: string | ((prevState: string) => string)) => void;
  // input 값
  inputVal: string;
  setInputVal: (inputVal: string) => void;
  // input 활성화 카테고리
  activeInputCate: string;
  setActiveInputCate: (activeInputTab: string) => void;
  // input 활성화 카테고리 id
  activeInputCateId: number;
  setActiveInputCateId: (activeInputTabId: number) => void;
  // 삭제버튼
  deleteButtonStates: Record<number, boolean>;
  setDeleteButtonStates: (
    updateFn: (prevState: Record<number, boolean>) => Record<number, boolean>
  ) => void;
}

const usePresetSettingStore = create<PresetState>(set => ({
  categoryList: [],
  setCategoryList: categoryList => set({ categoryList }),
  activeTab: PresetTabName.PRESET_DATA,
  // TODO 공통 Tab컴포넌트 Props 타입을 맞추기위함으로 불필요하다면 Tab컴포넌트 Props 변경필요
  setActiveTab: activeTab =>
    set(state => ({
      activeTab: typeof activeTab === 'function' ? activeTab(state.activeTab) : activeTab,
    })),
  inputVal: '',
  setInputVal: inputVal => set({ inputVal }),
  activeInputCate: '',
  setActiveInputCate: activeInputCate => set({ activeInputCate }),
  activeInputCateId: 0,
  setActiveInputCateId: activeInputCateId => set({ activeInputCateId }),
  deleteButtonStates: {},
  setDeleteButtonStates: updateFn =>
    set(state => ({ deleteButtonStates: updateFn(state.deleteButtonStates) })),
}));

export default usePresetSettingStore;
