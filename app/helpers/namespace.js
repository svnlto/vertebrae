//
// ## helpers.namespace
//

// Provides instance of app object that has been extend with
// configuration object
//


define([
  'lodash',
  'backbone',
  'marionette',
  'router'
],

function (_, Backbone, Marionette, Router) {

  'use strict';

  var app = new Marionette.Application();

  app.addInitializer(function (options) {
    // prepare application layout
    if (_.has(options.app, 'components')) {
      require(['components/vertebrae-layout/index']);
    } else {
      throw new Error('no components to load');
    }
  });

  //
  // register components before starting app
  //
  app.on('initialize:before', function (options) {

    // create router instance
    app.router = new Router();


    // log to console in debug mode
    if (options.debug) {
      window.app = app;

      app.vent.on('all', function (evt) {
        console.log(evt);
      });
    }

  });

  app.on('start', function () {

    // start router
    if (Backbone.history) {
      Backbone.history.start();
    }

  });

  return app;

});

