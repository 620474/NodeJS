const fs = require('fs');

let a = fs.readFileSync(process.argv[2]).toString().split("\n");
console.log(a.length - 1);


