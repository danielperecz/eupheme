var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //res.send('API is working properly');
    res.json({message: "Hello from server!"});
});

module.exports = router;