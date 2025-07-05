import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskDashboard({ username, logout }) {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: task.title,
        description: task.description,
        category: task.category,
        priority: task.priority,
        dueDate: task.dueDate,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const matchesCategory =
      categoryFilter === "All" ? true : task.category === categoryFilter;

    return matchesCategory;
  });

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  {username ? (
    <TaskDashboard
      username={username}
      logout={() => {
        setUsername("");
        localStorage.removeItem("username");
      }}
    />
  ) : (
    <Login setUsername={setUsername} />
  )}

  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
    <h2>Welcome, {username}!</h2>
    <button onClick={logout}>Logout</button>
  </div>

  return (
    <div style={{ margin: "10px 0" }}>
      <h2>Welcome, {username}!</h2>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />

      <label style={{ marginRight: "10px" }}>Filter by Category:</label>
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
}








export default TaskDashboard;
