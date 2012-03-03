//
// ## views.examples.main
//

define('views/examples/main', [
  'views/examples/list',
  'collections/examples'
],

function(listView, Collection) {

  //
  // create new collection, fetch data and
  // pass the returned data as a new Backbone.Collection
  // to the view.
  //
  var collection = new Collection();
  collection.fetch().success(function(data) {

    var view = new listView({
      collection: new Backbone.Collection(data)
    });

    view.render();
    $("#list").append(view.el);
  });

});
