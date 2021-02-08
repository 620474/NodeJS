let express = require('express'); //подключаем модуль express
let app = express();
let bodyParser = require('body-parser');
let register =require('./routes/register');


app.listen(80);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use("/register", register);

