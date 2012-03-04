//
// ## views.examples.item
//

define('views/examples/item', [
  'models/example',
  'wrap!handlebars',
  'text!templates/examples/list.html'
],

function(Model, Handlebars, template) {

  var View = Backbone.View.extend({

    tagName: "li",

    events: {
     "click a": "clicked"
    },

    clicked: function(e) {
      // console.log('demo on how to get a refence to the current model:');
      // console.log(this.model);
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
