import { create } from 'zustand';

interface AddHouseWorkState {
  isAllday: boolean;
  userId: number | null;
  selectedItem: number | null;
  selectedDate: Date | undefined;
}

interface AddHouseWorkActions {
  setIsAllday: (value: boolean) => void;
  setUserId: (id: number | null) => void;
  setSelectedItem: (itemId: number | null) => void;
  setSelectedDate: (date: Date | undefined) => void;
  reset: () => void;
}

const initialState: AddHouseWorkState = {
  isAllday: true,
  userId: null,
  selectedItem: null,
  selectedDate: undefined,
};

const useAddHouseWorkStore = create<AddHouseWorkState & AddHouseWorkActions>(set => ({
  ...initialState,

  setIsAllday: isAllday => set({ isAllday }),
  setUserId: userId => set({ userId }),
  setSelectedItem: selectedItem => set({ selectedItem }),
  setSelectedDate: selectedDate => set({ selectedDate }),
  reset: () => set(initialState),
}));

export default useAddHouseWorkStore;
