//
// ## helpers/config
//

define('helpers/config', [], function() {

  config = {
    "name": "vertebrae",
    "version": "0.0.0",
    "environment": ""
  };

  var appConfig = {
    name : config.name,
    version : config.version,
    api : config.environment
  };

  //
  // expose appconfig under the app.config namespace
  //
  app.namespace.setItem('config', appConfig);

  return appConfig;

});
