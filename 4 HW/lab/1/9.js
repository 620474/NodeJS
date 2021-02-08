const http = require('http');

http.get(process.argv[2], (data)=> {
    let count = 0;
    let ar = '';
    data.setEncoding("utf8");
    data.on('data', (data)=> {
        ar+=data;
    })
    data.on('end', ()=> {
        console.log(ar);
    })

})
http.get(process.argv[3], (data)=> {
    let count = 0;
    let ar = '';
    data.setEncoding("utf8");
    data.on('data', (data)=> {
        ar+=data;
    })
    data.on('end', ()=> {
        console.log(ar);
    })

})
http.get(process.argv[4], (data)=> {
    let count = 0;
    let ar = '';
    data.setEncoding("utf8");
    data.on('data', (data)=> {
        ar+=data;
    })
    data.on('end', ()=> {
        console.log(ar);
    })

})
