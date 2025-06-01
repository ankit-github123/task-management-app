export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "To Do" | "In Progress" | "Done" | undefined;
  priority: "Low" | "Medium" | "High" | undefined;
  dueDate?: string;
  assignee?: string;
}

export interface Filter {
  priority?: "Low" | "Medium" | "High" | "all";
  status?: "To Do" | "In Progress" | "Done" | "all";
  search?: string;
}

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  [key: string]: any;
}
