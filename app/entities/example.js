//
// # entities.example
//
define([
  'helpers/namespace',
  'marionette',
  'entities/base/model',
  'entities/base/collection',
  'entities/config'
],

function(app, Marionette, BaseModel, BaseCollection) {

  'use strict';

  var entities = {};

  entities.SomeModel = BaseModel.extend(),

  entities.SomeResourceCollection = BaseCollection.extend({
    model: entities.SomeModel,
    url: app.request('entities:config').get('apiUrl')
  });

  var API = {
    getsomeResource: function() {
      var collection = new entities.SomeResourceCollection();
      collection.fetch();

      return collection;
    }
  };

  app.reqres.addHandler("entities:example", function() {
    return API.getsomeResource();
  });

});
