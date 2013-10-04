//
// # main
//

define([
  'helpers/namespace',
  'models/config',
  'helpers/storage/store',
  'helpers/handlebars'
],

function (app, Config) {

  'use strict';

  app.start(new Config().toJSON());

});

