//
// ## views.example
//

define('views/example', [
  'models/example',
  'text!templates/example.html'
],

function(Model, template) {

  var ItemView = Backbone.View.extend({
    el: $('#content'),

    render: function() {
      this.model = new Model();

      var content = Handlebars.compile(template)({
        data: this.model.toJSON()
      });

      return this.$el.html(content);
    }
  });

  app.namespace.setItem('views.home', ItemView);

  return ItemView;

});
