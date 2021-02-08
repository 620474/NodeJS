let express = require('express');
let router = express.Router();
router.post('/', (req, res, next)=>{
    res.send(JSON.stringify(req.body));
});
module.exports = router;
