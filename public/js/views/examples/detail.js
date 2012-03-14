//
// ## views.examples.detail
//

define('views/examples/detail', [
  'text!templates/examples/detail.html',
  'handlebars'
],

function(template, Handlebars) {

  var View = Backbone.View.extend({
    el: '#detail',

    render: function() {

      var content = Handlebars.compile(template)({
        data: this.options.data
      });

      return this.$el.html(content);
    }
  });

  return View;

});
