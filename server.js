var http = require('http');

var server = http.createServer(function(request, response){

  if (request.url === '/'){
  response.writeHead(200, {'Content-Type': "text/html"});
  response.end('<strong>Hello</strong> World')
} else if (request.url === '/goodbye') {
  if (request.method === 'GET'){
  response.writeHead(200, {'Content-Type': "text/html"});
  response.end('<strong>Goodbye</strong> World')
} else if (request.method === 'POST') {
  response.writeHead(200, {'Content-Type': "text/html"});
  response.end('Posting <strong>Goodbye</strong> Cruel World')
  }
}
});

server.listen(3000)
