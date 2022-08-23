const express = require('express');
const app = express();
const port = 3001;

app.get('/', function(req, res) {
  res.get('')
});

app.listen(port, function() {
  console.log('Server listening on: http://localhost:' + port)
});