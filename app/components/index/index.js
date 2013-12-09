var Controller = require('./controllers/index');
var app = require('../../helpers/namespace');

app.module('index', function () {

  'use strict';

  this.addInitializer(function (options) {
    this._controller = new Controller(
      options.app.components['vertebrae-layout']
    );

  });

});

module.exports = app;
