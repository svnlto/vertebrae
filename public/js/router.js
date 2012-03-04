//
// ## router
//
define('router', [],

function() {

  var router, Router;

  Router = Backbone.Router.extend({

    routes: {
      'examples/:id'     : 'exampleById',
      '*default'         : 'examples'
    },

    examples: function() {
      require(['views/examples/main'], function(view) {
        view.exampleList();
      });
    },

    exampleById: function(id) {
      require(['views/examples/main'], function(view) {
        view.exampleList();
        view.exampleById(id);
      });
    }

  });

  router = new Router();
  Backbone.history.start();

  app.namespace.set('router', router);

  return router;

});
