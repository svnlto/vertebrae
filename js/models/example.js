//
// ## models.example
//

define('models/example', [],

function() {

  var Model = Backbone.Model.extend({
    defaults: {
      items: [
        "example0",
        "example1",
        "example2",
        "example3",
        "example4",
        "example5",
        "example6",
      ]
    }
  });

  app.namespace.setItem('models.example', Model);

  return Model;

});
