//
// ## helpers.namespace
//

define([
  'marionette',
  'models/config'
],

function(Marionette, ConfigModel) {

  'use strict';

  var config = new ConfigModel(),
      app = new Marionette.Application();

  if (config.get('debug')) {
    window.app = app;
  }

  return app;

});
