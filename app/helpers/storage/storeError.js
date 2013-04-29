//
//  helpers.storage.storeError
//

define([
  'helpers/namespace'
],

function(app) {

  'use strict';

  var errors = function (e, jqXHR, req, err) {
    var statusCode = jqXHR.status + '',
        url = req.url,
        type =  req.type,
        errorObj = null;

    try {
      errorObj = jQuery.parseJSON(jqXHR.responseText);
    }
    catch(e) {}

    var errors = {

      '400' : function() { },

      '401' : function() { },

      '403' : function() { },

      '404' : function() { },

      '422' : function () {
        console.log('ERROR', '422 Error');
      },

      '500' : function () {
        console.log('ERROR', '500 Error');
      },

      '503' : function() { },

      'default' : function () { }
    };

    (errors[statusCode] ? errors[statusCode] : errors['default'])();
  };

  return errors;

});
