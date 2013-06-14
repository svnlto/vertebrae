//
//  helpers.storage.storeError
//

define([
  'helpers/namespace'
],

function (app) {

  'use strict';

  var errors = function (e, jqXHR, req, err) {
    var statusCode = jqXHR.status + '',
        url = req.url,
        type =  req.type,
        errorObj = null;

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
