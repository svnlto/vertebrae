var express   = require('express'),
    fs        = require('fs'),
    _         = require('underscore'),

    site      = express(),
    staticDir = express['static'];

module.exports = function(opts) {
  opts = _.extend({
    port :      4444,
    tests :     true,
    baseDir :   './'
  }, opts || {});

  site.configure(function() {
    [ 'app', 'lib', 'assets', 'tests' ].forEach(function(dir) {
      site.use('/' + dir, staticDir(opts.baseDir + dir));
    });
    site.use(express.bodyParser());
  });

  site.get("/", function(req, res) {
    fs.createReadStream(opts.baseDir + 'app/index.html').pipe(res);
  });

  if (opts.tests) {
    site.get("/_test", function(req, res) {
      fs.createReadStream(opts.baseDir + 'tests/app/runner.html').pipe(res);
    });
  }

  // Actually listen
  site.listen(opts.port || null);
  console.log("Serving at http://localhost:" + (opts.port || ''));
};
