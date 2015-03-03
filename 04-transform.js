var through = require('through2');
var tr = through(write, end);

function write(buffer, _, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

process.stdin.pipe(tr).pipe(process.stdout);
