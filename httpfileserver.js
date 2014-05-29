// Parameters: <file to serve>
// Must listen on port 8000
// Outputs the same file for every HTTP request it receives
// Must use fs.createReadStream()

// USAGE

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  fs.createReadStream(process.argv[2]).pipe(response);
});

server.listen(8000);

