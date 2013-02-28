require.config({
  paths: {
    'jquery':               '/lib/jquery/jquery-min',
    'backbone':             '/lib/backbone/backbone-0.9.2',
    'underscore':           '/lib/lodash/lodash-0.4.1',
    'chai':                 '/tests/lib/chai',
    'sinon':                '/tests/lib/sinon'
  },
  shim: {
    'underscore': {
      deps: [],
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
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
  'underscore',
  'backbone',
  'chai',
  'sinon'
], function (jquery, _, Backbone, chai, sinon) {

  'use strict';

  window.expect = chai.expect;
  window.mocha.setup({
    ui: 'bdd',
    reporter: window.mocha.reporters.HTML,
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
