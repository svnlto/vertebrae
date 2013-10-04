//
//  helpers.storage.storeError
//

define(function () {

  'use strict';

  var errors = function (e, jqXHR) {
    var statusCode = jqXHR.status + '';
    var errorObj = null;

    try {
      errorObj = jQuery.parseJSON(jqXHR.responseText);
    }
    catch (e) {}

    var errors = {
      'default' : function () { }
    };

    (errors[statusCode] ? errors[statusCode] : errors['default'])();
  };

  return errors;

});
