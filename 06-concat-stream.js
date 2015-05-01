var concat = require('concat-stream');

process.stdin
	.pipe(concat(function(textBuffer) {
		console.log(textBuffer.toString().split('').reverse().join(''));
	}));

