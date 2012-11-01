//
// ## models.base
//

define(function() {

  "use strict";

  var SuperModel = Backbone.SuperModel = Backbone.Model.extend({
    idAttribute: '_id'
  });

  return SuperModel;

});
