import React, { useState } from "react";
function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, completed });
    setTitle("");
    setDescription("");
    setCompleted(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <label>
        Completed
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button className="add-task" type="submit">Add Task</button>
    </form>
  );
}
export default TaskForm;
