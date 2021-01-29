const http = require('http');



http.createServer((req, res)=> {
    console.log("HTTP works!");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello</h1>');
    res.end();
}).listen(8080);
