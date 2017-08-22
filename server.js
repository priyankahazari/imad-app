var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;
var config = {
    user: 'priyankahazari5' ,
    database: 'priyankahazari5' ,
    host: 'db.imad.hasura-app.io' ,
    port: '5432' ,
    password: process.env.DB-PASSWORD
};
var app = express();
app.use(morgan('combined'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new pool(config);
app.get('/first table-db', function (req, res) {
    pool.query("SELECT * FROM first table", function (err, result)
    {
      if (err) {
      res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result));
      } 
    });
    
});
app.get('/1.html', function(req, res) {
    res.send('this is article one');
});

app.get('/artical2', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', '2.html'));
});

app.get('/artical3', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', '3.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
