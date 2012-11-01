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
      'examples'        : 'examples',
      'examples/:id'    : 'examples',
      '*default'        : 'examples'
    },

    examples: function(id) {
      var args = _.toArray(arguments);
      require([
        'collections/graphics',
        'views/detail',
        'views/asset-meta',
        'views/list'
      ],
      function(Collection, DetailView, MetaView, ListView) {
        var collection = new Collection(),
            metaView = new MetaView();

        collection.fetch();
        collection.on('reset', function(data) {
          var detailView = new DetailView({
            type: 'image'
          }),
          listView = new ListView({
            resource: 'graphics',
            collection: data
          });

          if (!args.length) {
            detailView.model = data.first().toJSON();
            metaView.model = data.first().toJSON();
          } else {
            detailView.model = data.get(args[0]).toJSON();
            metaView.model = data.get(args[0]).toJSON();
          }

          detailView.render();
          metaView.render();

          $('#thumbs').html(listView.el);
        });

      });
    }

  });

  router = new Router();

  app.namespace.setItem('router', router);

  Backbone.history.start();

  return router;

});
