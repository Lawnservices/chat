const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', socket => {
    console.log('Un usuario se conectó');

    socket.on('mensaje', msg => {
        io.emit('mensaje', msg);
    });

    socket.on('disconnect', () => {
        console.log('Un usuario se desconectó');
    });
});

http.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});
