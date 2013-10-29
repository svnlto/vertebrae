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

    // module options
    this.startWithParent = true;

    //
    // module lifecycle
    //
    this.addInitializer(function (options) {
      this._controller = new AppController(options);

      app.module('layout').start(options);

      this.listenTo(app.vent, 'layout:ready', function () {
        app.module('index').start(options);
        // .....
        // load applicaton components here
        // .....
      });

    });

  });

});
