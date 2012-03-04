//
// ## views.examples.item
//

define('views/examples/item', [
  'models/example',
  'collections/examples',
  'wrap!handlebars',
  'text!templates/examples/list.html',
  'views/examples/detail'
],

function(Model, Collection, Handlebars, template, DetailView) {

  var View = Backbone.View.extend({

    tagName: "li",

    events: {
     "click a": "clicked"
    },

    clicked: function(e) {
      var detailView = new DetailView({
        data: this.model.toJSON()
      });
      detailView.render();
    },

    render: function() {
      var content = Handlebars.compile(template)({
        data: this.model.toJSON()
      });
      return this.$el.append(content);
    }
  });

  app.namespace.set('views.examples.item', View);

  return View;

});
