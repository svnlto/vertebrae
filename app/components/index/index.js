var Controller = require('./controllers/index');

app.module('index', function () {

  'use strict';

  this.addInitializer(function (options) {
    this._controller = new Controller(
      options.app.components['vertebrae-layout']
    );

  });

});

module.exports = app;
