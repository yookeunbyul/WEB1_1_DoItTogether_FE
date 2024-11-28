import { create } from 'zustand';

interface HomePageState {
  groupName: string;
  setGroupName: (groupName: string) => void;
}

const useHomePageStore = create<HomePageState>(set => ({
  groupName: '기본 그룹명',
  setGroupName: name => set({ groupName: name }),
}));

export default useHomePageStore;
