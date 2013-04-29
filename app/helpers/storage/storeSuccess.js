//
// helpers.storage.storeSuccess
//

define([
  'helpers/namespace'
],

function (app) {

  'use strict';

  var success = function (e, jqXHR, opts, res) {
    var statusCode = jqXHR.status + '';

    var success = {
      '200' : function() { },

      '201' : function() { },

      '204' : function() { },

      'default' : function () {
        console.log('SUCCESS', jqXHR, res);
      }
    };

    (success[statusCode] ? success[statusCode] : success['default'])();

  };

  return success;

});
