require.config({
  paths: {
    'jquery':               '/lib/jquery/jquery-min',
    'backbone':             '/lib/backbone/backbone-0.9.2',
    'underscore':           '/lib/lodash/lodash-0.4.1',
    'mocha':                '/tests/lib/mocha',
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
    'mocha': {
      exports: 'mocha'
    },
    'chai': {
      deps: ['mocha'],
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
  'mocha',
  'chai',
  'sinon'
], function (Backbone, _, jquery, mocha, chai, sinon) {

  'use strict';

  window.expect = chai.expect;
  mocha.setup({
    ui: 'bdd',
    reporter: mocha.reporters.HTML,
    ignoreLeaks: true
  });

  require([
    'tests/app/models/base',
    'tests/app/models/example',

    'tests/app/collections/base',
    'tests/app/collections/example',

    'tests/app/views/base',
    'tests/app/views/example'
  ], function () {

    // Add global reference to testrunner so scrapers can access it and
    // listen to its events.
    window.mochaphantom = {
      testrunner: mocha.run(),
      complete: false
    };
  });

});
