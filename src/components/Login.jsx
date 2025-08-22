// Filename: src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

// Hardcoded credentials
const USERS = {
  "Forensics":    "dexter",
  "Disguise":     "camouflage",
  "Cold case":    "unsolved",
  "Puzzle":       "mystery",
  "Fingerprints": "signature",
  "Assassination":"killing",
  "Murder":       "Bloodline",
  "Poison":       "Cynide",
  "Arson":        "Joker",
  "Reflection":   "Snow White"
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading,  setLoading]  = useState(false);
  const [message,  setMessage]  = useState("");
  const [error,    setError]    = useState("");

  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const uname = username.trim();
      const pwd   = password;

      if (!uname || !pwd) {
        setError("Please enter both username and password.");
        return;
      }

      const expected = USERS[uname];
      if (!expected || expected !== pwd) {
        setError("Invalid username or password.");
        return;
      }

      setMessage("Logged in!");
      try { localStorage.setItem("cq_username", uname); } catch {}
      navigate("/task1");
    } catch (err) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="round2-container">
      <img className="round2-image" src="/login-section.png" alt="bg" />
      <div className="login-container">
        <form className="login-form" onSubmit={handleAuth}>
          <h2>Login</h2>

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Continue"}
          </button>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}
