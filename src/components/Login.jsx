// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './login.css';

export default function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        username, password,
      });

      if (signInError) {
        if (
          signInError.message &&
          signInError.message.toLowerCase().includes('invalid login credentials')
        ) {
          const { data: signUpData, error: signUpError } =
            await supabase.auth.signUp({ username, password });

          if (signUpError) throw signUpError;

          if (signUpData.session) {
            setMessage('Account created. You are logged in!');
          } else {
            setMessage('Account created. Please confirm your username to log in.');
            setLoading(false);
            return;
          }
        } else {
          throw signInError;
        }
      } else {
        setMessage('Logged in!');
      }

  navigate('/task1');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    // 🔥 YEH DO LINES design ke liye zaroori hain:
    <div className="round2-container">
      <img className="round2-image" src="/login-section.png" alt="bg" />

      {/* Right side login box */}
      <div className="login-container">
        <form className="login-form" onSubmit={handleAuth}>
          <h2>Login / Sign up</h2>

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
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
            {loading ? 'Please wait...' : 'Continue'}
          </button>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}
