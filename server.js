const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request takes too long to process
  // Because it never calls res.end()
  console.log('Request received');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});