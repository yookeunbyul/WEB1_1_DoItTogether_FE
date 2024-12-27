import { SelectedTime } from '@/hooks/useAddHouseWork';
import { create } from 'zustand';

interface AddHouseWorkState {
  isAllday: boolean;
  category: string;
  task: string;
  startDate: string;
  startTime: SelectedTime | null;
  userId: number | null;
  selectedItem: number | null;
  selectedDate: Date | undefined;
}

interface AddHouseWorkActions {
  setIsAllday: (value: boolean) => void;
  setCategory: (category: string) => void;
  setTask: (task: string) => void;
  setStartDate: (date: string) => void;
  setStartTime: (time: SelectedTime | null) => void;
  setUserId: (id: number | null) => void;
  setSelectedItem: (itemId: number | null) => void;
  setSelectedDate: (date: Date | undefined) => void;
  reset: () => void;
}

const initialState: AddHouseWorkState = {
  isAllday: true,
  category: '',
  task: '',
  startDate: '',
  startTime: null,
  userId: null,
  selectedItem: null,
  selectedDate: undefined,
};

const useAddHouseWorkStore = create<AddHouseWorkState & AddHouseWorkActions>(set => ({
  ...initialState,

  setIsAllday: isAllday => set({ isAllday }),
  setCategory: category => set({ category }),
  setTask: task => set({ task }),
  setStartDate: startDate => set({ startDate }),
  setStartTime: startTime => set({ startTime }),
  setUserId: userId => set({ userId }),
  setSelectedItem: selectedItem => set({ selectedItem }),
  setSelectedDate: selectedDate => set({ selectedDate }),
  reset: () => set(initialState),
}));

export default useAddHouseWorkStore;
