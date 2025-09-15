import { useState } from "react";
import FormAddTask from "../components/FormAddTask/FormAddTask";
import TasksList from "../components/TaskList/TaskList";
import type { Task } from "../types";
import "./TasksTab.css";

const initialTasks: Task[] = [
  { id: "id-1", text: "Create repositore", completed: false },
  { id: "id-2", text: "Create progect", completed: false },
  { id: "id-3", text: "Create counter component", completed: false },
  { id: "id-4", text: "Create task list", completed: false },
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
