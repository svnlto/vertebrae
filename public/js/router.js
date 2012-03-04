//
// ## router
//
define('router', [],

function() {

  var router, Router;

  Router = Backbone.Router.extend({

    routes: {
      '*default'         : 'examples'
    },

    examples: function() {
      require(['views/examples/main'], function() {});
    },

    example: function(id) {
      require(['views/examples/main'], function(id) {});
    }

  });

  router = new Router();
  Backbone.history.start();

  app.namespace.set('router', router);

  return router;

});
