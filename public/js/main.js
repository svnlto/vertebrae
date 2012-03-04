//
// # main
//

require.config({
  paths: {
    text:          'libs/require/text',
    order:         'libs/require/order',
    wrap:          'libs/require/wrap',
    jquery:        'libs/jquery/jquery-min',
    underscore:    'libs/underscore/underscore',
    backbone:      'libs/backbone/backbone'
  },
  wrapJS: {
    "underscore": {
      attach: "_",
      path: 'underscore'
    },
    "backbone": {
      attach: "Backbone",
      deps: ['underscore'],
      path: 'backbone'
    },
    "handlebars": {
      attach: function() {
        var Handlebars = window.Handlebars;
            delete window.Handlebars;
            return Handlebars;
      },
      path: "libs/handlebars/handlebars"
    }
  },
  priority: [
    'jquery',
    'helpers/namespace'
  ]
});

require([
  'wrap!underscore',
  'wrap!backbone',
], function($, _, Backbone) {
  require([
    'helpers/config',
    'helpers/utils',
    'order!helpers/handlebars',
    'router'
  ], function() {});
});
