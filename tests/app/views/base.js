//
// views/item
//

define([
  'helpers/namespace',
  'marionette'
],

function(app, Marionette) {

  "use strict";

  describe("Item view", function() {
    var el, view, collection,
      baseItem = {
        date: new Date(),
        description: "sample description",
        title: "some title",
        _id: null
      };

      var Data = Backbone.Collection.extend({
        fetch : function() {}
      });

      collection = new Data([
        _.extend(_.clone(baseItem), {title: 'some title a', _id: 'asdfasdfasdfasf'}),
        _.extend(_.clone(baseItem), {title: 'b', _id: '222asdfasdfasdfasdf'})
      ]);

    beforeEach(function() {
      view = new Backbone.View({
        model: collection.first(),
        template: '<div></div>'
      });
      view.render();
    });

    afterEach(function() {
      view.remove();
    });

    it("should have a 'el' of 'div'", function() {
      expect(view.tagName).to.equal('div');
    });

    it("should have a 'render' method", function() {
      expect(view).to.have.property('render');
      expect(view.render).to.be.ok;
    });

    it("should have a model instance bound", function() {
      expect(view.model).to.be.an('object');
      expect(view.model).to.be.an.instanceof(Backbone.Model);
    });

    it("should have a key of 'hash' on its options hash", function() {
      expect(view.options[0]).to.be.undefined;
    });

  });

});
