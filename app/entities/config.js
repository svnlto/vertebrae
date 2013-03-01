//
// # entities.config
//
define([
  'helpers/namespace',
  'marionette',
  'entities/base/model'
],

function(app, Marionette, BaseModel) {

  'use strict';

  var entities = {};

  entities.ConfigModel = BaseModel.extend({
    defaults: {
      apiUrl: 'http://localhost/',
      ajaxTimeout: 5000,
      ajaxCache: true
    }
  });

  var API = {
    getConfig: function() {
      return new entities.ConfigModel();
    }
  };

  app.reqres.addHandler("entities:config", function() {
    return API.getConfig();
  });

});
