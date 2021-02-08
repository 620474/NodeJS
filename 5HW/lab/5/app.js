let express = require('express'); //подключаем модуль express
let app = express();
let bodyParser = require('body-parser');
let register =require('./routes/register');




app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use("/register", register);

let mustacheExpress = require('mustache-express');
app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.listen(8080,()=> {
    console.log("http://localhost:8080/");
});



