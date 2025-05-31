"use client";

import { useTodoStore } from "../../store/taskListStore";
import { useModalStore } from "../../store/taskModalStore";
import { useTaskStore } from "../../store/taskStore";
import { Task } from "../../types";
import AddTaskModal from "../modals/AddTaskModal";
import TaskCard from "./TaskCard";
import TaskListPanel from "./TaskListPanel";
import { toast } from "sonner";
export default function TaskBoard() {
  const { tasks, addTodo, deleteTodo, updateTodo } = useTodoStore();
  const { setTask, clearTask } = useTaskStore();
  const { type, setOpen, setType, resetModal } = useModalStore();

  const styles = `!bg-white !text-green-900 !border !border-green-600 !shadow-xl !backdrop-blur-md !text-base !font-bold !font-main !rounded-xl !px-4 !py-3
`;

  const handleClear = () => {
    setOpen(false);
    clearTask();
    resetModal();
  };
  const handleSubmit = (data: Task) => {
    console.log(data, "handlesubmit");
    type === "CREATE" ? addTodo(data) : updateTodo(data.id, data);
    handleClear();
    toast.success(`Task ${type === "CREATE" ? "added" : "updated"} successfully!`, {
      className: styles,
    });
  };

  const handleDelete = (task: Task) => {
    deleteTodo(task.id);
    toast.success("Task deleted successfully!", {
      className: styles,
    });
  };

  const handleEdit = (task: Task) => {
    setTask(task);
    setType("EDIT");
    setOpen(true);
  };
  return (
    <>
      <TaskListPanel>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task as Task} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </TaskListPanel>
      {/*  @ts-ignore */}
      <AddTaskModal onSubmit={handleSubmit} handleClear={handleClear} />
    </>
  );
}
