var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var View = require('../views/index');

var Controller = Marionette.Controller.extend({

  initialize: function (options) {

    var self = this;
    this.options = options || {};

    app.vent.on('route:index', function (id, action) {
      console.log(id, action);
      self.view();
    });

  },

  view: function () {

    'use strict';

    var view = new View({
      model: new Backbone.Model({
        name: 'test'
      })
    });

    app.regions.section.show(view);

  }

});

module.exports = Controller;
