var http = require('http');
var fs = require('fs');

// create server which takes a call back
// use stream which will reduce the buffer size.
http.createServer(function(req,res){
  // res is a writeable stream.

  res.writeHead(200, { 'Content-Type':'text/html' });
  fs.createReadStream(__dirname+'/index.htm').pipe(res);

}).listen(1337,'127.0.0.1');