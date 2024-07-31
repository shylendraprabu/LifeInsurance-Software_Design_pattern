import React from 'react';
import '../styles/Profile.css';
import profilePic from '../profile-image.jpg';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>Roshan</h1>
          <p>roshan007@gmail.com</p>
        </div>
      </div>
      <div className="profile-details">
        <h2>Policy Information</h2>
        <div className="policy-card">
          <h3>Policy Name</h3>
          <p>Life Secure Plan</p>
        </div>
        <div className="policy-card">
          <h3>Policy Number</h3>
          <p>123456789</p>
        </div>
        <div className="policy-card">
          <h3>Coverage Amount</h3>
          <p>₹5,00,000</p>
        </div>
        <div className="policy-card">
          <h3>Premium Due Date</h3>
          <p>August 15, 2024</p>
        </div>
      </div>
      <div className="profile-footer">
        <h2>Contact Information</h2>
        <div className="contact-card">
          <h3>Address</h3>
          <p>3/234 Elm Street, Springfield, IL 62704</p>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <p>(+91) 9998979695</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
