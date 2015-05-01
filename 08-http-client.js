var request = require('request');

// for some reason, using `http://localhost` doesn't work for me.
var r = request.post('http://127.0.0.1:8099');

process.stdin.pipe(r).pipe(process.stdout);
