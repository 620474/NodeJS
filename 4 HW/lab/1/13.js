const http = require('http');


http.createServer((req, res)=> {
let i = new URL(req.url);
console.log(i);
})
    .listen(process.argv[2]);
