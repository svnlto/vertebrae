//
// ## helpers.mvc.mixins.localStorage
//

define([
  'backbone',
  'unique',
  'localStorage'
],

function (Backbone) {

  'use strict';

  var localStorageMixin = {

    initialize: function (options) {

      _.bindAll(this, '_enableLocalStorage');

      this.options = options || {};
      this._enableLocalStorage();

      Backbone.UniqueModel(this, this.options.name, 'localStorage');
    },

    _enableLocalStorage: function () {
      this.localStorage =  new Backbone.LocalStorage('' + this.options.name + '');
    }

  };

  return localStorageMixin;

});
