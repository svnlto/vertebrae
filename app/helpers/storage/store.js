//
// ## helpers.storage.store
//

define([
  'helpers/namespace',
  'helpers/storage/storeError',
  'helpers/storage/storeSuccess'
],

function (app, storeError, storeSuccess) {

  'use strict';

  app.addInitializer(function (config) {

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

});
