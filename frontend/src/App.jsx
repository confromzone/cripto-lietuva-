import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Chat from './pages/Chat';
import Signals from './pages/Signals';
import Charts from './pages/Charts';

function App() {
  return (
    <div>
      <nav>
        <Link to="/chat">Chat</Link>
        <Link to="/signals">Signalai</Link>
        <Link to="/charts">Grafikai</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <style>{`
        nav {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background-color: #333;
        }
        nav a {
          color: white;
          text-decoration: none;
        }
        main {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Sveiki atvykę į Crypto Lietuva!</h1>
      <p>Pasirinkite puslapį iš navigacijos meniu.</p>
    </div>
  );
}

export default App;
