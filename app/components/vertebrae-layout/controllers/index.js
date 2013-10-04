//
// # controllers.layout
//

define([
  'helpers/namespace',
  'marionette',
  'lodash',
  'backbone',
  'q'
],

function (app, Marionette, _, Backbone, Q) {

  'use strict';

  var Controller = Marionette.Controller.extend({

    initialize: function (options) {
      this.options = options || {};
      this.layout = options.config.template || 'components/vertebrae-layout/templates/index';

      // wait till promises have been resolved, then execute
      this._addLayout()
      .then(function () {
        app.vent.trigger('layout:ready');
      }).fail(function (err) {
        throw new Error(err);
      });

    },

    _addLayout: function () {
      var dfd = Q.defer();

      // require layout
      require(['hbs!' + this.layout], _.bind(function (layout) {

        try {

          // create layout object passing in a template string
          var Layout = Marionette.Layout.extend({
            template: layout
          });

          // assign a region to the documents container
          this.container = new Backbone.Marionette.Region({
            el: '#container'
          });

          // bind layout to container element
          this.container.show(new Layout());

          if (this.container instanceof Marionette.Region) {
            dfd.resolve();
          }

        } catch (e) {
          console.log(e);
          dfd.reject(e);
        }

      }, this));

      return dfd.promise;
    }

  });

  return Controller;

});
