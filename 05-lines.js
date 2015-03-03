var split = require('split');
var through = require('through2');

var i = 0;
process.stdin
	.pipe(split('\n'))
	.pipe(through(function(line, _, next) {
		line = line.toString();
		i += 1;
		if (i % 2 === 0) {
			this.push(line.toUpperCase() + '\n');
		} else {
			this.push(line.toLowerCase() + '\n');
		}
		next();
	}))
	.pipe(process.stdout);