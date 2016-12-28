var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(cookieParser());
var port = process.env.PORT || 3000;

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

app.use('/assets',express.static(__dirname + '/public'));

app.use('/', function(req, res, next){
  console.log("Request Url: "+req.url);
  next();
});


// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body
})

app.get('/',function(req,res){
  console.log("Cookies: ", req.cookies);
  //res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body>Hello World!</body></html>');
  //res.send("./index");
  res.sendFile( __dirname + '/index.html');
});

app.get('/person/:page/:id',function(req,res){
  console.log("Query ",req.query);
  res.send('<html><head></head><body>Person: '+req.params.page+ ' ' +req.params.id+'</body></html>');
});

app.post('/person', urlencodedParser,function(req,res){
  res.send('Thank you!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.get('/api',function(req,res){
  res.json({ firstname:'John',lastname:'Doe' });
});

app.get('/cookies',function(req,res){
  console.log("Cookies: ", req.cookies);
});


// REST api
app.get('/api/person/:id', jsonParser,function(req,res){
  // get that data from database
  res.json({ firstname:'John',lastname:'Doe' });
});

app.post('/api/person', jsonParser,function(req,res){
  // save to the database
});

app.delete('/api/person/:id', jsonParser,function(req,res){
  // delete from the database

});

app.listen(port);