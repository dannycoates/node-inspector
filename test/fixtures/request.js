var http = require('http');

var server = http.createServer(function(req, res) {
  res.statusCode = 201;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.headers));
});
server.listen(0, sendRequest);

function sendRequest() {
  var req = http.request('http://127.0.0.1:' + server.address().port + '/page?a=b');
  req.on('response', function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log(chunk);
    });
    res.on('end', function() {
      console.log('ok');
      server.close();
    });
  });
  req.end();
}
