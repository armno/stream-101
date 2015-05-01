var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');

stream.end("hello\n"); // or `.write()` to write to stream. `.pipe()` doesn't work.