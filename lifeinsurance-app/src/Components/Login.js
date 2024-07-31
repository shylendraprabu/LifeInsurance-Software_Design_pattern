import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import limage from '../image-1.jpg';
import logo from '../logo.png';
import GoogleButton from 'react-google-button';

const Login = () => {
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
      navigate('/home');
    }
  };
  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S235894650%3A1722145355097602&ddm=0';
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="image-overlay"></div>
        <img src={limage} alt="Login" />
      </div>
      <div className="auth-right">
        <img src={logo} alt="Logo" className="login-logo" />
        <div className="auth-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit" className="btn">Login</button>
            <div>
              <h3>Or</h3>
            </div>
            <div className="google-btn">
            <GoogleButton onClick={handleGoogleSignIn} />
            </div>
            <div className="switch-link">
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
            <div className="switch-link">
              <p>If Admin, Login as - <Link to="/adminlogin">Admin</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
