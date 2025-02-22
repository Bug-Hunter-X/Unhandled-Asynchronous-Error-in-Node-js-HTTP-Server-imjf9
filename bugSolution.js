const http = require('http');

const server = http.createServer((req, res) => {
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(err => {
    // Handle the error gracefully
    console.error('Error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate a random failure
  if (Math.random() < 0.5) {
    throw new Error('Simulated asynchronous error');
  }
  // Simulate some work
  await new Promise(resolve => setTimeout(resolve, 1000));
}