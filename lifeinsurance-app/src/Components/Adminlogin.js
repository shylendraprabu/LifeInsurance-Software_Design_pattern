import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Adminlogin.css';
import adimage from '../logo.png';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (email === 'shylu972004@gmail.com' && password === '9344298924') {
        navigate('/dashboard');
      } else {
        alert('Invalid email or password');
      }
    }
  };

  return (
    <div className="admin-auth-container">
      <img src={adimage} alt="Company Logo" />
      <div className="admin-auth-box">
        <div className="admin-logo"></div>
        <h2>Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="admin-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="admin-error">{errors.email}</span>}
          </div>
          <div className="admin-input-group">
            <label htmlFor="password">Passkey</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <span className="admin-error">{errors.password}</span>}
          </div>
          <button type="submit" className="admin-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
