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
    'underscore',
    'backbone'
  ]
});

require([
  'helpers/namespace',
  'helpers/config',
  'helpers/utils',
  'order!helpers/handlebars',
  'router'
], function() {});
