import { create } from "zustand";

type ModalStore = {
  open: boolean;
  type: "CREATE" | "EDIT";
  setType: (type: "CREATE" | "EDIT") => void;
  setOpen: (open: boolean) => void;
  resetModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  open: false,
  type: "CREATE",
  setType: (type) => set({ type }),
  setOpen: (open) => set({ open }),
  resetModal: () => set({ open: false, type: "CREATE" }),
}));
