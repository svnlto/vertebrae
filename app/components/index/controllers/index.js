//
// # components.bingo.controllers.index
//

define([
  'helpers/namespace',
  'marionette'
],

function (app, Marionette) {

  'use strict';

  var Controller = Marionette.Controller.extend({

    initialize: function (options) {
      this.options = options || {};
    },

    index: function (data) {
      console.log('index route', data);
    }

  });

  return Controller;

});
