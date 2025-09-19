
import { useState } from "react";
import FormAddTask from "../components/FormAddTask/FormAddTask";
import TasksList from "../components/TaskList/TaskList";
import type { Task } from "../types";
import "./TasksTab.css";

const initialTasks: Task[] = [
   { id: "id-1", text: "Create repository", completed: true },
  { id: "id-2", text: "Setup project structure", completed: true },
  { id: "id-3", text: "Install dependencies", completed: true },
  { id: "id-4", text: "Create counter component", completed: false },
  { id: "id-5", text: "Create task list", completed: false },
  { id: "id-6", text: "Add new task form", completed: false },
  { id: "id-7", text: "Implement task deletion", completed: false },
  { id: "id-8", text: "Implement task editing", completed: false },
  { id: "id-9", text: "Filter tasks by status", completed: false },
  { id: "id-10", text: "Polish UI with CSS", completed: false },
];



export default function TasksTab() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleAddTask = (taskText: string) => {
    const newTask: Task = {
      id: `id-${Date.now()}`,
      text: taskText,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggle = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleClearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  const hasCompleted = tasks.some((task) => task.completed);
  return (
    <section className="taskSection">
      <h2 className="title">List of your tasks</h2>
      <FormAddTask onSubmit={handleAddTask} />
      <TasksList startTasks={tasks} onToggle={handleToggle} />
      {hasCompleted && (
        <button className="clearButton" onClick={handleClearCompleted}>
          ❌ Clear Finished Tasks
        </button>
      )}
    </section>
  );
}
