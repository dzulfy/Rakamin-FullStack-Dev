var express = require('express');
var app = express();
var things = require('./things.js');
var pool = require('./queries.js')

app.use('/things', things);

app.get('/', (req, res) => {
    pool.query('SELECT * FROM city ' , (err, result) => {
        if(err){
            throw err;
        }
        res.send(result.rows)
    })
})

pool.connect((err, res) => {
    console.log(err);
    console.log('connected');
})

app.listen(3000);