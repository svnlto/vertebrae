var Backbone = require('backbone');
var _ = require('lodash');

var SuperCollection = Backbone.SuperCollection = Backbone.Collection.extend({

  next: function (model) {
    return this.at((this.indexOf(model) + 1) % _.size(this));
  },

  prev: function (model) {
    var index = this.indexOf(model) - 1;
    return this.at(index > -1 ? index : _.size(this) - 1);
  }

});

module.exports = SuperCollection;
