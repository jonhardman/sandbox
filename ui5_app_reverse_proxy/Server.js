var express = require('express')
var app = express()
var proxy   = require( 'http-proxy' ).createProxyServer;

app.use(express.static(__dirname+'/www/'))
app.listen(5000)
