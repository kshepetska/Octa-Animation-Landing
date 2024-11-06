import { create } from "zustand";

interface State {
  currentPhoneScreen: number;
  bgColor: string;
  textColor: string;
  transitionDurationMs: number;
  setPhoneScreen: (newPhoneScreen: number) => void;
  setBgColor: (newBgColor: string) => void;
  setTextColor: (newTextColor: string) => void;
  setTransitionDurationMs: (newTransitionDurationMs: number) => void;

  isMintPageOpen: boolean;
  setIsMintPageOpen: (newIsMintPageOpen: boolean) => void;
}

export const useStore = create<State>()((set) => ({
  currentPhoneScreen: 0,
  bgColor: "var(--default-bg)",
  textColor: "var(--default-text)",
  transitionDurationMs: 1000,
  setPhoneScreen: (newPhoneScreen) =>
    set(() => ({ currentPhoneScreen: newPhoneScreen })),
  setBgColor: (newBgColor) => set(() => ({ bgColor: newBgColor })),
  setTextColor: (newTextColor) => set(() => ({ textColor: newTextColor })),
  setTransitionDurationMs: (newTransitionDurationMs) =>
    set(() => ({ transitionDurationMs: newTransitionDurationMs })),

  isMintPageOpen: false,
  setIsMintPageOpen: (newIsMintPageOpen) =>
    set(() => ({ isMintPageOpen: newIsMintPageOpen })),
}));
