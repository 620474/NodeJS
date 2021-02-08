const http = require('http');
const cp = require('child_process');

const child = cp.fork('./child.js');



http.createServer((request, response)=>{

    child.send({ //методу send передается объект, который будет передан дочернему процессу
        method: request.method, //свойство хранит http метод присланного запроса
        params: request.url //свойство хранит url присланного запроса
    });


    response.statusCode = 200;
    response.end();
}).listen(8080, ()=>{
    console.log("http://localhost:8080/");
});