let express = require('express');
let router = express.Router();



router.post('/', (req, res, next)=>{
    res.render("index", {
        login: req.body.login,
        email: req.body.email,
        password: req.body.password
    })
});
module.exports = router;
