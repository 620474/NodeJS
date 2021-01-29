const http = require('http');
const fs = require('fs');
const filename = 'index.html';


http.createServer((req, res)=> {
read(filename,res,req);


}).listen(8080, ()=> {
    console.log("HTTP server works in 8080 port!\n");
});




function read(file,res,req) {
    fs.readFile(file, 'utf8', (err,data)=> {
        if(err) {
            console.log("Could not find or open file for reading\n");
            res.statusCode=404;
            res.end();
        }
        else {
            console.log(`The file ${file} is read and sent to the client\n`);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
}
