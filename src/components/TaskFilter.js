function TaskFilter({ filter, setFilter, tasks }) {
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.filter((t) => !t.completed).length;

  return (
    <div className = "task-filter">
      <button onClick={() => setFilter("All")} disabled={filter === "All"}>
        All ({tasks.length})
      </button>
      <button onClick={() => setFilter("Completed")} disabled={filter === "Completed"}>
        Completed ({completedCount})
      </button>
      <button onClick={() => setFilter("Pending")} disabled={filter === "Pending"}>
        Pending ({pendingCount})
      </button>
    </div>
  );
}

export default TaskFilter;
