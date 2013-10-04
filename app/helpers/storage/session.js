//
// ## helpers.storage.session
//

// Provides a sessionStorage adapter to the appication.
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

  var sessionStorage = {

    setItem : function (name, item) {
      if (typeof item === 'object') {
        window.sessionStorage.setItem(name, window.JSON.stringify(item));
      } else {
        window.sessionStorage.setItem(name, item);
      }
    },

    getItem : function (name) {
      var item = window.sessionStorage.getItem(name);

      if (typeof item !== 'undefined') {
        try {
          item = window.JSON.parse(item);
        } catch (e) {
          console.error(e.message);
          return;
        }
      }

      return item;
    },

    removeItem : function (name) {
      window.sessionStorage.removeItem(name);
    },

    clear : function () {
      window.sessionStorage.clear();
    }

  };

  return sessionStorage;

});
