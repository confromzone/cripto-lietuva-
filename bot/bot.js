const axios = require('axios');

const BACKEND_URL = 'http://localhost:3001/signal';

const signals = [
  { pair: 'BTC/USDT', action: 'BUY', price: 60000 },
  { pair: 'ETH/USDT', action: 'SELL', price: 4000 },
  { pair: 'ADA/USDT', action: 'BUY', price: 2.5 },
  { pair: 'SOL/USDT', action: 'BUY', price: 150 },
  { pair: 'DOGE/USDT', action: 'SELL', price: 0.25 },
];

function getRandomSignal() {
  return signals[Math.floor(Math.random() * signals.length)];
}

async function sendSignal() {
  try {
    const signal = getRandomSignal();
    await axios.post(BACKEND_URL, signal);
    console.log(`Sent signal: ${signal.action} ${signal.pair} at ${signal.price}`);
  } catch (error) {
    console.error('Error sending signal:', error.message);
  }
}

// Send a signal every 10 seconds
setInterval(sendSignal, 10000);

console.log('AI Bot started. Sending signals every 10 seconds...');
