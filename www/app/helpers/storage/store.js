var storeError = require('./storeError');
var storeSuccess = require('./storeSuccess');
var app = require('../namespace');
var $ = require('jquery');

app.addInitializer(function (config) {

  $.ajaxSetup({
    cache : config.ajax.cache,
    timeout: config.ajax.timeout,
    dataType: config.ajax.dataType,
    async: config.ajax.contentType
  });

  $(global).ajaxStart(function () {
    app.vent.trigger('ajax:start');
  });

  $(global).ajaxStop(function () {
    app.vent.trigger('ajax:stop');
  });

  $(global).ajaxError(storeError);
  $(global).ajaxSuccess(storeSuccess);

});

module.exports = app;
