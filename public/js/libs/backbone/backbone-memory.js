//
// this extends Backbone's sync method with simple in memory caching for reads.
//

define(['backbone'], function(Backbone) {

  Backbone.sync = (function(original) {

    return function(method, model, options) {

      Backbone._cache = Backbone._cache || {};

      var key = options.url || _.isFunction(model.url) ? model.url() : model.url;

      if (method == 'read') {
        if (Backbone._cache[key]) {
          return options.success.call(this, Backbone._cache[key]);
        }
        else {
          options.success = (function(original) {
            return function(response) {
              Backbone._cache[key] = response;
              original.call(this, response);
            };
          })(options.success);

          return original.call(this, method, model, options);
        }

      } else {
        return original.call(this, method, model, options);
      }
    };

  })(Backbone.sync);

});
