"use client";
import TaskBoard from "../../components/tasks/TaskList";

export default function Home() {
  return (
    <div className="min-h-screen flex  justify-center p-6">
      <div className="w-full max-w-4xl">
        <TaskBoard />
      </div>
    </div>
  );
}
