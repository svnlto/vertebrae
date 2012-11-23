//
// ## views.base
//

define([
  'handlebars'
],

function(Handlebars) {

  "use strict";

  var SuperView = Backbone.SuperView = Backbone.View.extend({

    // ### ìnitialze
    //
    // this will call render as soon as we create an instance of our view.
    //
    initialize:  function() {
      this.render();
    },

    template: '<div></div>',

    // ### `templatize`
    //
    // The `templatize` method returns a template function generated from the
    // view's string `template` property, or uses an existing template from the
    // template cache if one is already defined.
    templatize : function() {
      if (!tplCache[this.template]) {
        tplCache[this.template] = this.template;
      }

      return tplCache[this.template];
    },

     // ### `serialize`
    //
    // The `serialize` method is responsible for taking the view's data and
    // preparing it to be used by the view's template. You can override or
    // extend this method as required in your individual view. By default, it
    // will use the model or collection assigned to the view as its data,
    // serializing it using the `toJSON` method; if your view does not have
    // a model or collection, it will just return the view object itself.
    serialize : function() {
      if (this.model || this.collection) {
        return (this.model || this.collection).toJSON();
      }

      return this;
    },

    // ### `render`
    //
    // Once a view is created, it needs to be rendered. This default render
    // method fetches the template from the template cache (or generates the
    // template and stores it in the template cache if it is not found in the
    // cache) via the `templatize` method, serializes the view's data via the
    // `serialize` method, and then sets up any named elements that were
    // specified in the `elements` property of the view.
    render : function() {
      var tpl = this.templatize(),
          data = this.serialize();

      this.$el.html(Handlebars.compile(tpl)({
        data: data
      }));

      this.postRender();

      return this;
    },

    // ## Lifecycle Methods
    //
    // These methods are stubs for implementation by your views. These methods
    // fire after their respective methods are complete.

    // ### `postRender`
    //
    // `postRender` fires just before the view's `render` method returns. Do
    // things here that require the view's basic markup to be in place, but
    // that do NOT require the view to be placed in the document
    postRender : function() {
      return this;
    }

  });

  // ## Internals

  // Global template cache
  var tplCache = {};

  return SuperView;

});
