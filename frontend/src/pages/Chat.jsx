import React, { useState, useEffect } from 'react';
import { socket } from '../socket';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    function onChatMessage(value) {
      setMessages(previous => [...previous, value]);
    }

    socket.on('chat message', onChatMessage);

    return () => {
      socket.off('chat message', onChatMessage);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      socket.emit('chat message', input);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Crypto Lietuva Chat</h1>
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form id="form" onSubmit={handleSubmit}>
        <input
          id="input"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}
