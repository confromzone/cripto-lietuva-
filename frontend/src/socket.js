import { io } from 'socket.io-client';

// For production, you would use your actual backend URL
const URL = 'http://localhost:3001';
export const socket = io(URL);
