var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

module.exports = Marionette.Controller.extend({

  initialize: function (options) {

    this.options = options || {};

    // create layout object passing in a template string
    var Layout = Marionette.LayoutView.extend({
      template:  function () {
        return options.template;
      }
    });

    // assign a region to the documents container
    this.container = new Backbone.Marionette.Region({
      el: '#content'
    });

    // bind layout to container element
    this.container.show(new Layout());

  }

});

