import { z } from "zod";

export const TaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  status: z.string().min(1, "Status is required"),
  priority: z.string().min(1, "Priority is required"),
  dueDate: z.string().optional(),
  assignee: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
});

export type TaskFormData = z.infer<typeof TaskSchema>;
