//
// # main
//

require.config({
  paths: {
    text:          'libs/require/text',
    order:         'libs/require/order',
    wrap:          'libs/require/wrap',

    jquery:        'libs/jquery/jquery-min',
    underscore:    'libs/underscore/underscore-min',
    backbone:      'libs/backbone/backbone-optamd3-min'
  },
  wrapJS: {
    "handlebars": {
      attach: function(){
        var Handlebars = window.Handlebars;
            delete window.Handlebars;
            return Handlebars;
      },
      path: "libs/handlebars/handlebars"
    }
  }
});

require([
  'order!jquery',
  'order!underscore',
  'order!backbone',
  'order!helpers/handlebars',
  'helpers/namespace'
],

function($, _, Backbone) {
  require([ 'helpers/config' ], function() {
    require([ 'helpers/utils', 'router' ], function () {});
  });
});