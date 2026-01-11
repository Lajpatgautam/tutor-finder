// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <h1 className="logo">Tutor Finder</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tutors">Tutors</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/live-sessions">Live Sessions</Link>
          <Link to="/login">Login</Link>
          <Link to="/profile" className="highlight">Create Profile</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;