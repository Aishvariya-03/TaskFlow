import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState("Work");


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
      category,
    });
    setTitle("");
    setDescription("");
  };

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    style={{ margin: "10px 0" }}
  >
    <option value="Work">Work</option>
    <option value="Personal">Personal</option>
    <option value="Shopping">Shopping</option>
    <option value="Others">Others</option>
  </select>


  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Add Task</h3>
      <input
        type="text"
        placeholder="Task title (required)"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
        style={{ marginRight: "10px" }}
      />
      {error && (
        <p style={{ color: "red", margin: 0, fontSize: "0.85rem" }}>
          {error}
        </p>
      )}
      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
