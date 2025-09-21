import React from "react";
import type { Task } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

interface TasksListProps {
  startTasks: Task[];
  onToggle: (id: string) => void;
}

export default React.memo(function TasksList({
  startTasks,
  onToggle,
}: TasksListProps) {
  return (
    <ul className="list">
      {startTasks.map((task) => (
        <li className="item" key={task.id}>
          <TaskItem data={task} onToggle={onToggle} />
        </li>
      ))}
    </ul>
  );
});
