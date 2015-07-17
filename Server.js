var express = require('express')
var app = express()

app.use(express.static(__dirname+'/ui5_app'))
app.listen(5000)
