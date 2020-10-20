var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('<h1>สวัสดี NodeJs</h1>');
    res.write('<p>This is my first NodeJS app.</p>');
    res.end
    res.end('Hello Nattapong ?');
}).listen(8080);

console.log('NodeJs is running');
console.log('To quit, press Ctrl+C');
