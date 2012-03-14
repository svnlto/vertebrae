//
// # main
//

require.config({
  paths: {
    text:          'libs/require/text',
    order:         'libs/require/order',
    jquery:        'libs/jquery/jquery-min',
    underscore:    'libs/underscore/underscore',
    backbone:      'libs/backbone/backbone',
    handlebars:    'libs/handlebars/handlebars'
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
