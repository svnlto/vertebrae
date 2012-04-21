//
// ## helpers.namespace
//

define('helpers/namespace', [], function() {

  "use strict";

  var app = window.app = window.app || {},
      namespace = {};

  app.namespace = namespace;

  // Sets object in namespace
  namespace.set = function (nsString, object) {
    var parts = [],
        parent = app,
        len,
        i;

    if (typeof nsString !== 'string') {
      return;
    }

    parts = nsString.replace( /\//g,'.').split('.');

    if (parts[0] === "app") {
      parts = parts.slice(1);
    }

    for (i = 0, len = parts.length; i < len; i += 1) {
      if (typeof parent[parts[i]] === "undefined") {
        parent[parts[i]] = (i === parts.length - 1) ? object: {};
      }
      parent = parent[parts[i]];
    }
    return object;
  };


  // Gets object from namespace
  namespace.get = function (nsString) {
    var parts = [],
        len,
        parent = app,
        i;

    if (typeof nsString !== 'string') {
      return;
    }
    parts = nsString.replace( /\//g,'.').split('.');

    for (i = 0, len = parts.length; i < len; i += 1) {
      if (!parent) {
        return;
      }

      parent = parent[parts[i]];
    }

    return parent;
  };


  // Remove object from namespace
  namespace.del = function (nsString) {
    var nsArr = nsString.split('.'),
        parent,
        child = window.app;

    for (var i = 0, len = nsArr.length; i < len; i++) {
      parent = child;
      child = child[nsArr[i]];

      if (i === len - 1) {
        delete parent[nsArr[i]];
      }
    }
  };

  return namespace;

});
