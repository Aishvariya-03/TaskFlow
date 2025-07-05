import { useState } from "react";
import Login from "./components/Login";
import TaskDashboard from "./components/TaskDashboard";
import "./styles/App.css";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [darkMode, setDarkMode] = useState(false);

  <button onClick={() => setDarkMode(!darkMode)} style={{ marginBottom: "10px" }}>
    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
  </button>


  return (
    <div className={darkMode ? "app dark" : "app"}>
      {username ? (
        <TaskDashboard username={username} />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
