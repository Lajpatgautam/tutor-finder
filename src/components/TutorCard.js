// src/components/TutorCard.js
import React from 'react';

function TutorCard({ name, subject, experience }) {
  return (
    <div className="tutor-card">
      <h3>{name}</h3>
      <p>Subject: {subject}</p>
      <p>Experience: {experience} years</p>
    </div>
  );
}

export default TutorCard;

