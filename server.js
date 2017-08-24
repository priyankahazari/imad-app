var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var config = {
  user: 'priyankahazari5',
  database: 'priyankahazari5',
  host: 'db.imad.hasura-app.io',
  port: '5432',
  password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));

var articlesS = {
    '1': {
    title: 'Sample App1/artical' ,
    heading: 'The 1st article' ,
    date: 'aug 10' ,
    content: '<p>this is my first article console project that i am doing on my system and shld c whether it works or not</p>'
                    
},
    '2': {
    title: 'Sample App2/artical2' ,
    heading: 'The 2nt article' ,
    date: 'aug 5 2017' ,
    content: '<p>this is my second article console project that i am doing on my system and shld c whether it works or not</p>'
                
},
    '3': {
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
                                ${date.toDateString()}
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

function hash (input, salt) {
    var hashed = pbkdf2Sync(input, salt, 1000, 512, 'sha512');
    return hashed.toString('hex');
}

app.get('/hash/:input', function ( req, res) {
   var hashedString = hash(req.params.input, 'this-is-a-simple-salt');
   res.send(hashedString);
});
var pool = new Pool(config);
app.get('/test-db', function (req, res) {
   pool.query('SELECT * FROM test', function (err, result) {
       if (err) {
           res.status(500).send(err.toString());
       } else {
           res.send(JSON.stringify(result.rows));
       }
   }); 
});


app.get('/articless/:articleName', function (req, res) {
    //articleName = first
 
 pool.query("SELECT * FROM article WHERE title = '" + req.params.articleName + "'", function (err, result) {
     if (err) {
         res.status(500).send(err.toString());
     } else {
         if (result.rows.length === 0) {
             res.status(404).send("article not found");
         } else {
             var articleData = result.rows[0];
             res.send(createTemplate(articleData));
         }
     }
 });
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
