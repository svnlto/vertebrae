'use strict';

var Backbone = require('backbone');

var Router = Backbone.Router.extend({

  routes: {
    'index'                 : 'index',
    'index/:id'             : 'index',
    'index/:id/:action'     : 'index',
    '*defaults'                      : 'index'
  },

  index: function (id, action) {
    app.vent.trigger('route:index', id, action);
  }

});

module.exports = Router;
