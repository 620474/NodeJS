const fs = require('fs');
let data = fs.readFileSync("data.txt", "utf8").split(" ").map(Number);

let out1 = data.filter(e => e % 2 === 0).join(" ");
let out2= data.map(e=>Math.pow(e,3)).join(" ");




fs.writeFile('out-1.txt', out1, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});

fs.writeFile('out-2.txt', out2, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});
