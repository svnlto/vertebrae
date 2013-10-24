//
// # bingo.index
//

define([
  'helpers/namespace',
  'marionette',
  './controllers/index'
],

function (app, Marionette, AppController) {

  'use strict';

  return app.module('index', function () {

    // module options
    this.startWithParent = false;

    //
    // module lifecycle
    //
    this.addInitializer(function (options) {
      this._controller = new AppController(options);
    });

    //
    // module events
    //
    this.on('before:start', function () {

      this.listenTo(app.vent, 'app:route:index', function (data) {
        this._controller.index(data);
      }, this);

    });

  });

});
