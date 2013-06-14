//
// ## router
//

define([
  'helpers/namespace',
  'marionette'
],

function(app, Marionette) {

  'use strict';

  app.on('initialize:before', function() {

    var Router = Backbone.Router.extend({

      routes: {
        '*default' :  'index'
      },

      index: function() {
        console.log('default route');
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
