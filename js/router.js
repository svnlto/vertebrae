//
// ## router
//
define('router', [],

function() {

  var router, Router;

  Router = Backbone.Router.extend({

    routes: {
      '*default'         : 'example'
    },

    example: function() {
      require(['views/example'], function(View) {
        var view = new View();
        view.render();
      });
    }

  });

  router = new Router();
  Backbone.history.start();

  app.namespace.setItem('router', router);

  return router;

});
