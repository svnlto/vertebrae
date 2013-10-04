//
// ## app/config
//

require.config({
  deps:            ['main'],
  paths: {
    lib:           '../lib/',
    app:           '.',
    text:          '/lib/requirejs-text/text',
    hbs:           '/lib/backbone.marionette.hbs/backbone.marionette.hbs',
    jquery:        '/lib/jquery/jquery',
    handlebars:    '/lib/handlebars/handlebars',
    lodash:        '/lib/lodash/dist/lodash',
    backbone:      '/lib/backbone/backbone',
    marionette:    '/lib/backbone.marionette/lib/backbone.marionette',
    q:             '/lib/q/q',
    unique:        '/lib/backbone.uniquemodel/backbone.uniquemodel',
    localStorage:  '/lib/backbone.localStorage/backbone.localStorage',
    cocktail:      '/lib/cocktail/Cocktail'
  },

  map: {
    '*': {
      'underscore': 'lodash'
    }
  },

  shim: {
    'backbone': {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    },

    'marionette': {
      deps: ['backbone'],
      exports: 'Backbone.Marionette'
    },

    'unique': {
      deps: ['backbone'],
      exports: 'Backbone.UniqueModel'
    },

    'localStorage': {
      deps: ['backbone'],
      exports: 'Backbone.LocalStorage'
    },

    'handlebars': {
      exports: 'Handlebars'
    }

  }

});

//
// requirejs error reporting
//
window.requirejs.onError = function (err) {
  'use strict';

  console.warn('require error: ', err.requireType);
  if (err.requireType === 'timeout') {
    console.warn('modules: ' + err.requireModules);
  }

  throw err;
};
