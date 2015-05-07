var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.emit('chat message','hello chanel');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});


var x = 0;
io.on('connection', function(socket){
	setInterval(function () {
		socket.emit('chat message','hello chanel' + x); 
		x++;
	}, 10000);

});



http.listen(3000, function(){
  console.log('listening on *:3000');
});