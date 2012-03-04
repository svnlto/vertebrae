//
// ## models.example
//

define('models/example', [], function() {

  var Model = Backbone.Model.extend({
    urlRoot : '/examples'
  });

  app.namespace.set('models.example', Model);

  return Model;

});
