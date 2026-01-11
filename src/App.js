// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Tutors from './pages/Tutors';
import Contact from './pages/Contact';
import LiveSessions from './pages/LiveSessions';

import Login from './components/Login';
import TeacherProfile from './components/TeacherProfile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Header />

      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/live-sessions" element={<LiveSessions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute><TeacherProfile /></ProtectedRoute>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;