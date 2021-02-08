const fs = require('fs');
const path = require('path');


module.exports = function (name, exp, callback) {

    fs.readdir(name, (err, data)=> {
        if (err) {
            return callback(err)
        } else {
            let res =  data.filter(file=> path.extname(file) === "." + exp);
            callback(null, res);
        }
    });
}

