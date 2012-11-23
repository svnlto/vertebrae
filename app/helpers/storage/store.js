//
// ## helpers.storage.store
//

define([
  'helpers/namespace',
  'app-config'
],

function (app) {

  "use strict";

  $.ajaxSetup({
    cache : app.config.get('app').get('AJAX_CACHE'),
    timeout: app.config.get('app').get('AJAX_TIMEOUT')
  });

  $('body').ajaxStart(function() {
    app.get('ajax').trigger('start');
  });

  $('body').ajaxStop(function() {
    app.get('ajax').trigger('stop');
  });

});
