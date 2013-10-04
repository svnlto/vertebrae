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
  'models/config',
  'router'
],

function (_, Backbone, Marionette, Config, Router) {

  'use strict';

  var app = new Marionette.Application();

  //
  // set global request handler exposing app config
  //
  app.reqres.setHandler('config', function () {
    return new Config().toJSON();
  });

  //
  // register components before starting app
  //
  app.on('initialize:before', function (options) {

    // create router instance
    //
    app.router = new Router();

    // check for registred components
    if (_.has(options.app, 'components')) {

      _.each(options.app.components, function (component) {

        require([component.path + '/index']);

      });

    } else {
      throw new Error('no components to load');
    }

    // log to console in debug mode
    if (app.request('config').debug) {
      window.app = app;

      app.vent.on('all', function (evt) {
        console.log(evt);
      });
    }


  });

  // in case we'd need a router.
  app.on('initialize:before', function () {
    if (Backbone.history) {
      Backbone.history.start();
    }
  });

  return app;

});

