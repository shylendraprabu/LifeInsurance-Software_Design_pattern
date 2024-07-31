import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Logout</h2>
        <p>Are you sure you want to logout?</p>
        <button onClick={handleLogout} className="btn">Logout</button>
      </div>
    </div>
  );
};

export default Logout;
