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

    routes: {},

  });

  router = new Router();

  app.namespace.setItem('router', router);

  Backbone.history.start();

  return router;

});
