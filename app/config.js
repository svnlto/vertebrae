require.config({
  deps:            window.mocha ? ['../tests/app/config'] : ['main'],
  paths: {
    lib:           '../lib/',
    tests:         '../tests',
    app:           '.',
    text:          '/lib/require-text/text',
    jquery:        '/lib/jquery/jquery',
    handlebars:    '/lib/handlebars/handlebars',
    underscore:    '/lib/lodash/lodash',
    backbone:      '/lib/backbone/backbone'
  },

  shim: {
    'underscore': {
      exports: '_'
    },

    'handlebars': {
      exports: 'Handlebars'
    },

    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});
