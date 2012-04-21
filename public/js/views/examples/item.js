//
// ## views.examples.item
//

define('views/examples/item', [
  'models/example',
  'handlebars',
  'text!templates/examples/list.html'
],

function(Model, Handlebars, template) {

  "use strict";

  var View = Backbone.View.extend({

    tagName: "li",

    events: {
     "click a": "clicked"
    },

    clicked: function(e) {
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
