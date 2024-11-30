import { create } from 'zustand';

interface Category {
  presetCategoryId: number;
  category: string;
}

interface PresetState {
  categoryList: Category[];
  setCategoryList: (categories: Category[]) => void;
}

const usePresetSettingStore = create<PresetState>(set => ({
  categoryList: [],
  setCategoryList: categoryList => set({ categoryList }),
}));

export default usePresetSettingStore;
