//
// ## helpers.namespace
//

define([
  'backbone'
],

function (Backbone) {

  "use strict";

  var con = window.console;

  // Sets object in namespace
  var setItem = function (nsString, object) {
    var parts = [],
        parent = global;

    if (nsString.indexOf('app.') === -1) {
      nsString = 'app.' + nsString;
    }

    if (typeof nsString !== 'string') {
      return;
    }

    parts = nsString.replace( /\//g,'.').split('.');

    if (!!getItem(nsString)) {
      removeItem(nsString);
    }

    for (var i = 0, len = parts.length; i < len; i += 1) {
      if (typeof parent[parts[i]] === "undefined") {
        parent[parts[i]] = (i === parts.length - 1) ? object: {};
      }
      parent = parent[parts[i]];
    }

    return object;
  },


  // Gets object from namespace
  getItem = function (nsString) {
    var parts = [],
        parent = global;

    if (typeof nsString !== 'string') {
      return;
    }

    if (nsString.indexOf('app.') === -1) {
      nsString = 'app.' + nsString;
    }

    parts = nsString.replace( /\//g,'.').split('.');

    for (var i = 0, len = parts.length; i < len; i += 1) {
      if (!parent) {
       return;
      }
      parent = parent[parts[i]];
    }

    return parent;
  },


  // Remove object from namespace
  removeItem = function (nsString) {
    var nsArr, parent, child = global;

    if (nsString.indexOf('app.') === -1) {
      nsString = 'app.' + nsString;
    }

    if (con && con.log) {
      console.log('NAMESPACE remove "%s"', nsString);
    }

    nsArr = nsString.split('.');

    for (var i = 0, len = nsArr.length; i < len; i++) {
      parent = child;
      child = child[nsArr[i]];

      if (i === len - 1) {
        delete parent[nsArr[i]];
      }
    }
  };

  // global stores the application's namespaced objects
  // and avoids having to bind it to the window object
  var global = {
    app : {
      namespace : {
        setItem :    setItem,
        getItem :    getItem,
        removeItem : removeItem
      }
    }
  };

  // bind the backbone events module to our app object
  _.extend(global.app, Backbone.Events);

  return global.app;

});
