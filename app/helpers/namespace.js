/*jshint -W079 */
'use strict';
var Marionette = require('backbone.marionette');
var Backbone = require('backbone');

var Router = require('../router');
var app = new Marionette.Application();

app.on('initialize:before', function (options) {

  // create router instance
  app.router = new Router();

  // create layout manager
  app.rm = new Marionette.RegionManager();

  //
  // log to console in debug mode
  if (options.debug) {
    window.app = app;

    app.vent.on('all', function (evt) {
      console.log(evt);
    });
  }

});

app.on('initialize:after', function () {

  // start router
  if (Backbone.history) {
    Backbone.history.start();
  }

});

module.exports = app;

