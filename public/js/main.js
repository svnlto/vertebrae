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
    handlebars:    'libs/handlebars/handlebars'
  },
  priority: [
    'jquery',
    'underscore',
    'backbone',
    'handlebars'
  ]
});

require([
  'helpers/namespace',
  'helpers/config',
  'helpers/utils',
  'helpers/handlebars',
  'router'
]);
