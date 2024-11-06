import { create } from "zustand";

interface MintState {
  isSuccessful: boolean | null;
  isExpanded: boolean;
  setState: (newState: Partial<MintState>) => void;
  resetState: () => void;
}

export const initialState: Omit<MintState, "setState" | "resetState"> = {
  isSuccessful: null,
  isExpanded: false,
};

export const useMintStore = create<MintState>()((set) => ({
  ...initialState,
  setState: (newState) => set(() => newState),
  resetState: () => set(() => initialState),
}));
