import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Chat from './pages/Chat';
import Signals from './pages/Signals';
import Charts from './pages/Charts';

function App() {
  return (
    <div className="app-container">
      <nav>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/signals">Signalai</NavLink>
        <NavLink to="/charts">Grafikai</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/" element={<Navigate to="/chat" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
