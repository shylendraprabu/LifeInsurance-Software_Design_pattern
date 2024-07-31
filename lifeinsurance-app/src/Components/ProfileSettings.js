import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/ProfileSettings.css';

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    birthday: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSave = () => {
    alert('Profile saved successfully!');
  };

  const handlePasswordChange = () => {
    alert('Password changed successfully!');
  };

  const handleAccountDeactivation = () => {
    alert('Account deactivated successfully!');
  };

  return (
    <div className="profile-settings-page">
      <Sidebar />
      <div className="profile-settings">
        <h1>Profile Settings</h1>
        <div className="profile-form">
          <div className="profile-section">
            <label>First name</label>
            <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} />
          </div>
          <div className="profile-section">
            <label>Last name</label>
            <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} />
          </div>
          <div className="profile-section">
            <label>Email</label>
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
          </div>
          <div className="profile-section">
            <label>Phone</label>
            <input type="tel" name="phone" value={profile.phone} onChange={handleChange} />
          </div>
          <div className="profile-section">
            <label>Address</label>
            <input type="text" name="address" value={profile.address} onChange={handleChange} />
          </div>
          <div className="profile-section">
            <label>Birthday</label>
            <input type="date" name="birthday" value={profile.birthday} onChange={handleChange} />
          </div>
          <button className="save-changes" onClick={handleSave}>Save changes</button>
        </div>
        <div className="profile-actions">
          <button className="change-password" onClick={handlePasswordChange}>Change Password</button>
          <button className="deactivate-account" onClick={handleAccountDeactivation}>Deactivate Account</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
