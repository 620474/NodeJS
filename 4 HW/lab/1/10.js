const net = require('net')
const server = net.createServer(function (socket) {

    socket.end(time_date() + "\n");
})

server.listen(parseInt(process.argv[2]));

function time_date() {
    let date = new Date();
    let month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
    return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}`;
}

