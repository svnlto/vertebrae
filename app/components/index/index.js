var Controller = require('./controllers/index');
var app = require('../../helpers/namespace');

app.module('index', function () {

  'use strict';

  this.addInitializer(function (options) {
    this._controller = new Controller(
      options.app.components.index
    );

  });

  this.on('before:start', function () {
    var self = this;

    app.vent.on('route:index', function (id, action) {
      self._controller.view(id, action);
    });

  });

});

module.exports = app;
