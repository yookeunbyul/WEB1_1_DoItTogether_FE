import { SelectedTime } from '@/pages/HouseWorkStepOnePage';
import { create } from 'zustand';

interface AddHouseWorkState {
  isAllday: boolean;
  category: string;
  task: string;
  startDate: string;
  startTime: SelectedTime | null;
  assigneeId: number | null;
}

interface AddHouseWorkActions {
  setIsAllday: (value: boolean) => void;
  setCategory: (category: string) => void;
  setTask: (task: string) => void;
  setStartDate: (date: string) => void;
  setStartTime: (time: SelectedTime | null) => void;
  setAssigneeId: (id: number | null) => void;
  reset: () => void;
}

const initialState: AddHouseWorkState = {
  isAllday: true,
  category: '',
  task: '',
  startDate: '',
  startTime: null,
  assigneeId: null,
};

const useAddHouseWorkStore = create<AddHouseWorkState & AddHouseWorkActions>(set => ({
  ...initialState,

  setIsAllday: isAllday => set({ isAllday }),
  setCategory: category => set({ category }),
  setTask: task => set({ task }),
  setStartDate: startDate => set({ startDate }),
  setStartTime: startTime => set({ startTime }),
  setAssigneeId: assigneeId => set({ assigneeId }),
  reset: () => set(initialState),
}));

export default useAddHouseWorkStore;
