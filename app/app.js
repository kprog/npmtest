var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World from express.')
})

app.get('/echo', function (req, res) {
  res.send('echo.')
})

app.listen(3000)
