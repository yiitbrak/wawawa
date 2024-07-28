const { createServer } = require('node:http');
const fs = require('node:fs');

const hostname = '0.0.0.0';
const port = 80;


let page_data
try {
    page_data = fs.readFileSync('index.html', 'utf-8')
    console.log("read index.html")
} catch (err) {
    console.log("failed to read index.html:")
    console.log(err)
    page_data=""
}

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(page_data);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
