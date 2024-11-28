import { create } from 'zustand';

interface HomePageState {
  groupName: string;
  setGroupName: (groupName: string) => void;

  isGroupSelectSheetOpen: boolean;
  setIsGroupSelectSheetOpen: (isOpen: boolean) => void;
}

const useHomePageStore = create<HomePageState>(set => ({
  groupName: '기본 그룹명',
  setGroupName: name => set({ groupName: name }),

  isGroupSelectSheetOpen: false,
  setIsGroupSelectSheetOpen: isOpen => set({ isGroupSelectSheetOpen: isOpen }),
}));

export default useHomePageStore;
