import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";

function TaskDashboard({ username, logout }) {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

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
        priority: task.priority,
        dueDate: task.dueDate,
        category: task.category,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

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

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "All"
        ? true
        : filter === "Completed"
        ? task.completed
        : !task.completed;

    const matchesCategory =
      categoryFilter === "All"
        ? true
        : categoryFilter === "Uncategorized"
        ? !task.category || task.category === ""
        : task.category === categoryFilter;

    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header with Logout */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <h2>Welcome, {username}!</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <TaskForm addTask={addTask} />

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: "10px 0", padding: "5px", width: "100%" }}
      />

      {/* Status Filter Buttons */}
      <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />

      {/* Category Filter */}
      <div style={{ margin: "10px 0" }}>
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
          <option value="Uncategorized">Uncategorized</option>
        </select>
      </div>

      {/* Task List */}
      {filteredTasks.length === 0 ? (
        <p style={{ textAlign: "center" }}>No tasks to show.</p>
      ) : (
        <TaskList
          tasks={filteredTasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      )}
    </div>
  );
}

export default TaskDashboard;