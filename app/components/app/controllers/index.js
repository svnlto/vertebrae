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
    }

  });

  return Controller;

});
