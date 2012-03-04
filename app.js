
/*
 simple nodejs webserver that reads json files
 and serves a index.html file.

 npm install
*/

var DATA_DIR = __dirname + "/data",
    app,
    setHeaders,
    express,
    fs;

express = require('express');
fs = require('fs');

app = module.exports = express.createServer();

setHeaders = function(req, res, next) {
  res.header('Content-Type', 'application/json');
  return next();
};


app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.set("view options", {layout: false});
  app.use(setHeaders);
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.register('.html', {
    compile: function(str, options) {
      return function(locals) {
        return str;
      };
    }
  });
});


app.configure('development', function() {
  return app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});


app.get('/', function(req, res, next) {
  res.header('Content-Type', 'text/html');
  res.render('index.html');
});

app.get('/examples', function(req, res, next) {
  var data;
  data = JSON.parse(fs.readFileSync(DATA_DIR + '/examples.json', 'utf8'));
  return res.send(data);
});

app.get('/examples/:id', function(req, res, next) {
  var data, payload;
  data = JSON.parse(fs.readFileSync(DATA_DIR + '/examples.json', 'utf8'));

  for (var i=0; i < data.length; i++) {
    if (data[i].id === req.params['id']) {
      payload = data[i];
    }
  }
  return res.send(payload);
});

app.listen(8000);

console.log('Express server listening on port %d in %s mode', app.address().port, app.settings.env);
