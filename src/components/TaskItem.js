import { useState, useEffect } from "react";

function TaskItem({ task, updateTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedPriority, setEditedPriority] = useState(task.priority || "Medium");
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate || "");
  const [editedCategory, setEditedCategory] = useState(task.category || "Work");

  const handleSave = () => {
    if (!editedTitle.trim()) return;
    updateTask({
      ...task,
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority,
      dueDate: editedDueDate,
      category: editedCategory,
    });
    setIsEditing(false);
  };  

  const [show, setShow] = useState(false);
    useEffect(() => {
      setShow(true);
    }, []);


  return (
    <div
      className={`task-item ${task.completed ? "completed" : "pending"} ${show ? "show" : ""}`}
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        transition: "background-color 0.3s ease",
      }}
    >

        {isEditing ? (
          <>
          // Logic for authentication removed for demo purposes
            <select
              value={editedPriority}
              onChange={(e) => setEditedPriority(e.target.value)}
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Created: {new Date(task.createdAt).toLocaleString()}</p>
            <p>Status: {task.completed ? "Completed ✅" : "Pending ⏳"}</p>
            <p>
              Priority:{" "}
              <span
                style={{
                  color:
                    task.priority === "High"
                      ? "red"
                      : task.priority === "Low"
                      ? "green"
                      : "orange",
                  fontWeight: "bold",
                }}
              >
                {task.priority || "Medium"}
              </span>
            </p>

            <h4>
              {task.title}{" "}
              <span className={`badge ${task.category?.toLowerCase() || "uncategorized"}`}>
                {task.category || "Uncategorized"}
              </span>
            </h4>

            <p>Due Date: {task.dueDate ? task.dueDate : "Not set"}</p>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? "Mark Pending" : "Mark Completed"}
            </button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </>
        )}
    </div>
  );  
}

export default TaskItem;
