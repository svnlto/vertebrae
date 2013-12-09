var express   = require('express');
var fs        = require('fs');
var _         = require('lodash');
var app       = express();
var staticDir = express['static'];

module.exports = function (opts) {

  'use strict';

  opts = _.extend({
    port :      4444,
    baseDir :   './'
  }, opts || {});

  app.configure(function () {
    ['app', 'lib', 'assets'].forEach(function (dir) {
      app.use(express.compress());
      app.use('/' + dir, staticDir(opts.baseDir + dir));
    });
    app.use(express.bodyParser());
  });

  app.get('/', function (req, res) {
    fs.createReadStream(opts.baseDir + 'app/index.html').pipe(res);
  });

  // Actually listen
  app.listen(opts.port || null);
  console.log('Serving at http://localhost:' + (opts.port || ''));
};
