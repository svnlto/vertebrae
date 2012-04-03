//
// # main
//

require.config({
  basePath:        'js/',
  deps:            ['main'],
  paths: {
    text:          'libs/require/text',
    order:         'libs/require/order',
    jquery:        'libs/jquery/jquery',
    underscore:    'libs/underscore/underscore',
    backbone:      'libs/backbone/backbone',
    memory:      'libs/backbone/backbone-memory',
    handlebars:    'libs/handlebars/handlebars'
  },
  priority: [
    'jquery',
    'underscore',
    'backbone',
    'memory',
    'handlebars'
  ]
});

require([
  'order!helpers/namespace',
  'order!helpers/config',
  'order!helpers/utils',
  'order!helpers/handlebars',
  'order!router'
]);
