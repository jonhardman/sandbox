var express = require('express')
var request = require('request');
//var proxy = require('express-http-proxy')
var proxy   = require( 'http-proxy' ).createProxyServer;
var app = express()

app.use(express.static(__dirname+'/www/'))

//  app.get('/hello', function (req,res){
//   var newurl = 'http://q12gw20.eai-ltd.co.uk:8012/sap/opu/odata/CITEXP/EXPENSES_SRV/$metadata';
//
//   request.get(newUrl, {
//     'auth': {
//       'user': 'jhardman',
//       'pass': 'Maldives2015',
//       'sendImmediately': true
//     }
//   }).pipe(res);
//
//    request.get(newurl).auth('jhardman', '', true, 'bearerToken').pipe(res);
// //
// //   //request(newurl).pipe(res);
// //
//
//
// })

app.configure(function() {

  // Inject some request headers here before we proxy...
  app.use( function( req, res, next ) {
    req.headers[ 'x-my-header' ] = 'blah blah';
    next();
  });

  // Proxy based on path...
  app.use( '/stack', proxy({ target: 'http://stackoverflow.com'} ).web );
  app.use( '/yahoo', proxy({ target: 'http://yahoo.com'} ).web );

  app.use( function( req, res ) {
    res.send({ ok: false, message: 'Not much here.' })
  });

}).listen( 3000 );

// app.use('/proxyTest', proxy(newurl, {
//   forwardPath: function(req, res) {
//     return require('url').parse(req.url).path;
//   }
// }));
  app.use( '/stack', proxy({ target: 'http://stackoverflow.com'} ).web );
app.listen(2000)
