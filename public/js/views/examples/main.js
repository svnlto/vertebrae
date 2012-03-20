//
// ## views.examples.main
//

define('views/examples/main', [
  'models/example',
  'collections/examples'
],

function(Model, Collection) {

  return {

    exampleById: function(id) {
      var example = new Model();
      example.id = id;
      example.fetch({
        success: function(model, resp) {
          require(['views/examples/detail'], function(DetailView) {
            var detailView = new DetailView({
              data: resp
            });
            detailView.render();
          });
        }
      });
    },

    exampleList: function() {
      var collection = new Collection();
      collection.fetch({
        success: function(collection, resp) {
          require(['views/examples/list'], function(ListView) {
            var view = new ListView({
              collection: new Backbone.Collection(resp)
            });
            view.render();
            $("#list").html(view.el);
          });
        }
      });
    }

  };

});
