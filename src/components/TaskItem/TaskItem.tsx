import type { Task } from "../../types";
import "./TaskItem.css";

interface TaskItemProps {
  data: Task;
  onToggle: (id: string) => void;
}
export default function TaskItem({ data, onToggle }: TaskItemProps) {
  return (
    <div className="itemWrapper">
      <input
        type="checkbox"
        name="complete"
        onChange={() => onToggle(data.id)}
        checked={data.completed}
      />
      <p className="taskText">{data.text}</p>
      {data.completed ? (
        <span className="complete">Complete ✅</span>
      ) : (
        <span className="progress">To be done</span>
      )}
    </div>
  );
}
