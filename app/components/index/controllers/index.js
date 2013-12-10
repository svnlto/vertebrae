var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var View = require('../views/index');

var Controller = Marionette.Controller.extend({

  initialize: function (options) {
    this.options = options || {};
  },

  view: function (id, action) {

    'use strict';

    var view = new View({
      model: new Backbone.Model({
        name: 'test',
        id: id,
        action: action
      })
    });

    app.regions.section.show(view);

  }

});

module.exports = Controller;
