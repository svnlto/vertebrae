/*global Handlebars:true */

var Handlebars = require('hbsfy/runtime');


//
// place {{ debug }}
//
Handlebars.registerHelper('debug', function (optionalValue) {

  'use strict';

  console.log('Current Context');
  console.log('====================');
  console.log(this);

  if (optionalValue) {
    console.log('Value');
    console.log('====================');
    console.log(optionalValue);
  }
});

module.exports = Handlebars;
