//     Backbone-Memory.js 0.1.0
//     (c) 2012 Sven Lito
//     Licensed under the MIT license.

  "use strict";

(function (factory) {

  if ( typeof define === 'function' && define.amd) {
    define(['backbone'], factory);
  } else {
    factory(this.Backbone);
  }

}(function(Backbone) {

  Backbone.sync = (function(original) {

    return function(method, model, options) {
      var key = options.url || _.isFunction(model.url) ? model.url() : model.url;
      
      Backbone._cache = Backbone._cache || {};

      if (method === 'read') {
        if (Backbone._cache[key]) {
          return options.success.call(this, Backbone._cache[key]);
        }
        else {
          options.success = (function(original) {
            return function(response) {
              Backbone._cache[key] = response;
              original.call(this, response);
            };
          }(options.success));
          return original.call(this, method, model, options);
        }
      } else {
        return original.call(this, method, model, options);
      }
    };

  }(Backbone.sync));

}));
