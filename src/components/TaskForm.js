import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  // Advanced filtering removed in shared version.

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Add Task</h3>

      {/* Title & Description Inputs Side by Side */}
      <div style={{ display: "flex", gap: "30px", marginBottom: "5px" }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Task title (required)"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
            style={{ width: "100%" }}
          />
          {error && (
            <p style={{ color: "red", margin: 0, fontSize: "0.85rem" }}>
              {error}
            </p>
          )}
        </div>

        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ flex: 1 }}
        />
      </div>

      // NOTE: Some parts of the logic have been removed for confidentiality.

      {/* Due Date Input */}
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      {/* Submit Button */}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
