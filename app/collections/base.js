//
// ## collections.base
//

define(function() {

  "use strict";

  var SuperCollection = Backbone.SuperCollection = Backbone.Collection.extend({

    fetch : function(opts) {
      var fetch = _.bind(Backbone.Collection.prototype.fetch, this),
          dfd = $.Deferred();

      this.trigger('fetching');

      fetch(opts).done(_.bind(function() {
        this.trigger('change');
        dfd.resolve();
      }, this));

      return dfd;
    },

    parse: function(res, xhr) {
      return res;
    },

    next: function(model) {
      return this.at((this.indexOf(model) + 1) % _.size(this));
    },

    prev: function(model) {
      var index = this.indexOf(model) - 1;
      return this.at(index > -1 ? index : _.size(this) - 1);
    }

  });

  return SuperCollection;

});
