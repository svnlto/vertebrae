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

  $(document).ajaxStart(function() {
    app.vent.trigger('ajax:start');
  });

  $(document).ajaxStop(function() {
    app.vent.trigger('ajax:stop');
  });

});
