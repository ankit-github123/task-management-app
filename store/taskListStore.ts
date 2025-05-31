import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Filter, Task } from "../types";
import { TASK_LIST } from "../mock";

type TaskStore = {
  tasks: Task[];
  addTodo: (todo: Omit<Task, "id">) => void;
  updateTodo: (id: string, updatedFields: Partial<Omit<Task, "id">>) => void;
  deleteTodo: (id: string) => void;
  filters: Filter;
  setFilter: (key: keyof Filter, value: string) => void;
  filteredTasks: () => Task[];
  resetFilters: () => void;
};

export const useTodoStore = create<TaskStore>((set, get) => ({
  tasks: TASK_LIST as Task[],
  filters: {
    priority: "all",
    status: "all",
    search: "",
  },
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
  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),

  filteredTasks: () => {
    const { tasks, filters } = get();
    return tasks.filter((task) => {
      const matchesStatus = filters.status ? task.status === filters.status : true;
      const matchesPriority = filters.priority ? task.priority === filters.priority : true;
      return matchesStatus && matchesPriority;
    });
  },
  resetFilters: () =>
    set(() => ({
      filters: {
        priority: "all",
        status: "all",
        search: "",
      },
    })),
}));
