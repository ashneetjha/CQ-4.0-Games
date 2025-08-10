import React from "react";
import "./Login.css"; // separate CSS file

const Login = () => {
  return (
    <div className="round2-container">
      {/* Background image */}
      <img src="/dg.png" alt="Round 2" className="round2-image" />

      {/* Form positioned over image */}
      <div className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
