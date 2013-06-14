//
// ## helpers.mvc.model
//

define([
  'backbone'
],

function (Backbone) {

  "use strict";

  var SuperModel = Backbone.SuperModel = Backbone.Model.extend({
    idAttribute: 'id'
  });

  return SuperModel;

});
