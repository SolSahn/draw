let socket;
function setup() {
	// Set up canvas and brush
	createCanvas(640, 480);
	background(51);
	fill(255);
	noStroke();

	// Connect to server and start receiving and drawing other mouse data
	socket = io.connect('http://localhost:3000');
	socket.on('mouse', function(data) {
		ellipse(data.x, data.y, 12);
	});
}

function mouseDragged() {
	// Draw ellipse at mouse location
	ellipse(mouseX, mouseY, 12);

	// Send mouse data to server
	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse', data);
}