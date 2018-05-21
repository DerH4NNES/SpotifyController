var express = require('express');
var https = require('https');
var app = express();

app.get('/', function (req, res) {
  https.get(
    'https://api.spotify.com/v1/me/player/currently-playing',
    (_res) => {
      console.log(_res);
      res.send(_res);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
