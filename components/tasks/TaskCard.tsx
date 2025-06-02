"use client";
import { Task } from "../../types";
import { Pencil, Trash2, ArrowDownCircle, Circle, AlertTriangle, ArrowUp, ArrowDown, Minus } from "lucide-react";

type TaskCardProps = {
  task: Task;
  onEdit?: (task: Task) => void;
  onDelete?: (task: Task) => void;
};

const getPriorityIcon = (priority: Task["priority"]) => {
  switch (priority) {
    case "Low":
      return <ArrowDown className="text-blue-500" size={16} />;
    case "Medium":
      return <Minus className="text-yellow-500" size={16} />;
    case "High":
      return <ArrowUp className="text-red-500" size={16} />;
    default:
      return null;
  }
};

const TaskCard = ({ task, onEdit, onDelete }: TaskCardProps) => {
  return (
    <div
      className="
        group
        relative
        bg-white/80 
        backdrop-blur-md
        shadow-lg 
        rounded-2xl 
        p-5 
        w-full 
        max-w-sm 
        border 
        border-green-300
        hover:shadow-green-400/50
        transition-shadow duration-300
      "
    >
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
        <button onClick={() => onEdit?.(task)} className="text-green-700 hover:text-green-900" title="Edit">
          <Pencil size={18} />
        </button>
        <button onClick={() => onDelete?.(task)} className="text-red-600 hover:text-red-800" title="Delete">
          <Trash2 size={18} />
        </button>
      </div>

      <h3 className="text-xl font-bold mb-3 text-green-900">{task.title}</h3>

      <p className="text-sm text-primary mb-1">
        <span className="font-semibold">Status:</span> <span className="capitalize">{task.status}</span>
      </p>

      <p className="text-sm text-primary mb-1 flex items-center gap-1">
        <span className="font-semibold">Priority:</span>
        <span className="capitalize">{task.priority}</span>
        {getPriorityIcon(task.priority)}
      </p>

      {task.dueDate && (
        <p className="text-sm text-primary mb-1">
          <span className="font-semibold">Due Date:</span> {task.dueDate}
        </p>
      )}

      {task.assignee && (
        <p className="text-sm text-primary mb-1">
          <span className="font-semibold">Assignee:</span> {task.assignee}
        </p>
      )}

      {task.description && (
        <p className="text-sm text-green-700 mt-3 line-clamp-3">
          <span className="font-semibold">Description:</span> {task.description}
        </p>
      )}
    </div>
  );
};

export default TaskCard;
