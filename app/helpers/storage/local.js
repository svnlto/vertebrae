//
// ## helpers.storage.local
//

// Provides a localStorage adapter to the application.
//
// Available methods are:
//
// ```
// adapter.setItem()
// adapter.getItem()
// adapter.removeItem()
// adapter.clear()
// ```

define(function () {

  'use strict';

  var localStorage = {

    setItem : function (name, item) {
      if (typeof item === 'object') {
        window.localStorage.setItem(name, window.JSON.stringify(item));
      } else {
        window.localStorage.setItem(name, item);
      }
    },

    getItem : function (name) {
      var item = window.localStorage.getItem(name);

      if (typeof item !== 'undefined') {
        try {
          item = window.JSON.parse(item);
        } catch (e) {}
      }

      return item;
    },

    removeItem : function (name) {
      window.localStorage.removeItem(name);
    },

    clear : function () {
      window.localStorage.clear();
    }

  };

  return localStorage;

});
