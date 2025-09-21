import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import FormAddTask from "../components/FormAddTask/FormAddTask";
import TasksList from "../components/TaskList/TaskList";
import type { Task } from "../types";
import "./TasksTab.css";
import Filter from "../components/Filter/Filter";
import { initialTasks } from "../mockData/initialData";
import { filterReducer } from "../reducer/filterReducer";

export default function TasksTab() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("TasksList");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });
  const [filter, dispatch] = useReducer(filterReducer, "All");

  useEffect(() => {
    localStorage.setItem("TasksList", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = useCallback((taskText: string) => {
    const newTask: Task = {
      id: `id-${Date.now()}`,
      text: taskText,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }, []);

  const handleToggle = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const handleClearCompleted = useCallback(() => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  }, []);
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "Active") return !task.completed;
      if (filter === "Complete") return task.completed;
      return true;
    });
  }, [tasks, filter]);

  const hasCompleted = tasks.some((task) => task.completed);

  return (
    <section className="taskSection">
      <h2 className="title">List of your tasks</h2>

      <FormAddTask onSubmit={handleAddTask} />
      <Filter dispatch={dispatch} currentFilter={filter} />
      <TasksList startTasks={filteredTasks} onToggle={handleToggle} />
      {hasCompleted && filter !== "Active" && (
        <button className="clearButton" onClick={handleClearCompleted}>
          ❌ Clear Finished Tasks
        </button>
      )}
    </section>
  );
}
