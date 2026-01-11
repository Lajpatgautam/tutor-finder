// src/pages/LiveSessions.js
import React from 'react';
import LiveSession from '../components/LiveSession';

function LiveSessions() {
  return (
    <main>
      <h2>Upcoming Live Sessions</h2>
      <div className="live-sessions-list">
        <LiveSession title="Math 101 - Introduction" date="2024-11-20" time="10:00 AM" />
        <LiveSession title="English Grammar" date="2024-11-22" time="2:00 PM" />
      </div>
    </main>
  );
}

export default LiveSessions;
