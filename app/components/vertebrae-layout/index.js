var Controller = require('./controllers/index');
var fs = require('fs');
var handlebars = require('handlebars');
var app = require('../../helpers/namespace');

app.module('layout', function () {

  'use strict';

  this.addInitializer(function (options) {
console.log(handlebars)
    options.app.components['vertebrae-layout'].template = fs.readFileSync(__dirname + '/templates/index.html');

    this._controller = new Controller(
      options.app.components['vertebrae-layout']
    );

  });

});

module.exports = app;
