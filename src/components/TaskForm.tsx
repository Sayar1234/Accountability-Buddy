import { useState } from "react";
import type Task from "../types";

const TaskForm = ({ addTask }: { addTask: (task: Task) => void }) => {
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const task: Task = {
      id: Date.now(),
      description,
      assignedTo,
      assignedBy: "me",
      status: "pending",
      timestamp: new Date().toISOString(),
    };

    addTask(task);
    setDescription("");
    setAssignedTo("");
  };

  return (
    <form onSubmit={handleSubmit} className="border px-4 py-4 rounded-lg">
      <section className="mb-4">
        <h1 className="font-semibold text-black text-[30px]">+ Create New Task</h1>
        <span className="text-gray-500">Assign a task to one of your accountability buddies</span>
      </section>

      <section className="my-4">
        <h3 className="text-[14px] font-bold px-3 py-1">Task Description</h3>
        <textarea
          placeholder="Describe the task you want to assign..."
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="border w-full h-[7rem] text-left align-top py-3 px-3 rounded-xl"
        />
      </section>

      <section className="my-4">
        <h3 className="text-[14px] font-bold px-3 py-1">Assign To</h3>
        <select
          name="assignTo"
          value={assignedTo}
          onChange={e => setAssignedTo(e.target.value)}
          className="w-full p-2 border rounded-md text-gray-700 bg-white"
        >
          <option value="" disabled>Select a buddy</option>
          <option value="Buddy A">Buddy A</option>
          <option value="Buddy B">Buddy B</option>
        </select>
      </section>

      <button
        type="submit"
        className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
