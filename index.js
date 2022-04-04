const express = require('express');
const cors = require('cors');
const { METHODS } = require('http');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
const port = process.env.PORT || 5000;

// root api
app.get('/', (req, res) => {
  res.send('running the server');
});

// socket io implement
io.on('connection', (socket) => {
  socket.emit('me', socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit('callend');
  });

  socket.on('callUser', ({ userToCall, name, from, signal }) => {
    io.to(userToCall).emit('callUser', { signal: signalData, from, name });
  });

  socket.on('answerCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  });
});

server.listen(port, () => console.log(`server running on ${port}`));
