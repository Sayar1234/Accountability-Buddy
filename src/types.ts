export type TaskStatus = "pending" | "completed" | "needs_confirmation";

export default interface Task {
  id: number;
  description: string;
  assignedTo?: string;
  assignedBy?: string;
  status: TaskStatus;
  timestamp: string;
  completedOn?: string;
}
