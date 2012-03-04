//
// ## helpers/config
//

define('helpers/config', [], function() {

  config = {
    "name": "vertebrae",
    "version": "0.0.0",
    "dataSource": "http://localhost:8000/"
  };

  var appConfig = {
    name : config.name,
    version : config.version,
    api : config.dataSource
  };

  app.namespace.set('config', appConfig);

  return appConfig;

});
