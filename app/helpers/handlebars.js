//
// ## helpers/config
//

define([
  'handlebars'
],

function (Handlebars) {

  "use strict";

  //
  // place {{ debug }}
  //
  Handlebars.registerHelper('debug', function (optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);

    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    }
  });

});
