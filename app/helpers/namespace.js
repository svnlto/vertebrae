'use strict';
/*global app:true */
var Marionette = require('backbone.marionette');
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Router = require('../router');
var app = new Marionette.Application();

app.on('initialize:before', function (options) {

  // create router instance
  app.router = new Router();
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

