//
// # layout.index
//

define([
  'helpers/namespace',
  './controllers/index'
],

function (app, LayoutController) {

  'use strict';

  return app.module('layout', function () {

    this.addInitializer(function (options) {
      this._controller = new LayoutController(
        options.app.components['vertebrae-layout']
      );
    });

  });

});
