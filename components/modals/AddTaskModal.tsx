"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useModalStore } from "../../store/taskModalStore";
import TaskFormFields from "../fields/TaskFormFields";
import { TaskSchema, TaskFormData } from "../../schema/TaskFormSchema";
import { useTaskStore } from "../../store/taskStore";
import { useEffect, useState } from "react";

interface AddTaskModalProps {
  onSubmit: (task: TaskFormData) => void;
  handleClear?: () => void;
}

export default function AddTaskModal({ onSubmit, handleClear }: AddTaskModalProps) {
  const { open, type } = useModalStore();
  const { task } = useTaskStore();
  const [currTask, setCurrTask] = useState(task);
  useEffect(() => {
    if (task) {
      console.log(task, "task");
      setCurrTask(task);
      reset(task);
    }
  }, [task]);

  const formMethods = useForm<TaskFormData>({
    resolver: zodResolver(TaskSchema),
    defaultValues: currTask,
  });

  const { handleSubmit, reset } = formMethods;

  const handleFormSubmit = (data: TaskFormData) => {
    console.log(data, "Form Data");
    onSubmit(data);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleClear}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>

        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <TaskFormFields />

            <DialogFooter>
              <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full">
                {type === "CREATE" ? "Add" : "Update"} Task
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
