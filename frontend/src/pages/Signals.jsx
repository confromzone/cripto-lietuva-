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
    <div className="signals-container">
      <h1>Prekybos Signalai</h1>
      <div className="signals-list">
        {signals.length === 0 ? (
          <p className="no-signals-message">Kol kas signalų nėra. Laukiama...</p>
        ) : (
          signals.map((signal, index) => (
            <div key={index} className={`signal-card ${signal.action.toLowerCase()}`}>
              <div className="signal-header">
                <span className="signal-pair">{signal.pair}</span>
                <span className="signal-action">{signal.action}</span>
              </div>
              <div className="signal-body">
                <p><strong>Kaina:</strong> {signal.price}</p>
              </div>
              <div className="signal-footer">
                <span>{new Date().toLocaleString()}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
