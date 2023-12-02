var express = require('express')
var router = express.Router()

router.get('/:name', function(req, res){
    res.send('hello rakamin!!!' + req.params.name)
});

router.post('/', function(req, res){
    res.send('Helo rakamin!! from post')
})

router.put('/put', function(req, res){
    res.send('Helo rakamin!! from put')
})

module.exports = router;