// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./member.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Static login credentials for demonstration purposes
    const staticEmail = "admin@example.com";
    const staticPassword = "password123";

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/;

    // Validate email
    if (!email.match(emailRegex)) {
      setEmailError("Invalid email");
      return;
    }

    // Validate password
    if (!password.match(passwordRegex)) {
      setPasswordError(
        "Invalid password. Password must be 6-15 characters and contain at least one letter and one number."
      );
      return;
    }

    if (email === staticEmail && password === staticPassword) {
      navigate("/addMember");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {emailError && <span className="error">{emailError}</span>}

        <div className="form-group">
          <label className="label">Password:</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            minLength={6}
            maxLength={15}
          />
        </div>
        {passwordError && <span className="error">{passwordError}</span>}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
