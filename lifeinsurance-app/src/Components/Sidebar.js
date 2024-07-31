import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import { FaHome, FaUser, FaClipboardList, FaUsers, FaFileAlt, FaMoneyBill, FaChartBar } from 'react-icons/fa';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Admin</h2>
        </div>
        <ul className="nav-menu">
          <li className={`menu-item ${activeIndex === 0 ? 'active' : ''}`}>
            <Link to="/dashboard" className="menu-link" onClick={() => handleToggle(0)}>
              <FaHome /> Dashboard
            </Link>
          </li>
          <li className={`menu-item ${activeIndex === 1 ? 'active' : ''}`}>
            <Link to="/profile-settings" className="menu-link" onClick={() => handleToggle(1)}>
              <FaUser /> Profile Settings
            </Link>
          </li>
          <li className={`menu-item ${activeIndex === 2 ? 'active' : ''}`}>
            <Link to="/policy-management" className="menu-link" onClick={() => handleToggle(2)}>
              <FaClipboardList /> Policy Management
            </Link>
          </li>
          <li className={`menu-item ${activeIndex === 3 ? 'active' : ''}`}>
            <Link to="/customer-management" className="menu-link" onClick={() => handleToggle(3)}>
              <FaUsers /> Customer Management
            </Link>
          </li>
          <li className={`menu-item ${activeIndex === 4 ? 'active' : ''}`}>
            <Link to="/claims-management" className="menu-link" onClick={() => handleToggle(4)}>
              <FaFileAlt /> Claims Management
            </Link>
          </li>
          <li className={`menu-item ${activeIndex === 5 ? 'active' : ''}`}>
            <Link to="/payments-billing" className="menu-link" onClick={() => handleToggle(5)}>
              <FaMoneyBill /> Payments & Billing
            </Link>
          </li>
          <li className={`menu-item ${activeIndex === 6 ? 'active' : ''}`}>
            <Link to="/reports-analytics" className="menu-link" onClick={() => handleToggle(6)}>
              <FaChartBar /> Reports & Analytics
            </Link>
          </li>
          <li className={`menu-item ${activeIndex === 7 ? 'active' : ''}`}>
            <Link to="/login" className="menu-link" onClick={() => handleToggle(6)}>
              <FaChartBar /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
