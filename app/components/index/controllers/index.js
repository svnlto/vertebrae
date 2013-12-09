var app = require('../../../helpers/namespace');
var Marionette = require('backbone.marionette');

var Controller = Marionette.Controller.extend({

  initialize: function (options) {
    this.options = options || {};

    app.vent.on('route:index', function (id, action) {
      console.log(id, action);
    });

  }

});

module.exports = Controller;
