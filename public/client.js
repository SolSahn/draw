let socket;
function setup() {
	// Set up canvas and brush
	createCanvas(640, 480);
	background(51);
	stroke(255);
	strokeWeight(3);

	// Connect to server and start receiving and drawing other mouse data
	socket = io.connect('http://localhost:3000');
	socket.on('mouse', function(data) {
		line(data.x1, data.y1, data.x2, data.y2);
	});
}

function mouseDragged() {
	// Draw line at from mouse position to previous mouse position
	line(mouseX, mouseY, pmouseX, pmouseY);

	// Send mouse data to server
	var data = {
		x1: mouseX,
		y1: mouseY,
		x2: pmouseX,
		y2: pmouseY
	}
	socket.emit('mouse', data);
}