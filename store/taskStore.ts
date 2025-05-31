import { create } from "zustand";
import { Task } from "../types";

type TaskStore = {
  task: Task;
  setTask: (task: Task) => void;
  clearTask: () => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  task: {
    id: "",
    title: "",
    status: undefined,
    priority: undefined,
    dueDate: "",
    assignee: "",
    description: "",
  },
  setTask: (task) => set({ task }),
  clearTask: () =>
    set({
      task: { id: "", title: "", status: undefined, priority: undefined, dueDate: "", assignee: "", description: "" },
    }),
}));
