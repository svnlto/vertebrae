//
// # main
//

require([
  'helpers/namespace',
  'router',
  'models/config'
],

function(app, router, Config) {

  'use strict';

  var config = new Config(),
      options = config.toJSON();

  app.reqres.setHandler('config', function() {
    return options;
  });

  app.start(options);

});
