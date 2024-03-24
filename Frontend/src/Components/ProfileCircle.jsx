import React from 'react';

const ProfileCircle = ({ username }) => {
  return (
    <div className="profile-circle">
      <img src="profile-image-url.jpg" alt="Profile" />
      <span>{username}</span>
    </div>
  );
};

export default ProfileCircle;
