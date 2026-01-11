// src/components/LiveSession.js
import React from 'react';

function LiveSession({ title, date, time }) {
  return (
    <div className="live-session">
      <h3>{title}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
    </div>
  );
}

export default LiveSession;
