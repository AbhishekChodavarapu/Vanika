import React, { useState } from "react"; 
import './Login.css';
import AnviLogo from "../images/anvi-logo-1.png";

const Login = () => {
  const [customerId, setCustomerId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated login check (replace with API call)
    if (customerId === "12345" && name === "Avanika" && password === "password") {
      alert("Login Successful!");
      // Redirect to dashboard (modify as needed)
      window.location.href = "/dashboard";
    } else {
      setError("Invalid Customer ID, Name, or Password.");
    }
  };

  return (
    <div className="login-container">
      <img src= {AnviLogo} alt="Anvi Logo" />
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
