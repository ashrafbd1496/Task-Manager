import "./task.css";
import React, { useState } from "react";
function TaskItem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setUpdatedTask({
      ...updatedTask,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleUpdate = () => {
    updateTask(updatedTask);
    setIsEditing(false);
  };
  return (
    <li className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
          ></textarea>
          <label>
            Completed
            <input
              type="checkbox"
              name="completed"
              checked={updatedTask.completed}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <strong>{task.title}</strong> - {task.description} -
          <span className="completed">{task.completed ? "Completed" : "Not Completed"}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </li>
  );
}
export default TaskItem;
