const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    const urlObject = url.parse(req.url,true);
    const fileName = "." + urlObject.pathname;

    fs.readFile(fileName, (err, data) => {
        if(err) {
            res.writeHead(404, { 'Content-TYpe': 'text/html' });
            
            return res.end("404 not found");
        }
        else {
            res.writeHead(200, { 'Content-TYpe': 'text/html' });
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});