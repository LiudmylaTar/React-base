import type { Task } from "../types";

export const initialTasks: Task[] = [
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
