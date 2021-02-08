const http = require("http");
const fs = require("fs");
const path = require('path');

http.createServer((req, res) => {
    let mimeTypes = {
        '.html': 'text/html'
    };
    let pathname, extname, mimeType;
    if (req.url === "/")
        pathname = "index.html";
    else
        pathname = '.' + req.url;
    extname = path.extname(pathname);
    mimeType = mimeTypes[extname];
    fs.readFile(pathname, "utf8", (err, data) => {
        if (err) {
            console.log("Can not read file");
            res.statusCode = 404;
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": mimeType})
            res.end(data)
        }
    })
}).listen(8080, () => {
    console.log("http://localhost:8080/")
});
