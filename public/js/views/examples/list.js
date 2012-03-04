//
// ## views.examples.list
//

define('views/examples/list', [
  'views/examples/item'
],

function(ItemView) {

  var View = Backbone.View.extend({

    tagName: "ul",

    initialize: function() {
      _.bindAll(this, 'renderItem');
    },

    renderItem: function(model) {
      var itemView = new ItemView({ model: model });
      itemView.render();

      this.$el.append(itemView.el);
    },

    render: function() {
      this.collection.each(this.renderItem);
    }
  });

  app.namespace.set('views.examples.list', View);

  return View;

});

