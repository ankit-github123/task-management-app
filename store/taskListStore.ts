import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../types";
import { TASK_LIST } from "../mock";

type TaskStore = {
  tasks: Task[];
  addTodo: (todo: Omit<Task, "id">) => void;
  updateTodo: (id: string, updatedFields: Partial<Omit<Task, "id">>) => void;
  deleteTodo: (id: string) => void;
};

export const useTodoStore = create<TaskStore>((set) => ({
  tasks: TASK_LIST as Task[],

  addTodo: (todo) =>
    set((state) => ({
      tasks: [...state.tasks, { id: uuidv4(), ...todo }],
    })),

  updateTodo: (id, updatedFields) =>
    set((state) => ({
      tasks: state.tasks.map((todo) => (todo.id === id ? { ...todo, ...updatedFields } : todo)),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((todo) => todo.id !== id),
    })),
}));
