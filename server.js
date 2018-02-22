var express = require('express')
var ws = require('./ws')

var app = express()

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
