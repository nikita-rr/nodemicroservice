const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    setInterval(() => {
        client.emit('msg', { text: 'hello viki' });
    }, 1000)
    client.on('disconnect', function () {
        console.log('user disconnected');
    });
});
server.listen(8000);