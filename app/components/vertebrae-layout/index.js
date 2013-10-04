//
// # layout.index
//

define([
  'helpers/namespace',
  './controllers/index'
],

function (app, LayoutController) {

  'use strict';

  app.module('layout', function () {

    // module options
    this.startWithParent = false;

    this.addInitializer(function (options) {
      this._controller = new LayoutController(
        options.app.components['vertebrae-layout']
      );
    });

  });

});
