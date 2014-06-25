var Marionette = require('backbone.marionette');

var Controller = Marionette.Controller.extend({

  initialize: function (options) {
    this.options = options || {};
  }

});

module.exports = Controller;

