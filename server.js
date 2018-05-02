var http = require('http');

var server = http.createServer(function(request, response){

  if (request.url === '/'){
  response.writeHead(200, {'Content-Type': "text/html"});
  response.end('<strong>Hello</strong> World')
} else if (request.url === '/goodbye') {
  response.writeHead(200, {'Content-Type': "text/html"});
  response.end('<strong>Goodbye</strong> World')
}
});

server.listen(3000)
