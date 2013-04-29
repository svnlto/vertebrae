require.config({
  paths: {
    'chai':                 '/tests/lib/chai',
    'sinon':                '/tests/lib/sinon'
  },
  shim: {
    'chai': {
      exports: 'expect'
    },
    'sinon': {
      exports: 'sinon'
    }
  }

});

require([
  'jquery',
  'lodash',
  'backbone',
  'chai',
  'sinon'
],

function (jquery, _, Backbone, chai, sinon) {

  'use strict';

  window.expect = chai.expect;
  window.mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true
  });

  require([
    'tests/app/models/base',
    'tests/app/collections/base',
    'tests/app/views/base'
  ], function () {
    window.mocha.run();
  });

});
