var $ = require('jquery');

var errors = function (e, jqXHR) {

  var statusCode = jqXHR.status + '';
  var errorObj = null;

  try {
    errorObj = $.parseJSON(jqXHR.responseText);
  }
  catch (e) {}

  var errors = {
    'default' : function () { }
  };

  (errors[statusCode] ? errors[statusCode] : errors['default'])();
};

module.exports = errors;
