//
// ## models.example
//

define('models/example', [], function() {

  var Model = Backbone.Model.extend({
    url: function() {
      return app.config.api + 'examples/' + this._id ;
    }
  });

  app.namespace.set('models.example', Model);

  return Model;

});
