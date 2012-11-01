require.config({
  deps:            window.mocha ? ['../tests/app/config'] : ['main'],
  paths: {
    lib:           '../lib/',
    tests:         '../tests',
    app:           '.',
    text:          '/lib/require/text',
    jquery:        '/lib/jquery/jquery-min',
    handlebars:    '/lib/handlebars/handlebars',
    underscore:    '/lib/lodash/lodash-0.4.1',
    backbone:      '/lib/backbone/backbone-0.9.2'
  },

  shim: {
    'underscore': {
      attach: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});
