define([
  'backbone'
],

function (Backbone) {

  'use strict';

  return Backbone.Router.extend({

    routes: {
      ''                      : 'index',
      'index'                 : 'index',
      'index/:id'             : 'index',
      'index/:id/:action'     : 'index'
    },

    index: function (id, action) {
      require(['components/index/index'], function () {
        app.vent.trigger('route:index', id, action);
      });
    }

  });

});
