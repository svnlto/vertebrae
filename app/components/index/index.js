//
// # index.index
//

define([
  'helpers/namespace',
  'marionette',
  './controllers/index'
],

function (app, Marionette, AppController) {

  'use strict';

  app.module('index', function () {

    //
    // module lifecycle
    //
    this.addInitializer(function (options) {
      this._controller = new AppController(options);

      app.vent.on('route:index', function (a, b) {
        this._controller.index(a, b);
      }, this);
    });

  });

});
