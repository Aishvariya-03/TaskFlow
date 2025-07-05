import { useState } from "react";

function TaskItem({ task, updateTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    if (!editedTitle.trim()) return;
    updateTask({
      ...task,
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  return (
    <div style={{
      border: "1px solid black",
      margin: "10px 0",
      padding: "10px",
      backgroundColor: task.completed ? "#d4ffd4" : "#ffd4d4"
    }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Created: {new Date(task.createdAt).toLocaleString()}</p>
          <p>Status: {task.completed ? "Completed ✅" : "Pending ⏳"}</p>
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
