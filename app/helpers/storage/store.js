//
// ## helpers.storage.store
//

define([
  'helpers/namespace',
  'entities/config'
],

function (app) {

  "use strict";

  $.ajaxSetup({
    cache : app.request('entities:config').get('ajaxCache'),
    timeout: app.request('entities:config').get('ajaxCache')
  });

  $('body').ajaxStart(function() {
    app.vent.trigger('ajax:start');
  });

  $('body').ajaxStop(function() {
    app.vent.trigger('ajax:stop');
  });

});
