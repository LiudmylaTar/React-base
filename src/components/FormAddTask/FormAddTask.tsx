import React, { useState } from "react";
import "./FormAddTask.css";

export default function FormAddTask({ onSubmit }) {
  const [value, setValue] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.trim) return;
    onSubmit(value);
    setValue("");
  };
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
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
}
