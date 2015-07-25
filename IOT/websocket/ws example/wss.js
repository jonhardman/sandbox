var app = require('express')();
var http = require('http').Server(app);
var restify = require('restify');

app.get('/fred', function(req, res){
  res.sendFile(__dirname + '/line.html');
});


var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 3005 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
});

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send('hello');
  });
};


http.listen(3005, function(){
  console.log('listening on *:3000');
});