//
// ## controllers.index
//

define([
  'helpers/namespace',
  'marionette'
],

function (app, Marionette) {

  "use strict";

  var controller = Marionette.Controller.extend({

    initialize: function (options) {
      this.options = options || {};
      this.index();
    },

    index: function () {
      console.log('index controller');
    }
  });

  return controller;

});
