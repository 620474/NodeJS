const filter = require('./6-2');

filter(process.argv[2], process.argv[3], (err, files)=> {
    files.forEach(file=>console.log(file));
})
