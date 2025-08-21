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
    <div className="chat-container">
      <h1>Crypto Lietuva Chat</h1>
      <ul className="chat-messages">
        {messages.map((msg, index) => (
          <li key={index} className="message">{msg}</li>
        ))}
      </ul>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          className="chat-input"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
