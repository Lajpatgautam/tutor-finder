// src/components/Login.js
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'teacher@example.com' && password === 'password123') {
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/profile';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="profile-wrapper">
      <h2>Teacher Login</h2>

      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="teacher@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="password123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;