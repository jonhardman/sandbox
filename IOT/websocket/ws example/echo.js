var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:3005/', {
  protocolVersion: 8, 
  origin: 'http://localhost'
});

ws.on('open', function open() {
  console.log('connected');
  ws.send(Date.now().toString(), {mask: true});
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function message(data, flags) {
  console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);
	ws.send('hello hello');
  setTimeout(function timeout() {
    ws.send(Date.now().toString(), {mask: true});
  }, 500);
});