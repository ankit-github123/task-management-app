"use client";

import React from "react";
import { useTodoStore } from "../../store/taskListStore";
import { useModalStore } from "../../store/taskModalStore";
import { useTaskStore } from "../../store/taskStore";
import { Task } from "../../types";
import AddTaskModal from "../modals/AddTaskModal";
import TaskCard from "./TaskCard";
import TaskListPanel from "./TaskListPanel";
import { toast } from "sonner";
import { BiSearchAlt2, BiX } from "react-icons/bi";
export default function TaskBoard() {
  const { tasks, filters, addTodo, deleteTodo, updateTodo } = useTodoStore();
  const { setTask, clearTask } = useTaskStore();
  const { type, setOpen, setType, resetModal } = useModalStore();

  const filteredTodos = React.useMemo(() => {
    console.log(tasks, filters, "tasks yoyo");
    return tasks.filter((todo) => {
      const matchesStatus = filters.status !== "all" ? todo.status === filters.status : true;
      const matchesPriority = filters.priority !== "all" ? todo.priority === filters.priority : true;
      const matchesSearch = filters.search ? todo.title.toLowerCase().includes(filters.search.toLowerCase()) : true;
      return matchesStatus && matchesPriority && matchesSearch;
    });
  }, [tasks, filters]);

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
        {filteredTodos.map((task) => (
          <TaskCard key={task.id} task={task as Task} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
        {filteredTodos.length === 0 && (
          <div className="relative w-full h-[60vh] flex items-center justify-center">
            <div>
              <BiSearchAlt2 size={32} className="text-gray-700" />
            </div>
            <div>
              <BiX size={10} className="text-white" />
            </div>
          </div>
        )}
      </TaskListPanel>
      {/*  @ts-ignore */}
      <AddTaskModal onSubmit={handleSubmit} handleClear={handleClear} />
    </>
  );
}
