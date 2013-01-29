//
// ## router
//

define([
  'helpers/namespace'
],

function(app) {

  "use strict";

  var router, Router;

  Router = Backbone.Router.extend({

    routes: {
      '*default' :  'index'
    },
    
    index: function() {
      console.log('default route');
    }

  });

  router = new Router();

  app.namespace.setItem('router', router);

  Backbone.history.start();

  return router;

});
