var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var artical1 = {
    title: 'Sample App/Artical',
    heading: 'The 1st article',
    date: 'aug 10',
    content: '<p> this is my first article console project that i am doing on my system and shld c whether it works or not</p>'
};
function createTemplate (data) {
    var title: data.title;
    var heading: data.heading;
    var date: data.date;
    var content: data.content;
var htmlTemplate =
'<html>
    <head>
        <title>${title}</title>
               <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
              <div>
                <a href="/">back</a>
              </div>
              <hr/>
                  <h2>
                    ${heading}
                </h2>
                <div>
                    ${date}
                </div>
                ${content}
                    
        </div>
        </body>

</html>
';
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/1.html', function(req, res) {
    res.send(createTemplate(SampleApp));
});

app.get('/artical2', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', '2.html'));
});
var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
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
