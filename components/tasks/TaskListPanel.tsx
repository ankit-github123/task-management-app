import { FC, ReactNode } from "react";
import { useModalStore } from "../../store/taskModalStore";
import TaskFilters from "./TaskFilters";
import { ChefHat } from "lucide-react";
import Link from "next/link";

type TaskListPanelProps = {
  children: ReactNode;
};

const TaskListPanel = ({ children }: TaskListPanelProps) => {
  const { setOpen } = useModalStore();
  const onAddTask = () => {
    console.log("Add Task button clicked");
    setOpen(true);
  };
  return (
    <div>
      <div className="max-w-5xl mx-auto relative">
        <div className="">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-green-900">Your Tasks</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={onAddTask}
                className="
      bg-green-500 hover:bg-green-600 text-white cursor-pointer font-semibold py-2 px-5 rounded-xl shadow-md transition duration-300"
              >
                + Add Task
              </button>

              <Link
                href="/recipe"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
              >
                <ChefHat className="w-5 h-5" />
                Recipes
              </Link>
            </div>
          </div>
          <TaskFilters />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
      </div>
    </div>
  );
};

export default TaskListPanel;
