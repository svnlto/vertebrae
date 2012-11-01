//
// ## views.example
//

define([
  'text!templates/example.html',
  'handlebars'
],

function(template, Handlebars) {

  "use strict";

  return Backbone.View.extend({

    id: 'example',
    template: template

  });

});
