import TaskCard from "./TaskCard";
import type Task from "../types";

const TaskAssignedToMe = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="border w-full mx-2 my-2 rounded-lg">
      <header>
        <h1 className="font-bold text-[30px]">Tasks Assigned To Me</h1>
        <span className="text-gray-500">
          Tasks your buddies have assigned to you
        </span>
      </header>

      <ul className="mt-4 space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            description={task.description}
            assignedBy={task.assignedBy}
            dueOn={task.timestamp}
            status={task.status}
            actionText="Mark as Done"
            onActionClick={() => console.log("Marked as done:", task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskAssignedToMe;
