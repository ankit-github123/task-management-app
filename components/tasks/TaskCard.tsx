import { Task } from "../../types";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div
      className="
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
      <h3 className="text-xl font-bold mb-3 text-green-900">{task.title}</h3>

      <p className="text-sm text-primary mb-1">
        <span className="font-semibold">Status:</span> <span className="capitalize">{task.status}</span>
      </p>

      <p className="text-sm text-primary mb-1">
        <span className="font-semibold">Priority:</span> <span className="capitalize">{task.priority}</span>
      </p>

      {task.dueDate && (
        <p className="text-sm text-primary mb-1">
          <span className="font-semibold">Due Date:</span> {new Date(task.dueDate).toLocaleDateString()}
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
