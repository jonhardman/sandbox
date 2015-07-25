var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function(data, flags) {
	console.log('here' + data);
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
});