// src/pages/Tutors.js
import React from 'react';
import TutorCard from '../components/TutorCard';

function Tutors() {
  return (
    <main>
      <h2>Our Tutors</h2>
      <div className="tutors-list">
        <TutorCard name="John Doe" subject="Math" experience={5} />
        <TutorCard name="Jane Smith" subject="English" experience={3} />
      </div>
    </main>
  );
}

export default Tutors;
