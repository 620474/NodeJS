const http = require('http');
const fs = require('fs');

let headerContent = fs.readFileSync("header.html", "utf8");
let footerContent = fs.readFileSync("footer.html", "utf8");
let bodyContent = fs.readFileSync("body.html", "utf8");
let allContent = headerContent + footerContent + bodyContent;

fs.writeFile('header.html', allContent, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});


http.createServer((req, res) => {
    fs.readFile('header.html', 'utf8', (err, data) => {
        if (err) {
            console.log("Could not find or open file for reading\n");
            res.statusCode = 404;
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
    console.log("Request accepted!");
}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});


