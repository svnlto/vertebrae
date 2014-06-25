var BaseRouter = require('./helpers/mvc/router');

var Router = BaseRouter.extend({

  routes: {
    ''                    : 'app',
    '*defaults'           : 'app'
  },

  app: function () {
    app.vent.trigger('app');
  }

});

module.exports = Router;

