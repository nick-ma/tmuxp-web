var fs = require('fs'),
  _ = require('lodash'),
  express = require('express'),
  cons = require('consolidate');

var app = express();

var serverHost = process.env.host || '0.0.0.0';
var serverPort = process.env.port || 3000;
var media_path = require('path').join(__dirname, '..', '/media');


app.engine('mustache', cons.hogan);

app.set('view engine', 'mustache');
app.set('views', __dirname + '/tpl');

app.use('/media', express.static(media_path));

app.get('/json', function (req, res) {
  res.json({
    testjson: 'hello world'
  });
});

app.get('*', function (req, res, next) {
  res.locals.js = [
    '/media/js/app.js'
  ];
  res.locals.css = [
    '/media/css/app.css' 
  ];
  next();
});

app.get('/', function (req, res, next) {
  _.extend(res.locals, {
    title: 'create your own tmux workspace'
  });
  res.render('page');
});

console.log('Server now running on <http://%s:%s>.', serverHost, serverPort);
app.listen(serverPort, serverHost);

exports = module.exports = app;
