const http = require("http");
const fs = require("fs");

http.createServer((req, res)=> {
    let pathname;
    if (process.env.LANG === "en") {
        pathname = "en.html"
    }
    else {
        pathname = "ru.html"
    }
    fs.readFile(pathname, "utf8", (err, data)=> {
        if (err) {
            console.log("Can not read file");
            res.statusCode = 404;
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(data)
        }
    })
}).listen(8080, () => {
    console.log("http://localhost:8080/")
});



