import { useState } from "react";

function Login({ setUsername }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setUsername(name);
    localStorage.setItem("username", name);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Enter your name to continue:</h3>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
