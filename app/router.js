define([
  'backbone'
],

function (Backbone) {

  'use strict';

  return Backbone.Router.extend({

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

});
