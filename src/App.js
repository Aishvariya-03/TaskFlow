import { useState, useEffect } from "react";
import Login from "./components/Login";
import TaskDashboard from "./components/TaskDashboard";
import "./styles/App.css";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    }
  }, [username]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") setDarkMode(true);
  }, []);
  

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

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
    </div>
  );
}
export default App;