var fs = require('fs'),
  _ = require('lodash'),
  express = require('express'),
  cons = require('consolidate');

var app = express();

app.engine('mustache', cons.hogan);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/tpl');

app.use('/media', express.static(__dirname + '/media'));

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
  res.render('page', {
  });
});

console.log(process.env.port || 3000);
app.listen(process.env.port || 3000, '0.0.0.0');

exports = module.exports = app;
