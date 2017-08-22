var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var manyarticles = {
    'article1': {
    title: 'Sample App1/artical' ,
    heading: 'The 1st article' ,
    date: 'aug 10' ,
    content: '<p>this is my first article console project that i am doing on my system and shld c whether it works or not</p>'
                    
},
    'article2': {
    title: 'Sample App2/artical2' ,
    heading: 'The 2nt article' ,
    date: 'aug 5 2017' ,
    content: '<p>this is my second article console project that i am doing on my system and shld c whether it works or not</p>'
                
},
    'article3': {
    title: 'Sample App3/artical3' ,
    heading: 'The 3rt article' ,
    date: 'aug 20 2017' ,
    content: '<p>this is my third article console project that i am doing on my system and shld c whether it works or not</p>'
          },
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
                <head>
                    <title>${title}</title>
                           <link href="/ui/style.css" rel="stylesheet" />
                    </head>
                    <body>
                        
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
                        <div>
                                ${content}
                        </div>
                    </body>
    
    </html>
    
    
    `;
    return htmlTemplate;
}    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:manyarticles', function (req, res) {
    var manyarticles = req.params.manyarticles;
  res.send(createTemplate(articles[manyarticles]));
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
