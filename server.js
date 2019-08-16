// Create a server on port 3000
let express = require('express');
let app = express();
let server = app.listen(3000);
console.log("Server is running...");

// Serve public content of site to user
app.use(express.static('public'));

// Create socket for the server
let socket = require('socket.io');
let io = socket(server);

// Function for new connections
io.sockets.on('connection', function(socket) {
	console.log('New connection: ' + socket.id);
	
	// Start receiving and sending mouse data from new connection
	socket.on('mouse', function(data) {
		socket.broadcast.emit('mouse', data);
	});
})