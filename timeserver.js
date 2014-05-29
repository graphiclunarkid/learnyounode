// Parameters: port
// Output format YYYY-MM-DD hh:mm, zero-filled to two integers

// USAGE
// 1. $ node timeserver.js <port>
// 2. $ telnet localhost <port>

net = require('net');

function pad(n) {
	return n < 10 ? '0' + n : n;
}

function now() {
	var date = new Date();
	output = date.getFullYear();
	output += '-';
	output += pad(date.getMonth() + 1);
	output += '-';
	output += pad(date.getDate());
	output += ' ';
	output += pad(date.getHours());
	output += ':';
	output += pad(date.getMinutes());
	return output;
}

var server = net.createServer(function (socket) {
	socket.end(now() + '\n');
});

server.listen(Number(process.argv[2]));

