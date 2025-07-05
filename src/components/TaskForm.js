import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required");
      return;
    }
    setError("");
    addTask({
      title,
      description,
      priority,
      dueDate,
      category,
    });
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setCategory("Work");
    setDueDate("");
  };

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

      {/* Priority Dropdown */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ marginRight: "10px" }}
      >
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginRight: "10px" }}
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Others">Others</option>
      </select>

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