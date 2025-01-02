import { Housework } from '@/types/apis/houseworkApi';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AddHouseWorkState {
  userId: number | null;
  selectedItem: number | null;
  selectedDate: Date | undefined;
  nickname: string;
  targetHousework: Housework | undefined;
}

interface AddHouseWorkActions {
  setUserId: (id: number | null) => void;
  setSelectedItem: (itemId: number | null) => void;
  setSelectedDate: (date: Date | undefined) => void;
  setNickName: (nickname: string) => void;
  setTargetHousework: (targetHousework: Housework | undefined) => void;
  reset: () => void;
}

const initialState: AddHouseWorkState = {
  userId: null,
  selectedItem: null,
  selectedDate: undefined,
  nickname: '',
  targetHousework: undefined,
};

type State = AddHouseWorkState & AddHouseWorkActions;
type PersistedState = Pick<AddHouseWorkState, 'targetHousework'>;

const useAddHouseWorkStore = create<State>()(
  persist(
    set => ({
      ...initialState,
      setUserId: userId => set({ userId }),
      setSelectedItem: selectedItem => set({ selectedItem }),
      setSelectedDate: selectedDate => set({ selectedDate }),
      setNickName: nickname => set({ nickname }),
      setTargetHousework: targetHousework => set({ targetHousework }),
      reset: () => set(initialState),
    }),
    {
      name: 'housework-storage',
      partialize: (state): PersistedState => ({
        targetHousework: state.targetHousework,
      }),
    }
  )
);

export default useAddHouseWorkStore;
