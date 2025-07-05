import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTask, deleteTask, toggleComplete }) {
  if (tasks.length === 0) return <p>No tasks to show.</p>;

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;