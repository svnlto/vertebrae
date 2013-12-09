var storeError = require('./storeError');
var storeSuccess = require('./storeSuccess');
var app = require('../namespace');

app.addInitializer(function (config) {

  'use strict';

  $.ajaxSetup({
    cache : config.ajaxCache,
    timeout: config.ajaxTimeout
  });

  $(document).ajaxStart(function () {
    app.vent.trigger('ajax:start');
  });

  $(document).ajaxStop(function () {
    app.vent.trigger('ajax:stop');
  });

  $(document).ajaxError(storeError);
  $(document).ajaxSuccess(storeSuccess);

});

module.exports = app;
