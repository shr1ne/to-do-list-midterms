"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // function to add the task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // function to mark the task complete
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // function to delete the task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="m-5">
      <h1>To-Do List</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          className="border border-black"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask} className="add">
          Add Task
        </button>
      </div>

      <ul className="mt-6 w-full max-w-md space-y-2">
        {tasks.map((t) => (
          <li key={t.id}>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTaskCompletion(t.id)}
              />
              <span
                className={`${
                  t.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {t.text}
              </span>
            </div>
            <div className="delete">
            <button onClick={() => deleteTask(t.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
