import TaskAssignedByMe from "./TaskAssignedByMe";
import TaskAssignedToMe from "./TaskAssignedToMe";
import type Task from "../types";

const DashBoard = ({ tasks }: { tasks: Task[] }) => {
  const assignedByMe = tasks.filter((task) => task.assignedBy === "me");
  const assignedToMe = tasks.filter((task) => task.assignedTo === "me"); // can adjust logic later

  return (
    <div className="flex w-full justify-around items-start">
      <TaskAssignedByMe tasks={assignedByMe} />
      <TaskAssignedToMe tasks={assignedToMe} />
    </div>
  );
};

export default DashBoard;
