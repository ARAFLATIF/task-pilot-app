const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const taskRoutes = require('./routes/taskRoutes');
const connectDB = require('./config/db');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.on('task-updated', (data) => socket.broadcast.emit('task-updated', data));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
