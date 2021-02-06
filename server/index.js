const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.send('Was able to make a connection to the backend');
});

io.on('connection', (socket) => {
	console.log('a new user has connected');
	socket.on('chat message', (msg) => {
		console.log(msg);
	});
});

http.listen(5000, () => {
	console.log('listening on port 5000');
});
