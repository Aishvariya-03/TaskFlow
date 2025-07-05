import { useState } from "react";
import Login from "./components/Login";
import TaskDashboard from "./components/TaskDashboard";
import "./styles/App.css";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  return (
    <div className="app">
      {username ? (
        <TaskDashboard username={username} />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
