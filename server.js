var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1 = {
    title: 'Sample App1/artical' ,
    heading: 'The 1st article' ,
    date: 'aug 10' ,
    content: '<p>this is my first article console project that i am doing on my system and shld c whether it works or not</p>'
                    
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.html'));
});


app.get('/2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2.html'));
});

app.get('/3.html', function (req, res) {
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
