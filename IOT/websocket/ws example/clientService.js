var restify = require('restify');
var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:3005/', {
  protocolVersion: 8, 
  origin: 'http://localhost'
});
 
var ip_addr = 'localhost';
var port    =  '3006';
 
var server = restify.createServer({
    name : "myapp"
});
 
server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});


var PATH = '/event'
server.get({path : PATH , version : '0.0.1'} , findAllJobs);

function findAllJobs(req, res , next){
	
  console.log('here');
    ws.on('message', function message(data, flags) {
      console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);
      ws.send('hello hello');
      setTimeout(function timeout() {
        ws.send(Date.now().toString(), {mask: true});
      }, 500);
    });

	console.log('done');
	res.send(200 , 'success');

 
}