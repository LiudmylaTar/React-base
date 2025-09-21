import React, { useState } from "react";
import "./FormAddTask.css";

interface FormAddTaskProps {
  onSubmit: (taskText: string) => void;
}

export default React.memo(function FormAddTask({ onSubmit }: FormAddTaskProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.trim()) return;
    onSubmit(value.trim());
    setValue("");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="What your plannig task"
        name="taskAdd"
        value={value}
        onChange={handleChange}
        required
        autoFocus
      />
      <button className="button" type="submit">
        Add task
      </button>
    </form>
  );
});
