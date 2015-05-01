var http = require('http');
var through = require('through2');

function write(buffer, _, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

var server = http.createServer(function(req, res) {
	if (req.method === 'POST') {

		// transform stream buffer (by uppercasing it) then pipe to response
		req.pipe(through(write)).pipe(res);
	}
});

server.listen(process.argv[2]);
