// src/components/TeacherProfile.js
import React, { useState } from 'react';

function TeacherProfile() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [experience, setExperience] = useState(0);
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const profileData = { name, subject, experience, bio };
    localStorage.setItem('teacherProfile', JSON.stringify(profileData));

    alert('Profile created successfully!');
    window.location.href = '/';
  };

  return (
    <div className="profile-wrapper">
      <h2>Create Your Profile</h2>

      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Eg: Mathematics, Physics"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Experience (Years)</label>
          <input
            type="number"
            min="0"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Short Bio</label>
          <textarea
            placeholder="Tell students about yourself"
            rows="4"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default TeacherProfile;