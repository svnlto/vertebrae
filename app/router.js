//
// ## router
//

define([
  'backbone',
  'helpers/namespace',
  'marionette'
],

function (Backbone, app) {

  'use strict';

  app.on('initialize:before', function () {

    var Router = Backbone.Router.extend({

      routes: {
        '*default' :  'index'
      },

      index: function () {
        require(['controllers/index'], function(Controller) {
          new Controller();
        });
      }

    });

    app.router = new Router();

  });

  app.on('start', function () {
    if (Backbone.history) {
      Backbone.history.start();
    }
  });

  return app;

});
