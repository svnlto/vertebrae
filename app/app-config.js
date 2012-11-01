//
// ## app-config
//

define([
  'helpers/namespace'
],

function (app) {

  "use strict";

  //
  // we're extending backbone model so we can use the getters to access
  // the application's properties. We can also see if the app is trying
  // to access a property which doesn't exist.
  //
  var Config = Backbone.Model.extend({
    get : function () {
      var args = _.toArray(arguments),
          ret = Backbone.Model.prototype.get.apply(this, args);

      if (typeof ret === 'undefined') {
        console.error('CONFIG missing property', args[0], ret);
      }

      return ret;
    }
  });

  var appHost  = window.location.protocol + '//';
      appHost += window.location.hostname;
      appHost += ':' + window.location.port + '/';
  //
  // application (global) variables
  //
  var application = new Config({
    name             : "vertebrae",
    apiUrl           : 'http://localhost:8000/api/',
    APP_HOST         : appHost,
    AJAX_TIMEOUT     : 5000,
    AJAX_CACHE       : true
  });

  // Exports
  var config = new Config({
    app     : application
  });

  app.namespace.setItem('config', config);

  return config;

});
