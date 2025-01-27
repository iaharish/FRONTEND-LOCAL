import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic (authentication via mock or backend)
    if (role === 'admin') {
      // Redirect to admin dashboard
      navigate('/admin-dashboard');
    } else if (role === 'tailor') {
      // Redirect to tailor page (you can implement this in the future)
      navigate('/tailor-dashboard');
    } else {
      alert('Please select a valid role');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="tailor">Tailor</option>
          </select>
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
