import type { TaskStatus } from "../types";

interface TaskCardProps {
  description: string;
  assignedTo?: string;
  assignedBy?: string;
  dueOn?: string;
  completedOn?: string;
  status: TaskStatus;
  actionText?: string;
  onActionClick?: () => void;
}

const TaskCard = ({
  description,
  assignedTo,
  assignedBy,
  completedOn,
  dueOn,
  status,
  actionText,
  onActionClick,
}: TaskCardProps) => {
  return (
    <li className="border rounded-xl p-4 bg-white shadow-sm flex flex-col gap-2 m-4">
      <h3 className="text-lg font-semibold leading-tight">{description}</h3>

      <div className="text-sm text-gray-500">
        {assignedTo && (
          <p>
            <span className="font-semibold">Assigned to:</span> {assignedTo}
          </p>
        )}
        {assignedBy && (
          <p>
            <span className="font-semibold">Assigned by:</span> {assignedBy}
          </p>
        )}
        {dueOn && (
          <p>
            <span className="font-semibold">Due:</span> {dueOn}
          </p>
        )}
        {completedOn && (
          <p>
            <span className="font-semibold">Completed:</span> {completedOn}
          </p>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between">
        {status === "pending" ? (
          <span className="text-[10px] text-yellow-600 font-medium border border-yellow-600 rounded-full px-2 py-1">
            Needs Confirmation
          </span>
        ) : (
          <span className="text-sm text-green-600 font-medium border border-green-600 rounded-full px-2 py-1">
            Confirmed ✅
          </span>
        )}

        {actionText && (
          <button
            onClick={onActionClick}
            className="text-sm bg-black text-white rounded-md px-4 py-2 hover:bg-gray-800"
          >
            {actionText}
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskCard;
