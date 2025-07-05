import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTask, deleteTask, toggleComplete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks to show.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
