const express = require('express');
const app = express();
const http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile('/Users/tatiana/Studies/responsive/test/ex4_localstorage/public2/index.html');
});

app.use(express.static('public'));

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
