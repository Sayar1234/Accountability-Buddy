import { useState } from "react";
import DashBoard from "./DashBoard";
import TaskForm from "./TaskForm";
import type Task from "../types";

const MainPage = () => {
  const [togglePage, setTogglePage] = useState<"dashboard" | "create">(
    "dashboard"
  );
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
    setTogglePage("dashboard");
  };

  return (
    <div className="w-[45rem]">
      <section className="flex justify-around items-center h-auto my-2 py-2 px-4 bg-gray-200 rounded-lg text-gray-600">
        <button
          onClick={() => setTogglePage("dashboard")}
          className={`w-[50%] rounded-lg ${
            togglePage === "dashboard" && "bg-white text-black"
          }`}
        >
          Tasks Dashboard
        </button>
        <button
          onClick={() => setTogglePage("create")}
          className={`w-[50%] rounded-lg ${
            togglePage === "create" && "bg-white text-black"
          }`}
        >
          Create Task
        </button>
      </section>

      {togglePage === "dashboard" ? (
        <DashBoard tasks={tasks} />
      ) : (
        <TaskForm addTask={addTask} />
      )}
    </div>
  );
};

export default MainPage;
