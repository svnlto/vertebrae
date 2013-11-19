//
// # app.index
//

define([
  'helpers/namespace',
  'marionette',
  './controllers/index'
],

function (app, Marionette, AppController) {

  'use strict';

  return app.module('app', function () {
    this.addInitializer(function (options) {
      this._controller = new AppController(options);
    });

  });

});
