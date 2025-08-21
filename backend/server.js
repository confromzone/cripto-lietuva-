const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins for simplicity. For production, restrict this to your frontend's URL.
    methods: ["GET", "POST"]
  }
});

// Socket.io connection for real-time chat
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Listen for chat messages
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg); // Broadcast the message to everyone
  });
});

// API endpoint for the bot to send signals
app.post('/signal', (req, res) => {
  const signal = req.body;
  console.log('Received signal:', signal);

  // Broadcast the signal to all connected clients
  io.emit('new signal', signal);

  res.status(200).json({ message: 'Signal received and broadcasted' });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Backend server listening on *:${PORT}`);
});
