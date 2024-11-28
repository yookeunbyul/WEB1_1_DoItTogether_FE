import { create } from 'zustand';

interface HomePageState {
  groupName: string;
  setGroupName: (groupName: string) => void;

  isGroupSelectSheetOpen: boolean;
  setIsGroupSelectSheetOpen: (isOpen: boolean) => void;

  groups: Array<string>;
  setGroups: (groups: Array<string>) => void;

  weekText: string;
  setWeekText: (weekText: string) => void;
}

const useHomePageStore = create<HomePageState>(set => ({
  groupName: '기본 그룹명',
  setGroupName: name => set({ groupName: name }),

  isGroupSelectSheetOpen: false,
  setIsGroupSelectSheetOpen: isOpen => set({ isGroupSelectSheetOpen: isOpen }),

  groups: ['기본 그룹명'],
  setGroups: groups => set({ groups: groups }),

  weekText: '',
  setWeekText: weekText => set({ weekText: weekText }),
}));

export default useHomePageStore;
