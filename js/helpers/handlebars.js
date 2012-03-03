//
// ## helpers/config
//

define('helpers/handlebars', [
  'wrap!handlebars'
],

function(Handlebars) {

  //
  // place {{ debug }}
  //
  Handlebars.registerHelper('debug', function(optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);

    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    };
  });

});
