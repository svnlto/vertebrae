define([
  'backbone'
],

function (Backbone) {

  'use strict';

  var Router = Backbone.Router.extend({

    routes: {
      'index'                 : 'index',
      'index/:id'             : 'index',
      'index/:id/:action'     : 'index'
    },

    index: function (id, action) {
      app.vent.trigger('app:route:index', {
        id: id || null,
        action: action || null
      });
    }

  });

  return Router;

});
