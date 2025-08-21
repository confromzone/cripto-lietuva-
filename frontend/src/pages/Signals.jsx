import React, { useState, useEffect } from 'react';
import { socket } from '../socket';

export default function Signals() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    function onNewSignal(value) {
      setSignals(previous => [value, ...previous]); // Prepend new signals
    }

    socket.on('new signal', onNewSignal);

    return () => {
      socket.off('new signal', onNewSignal);
    };
  }, []);

  return (
    <div>
      <h1>Prekybos Signalai</h1>
      <div className="signal-list">
        {signals.length === 0 ? (
          <p>Kol kas signalų nėra. Laukiama...</p>
        ) : (
          signals.map((signal, index) => (
            <div key={index} className="signal">
              <p><strong>Valiutų Pora:</strong> {signal.pair}</p>
              <p><strong>Signalas:</strong> {signal.action}</p>
              <p><strong>Kaina:</strong> {signal.price}</p>
              <p><em>Data: {new Date().toLocaleString()}</em></p>
            </div>
          ))
        )}
      </div>
      <style>{`
        .signal-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .signal {
          border: 1px solid #ccc;
          padding: 1rem;
          border-radius: 5px;
        }
        .signal p {
          margin: 0.5rem 0;
        }
      `}</style>
    </div>
  );
}
