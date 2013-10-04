//
// helpers.storage.storeSuccess
//

define(function () {

  'use strict';

  var success = function (e, jqXHR, opts, res) {
    var statusCode = jqXHR.status + '';

    var success = {
      'default' : function () {
        console.log('SUCCESS', jqXHR, res);
      }
    };

    (success[statusCode] ? success[statusCode] : success['default'])();

  };

  return success;

});
