import { useState } from "react";

function Login({ setUsername }) {
  const [input, setInput] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setUsername(input.trim());
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
