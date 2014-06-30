var Backbone = require('backbone');
require('barf');

var BaseRouter = Backbone.Router.extend({

  before: {
    '*any': function (fragment, args, next) {
      next();
    }
  },

  after: {
    '*any': function (fragment, args, next) {
      next();
    }
  }

});

module.exports = BaseRouter;

