import TaskCard from "./TaskCard";
import type Task from "../types";

const TaskAssignedByMe = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="border w-full mx-2 my-2 rounded-lg">
      <header>
        <h1 className="font-bold text-[30px]">Tasks I Assigned</h1>
        <span className="text-gray-500">
          Tasks you've assigned to your buddies
        </span>
      </header>

      <ul className="mt-4 space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            description={task.description}
            assignedTo={task.assignedTo}
            dueOn={task.timestamp}
            completedOn={task.completedOn}
            status={task.status}
            actionText={
              task.status === "pending" ? "Confirm Completion" : undefined
            }
            onActionClick={() => console.log("Confirmed task:", task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskAssignedByMe;
