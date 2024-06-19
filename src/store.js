import { create } from "zustand";

const useStore = create((set) => ({
  Ref: null,
  setRef: (ref) => set({ Ref: ref }),
}));

export default useStore;
