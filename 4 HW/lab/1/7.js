const http = require('http');

http.get(process.argv[2], (data)=> {
    data.setEncoding("utf8");
    data.on('data', (data)=> {
        console.log(data);
    })
})
