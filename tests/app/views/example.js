//
// views/list
//

define([
  'collections/example',
  'tests/app/stubs/example'
],

function(View, Paintings, fixture) {

  "use strict";

  describe("List view", function() {
    var el, view;

    beforeEach(function(done) {

      this.collection = new Paintings(fixture);

      $('#thumbs').remove();
      el = $("<div id='thumbs' class='hide'></div>").appendTo(document.body);
      view = new View({
        collection: this.collection,
        resource: 'graphics'
      });
      done();
    });

    afterEach(function() {
      view.destroy();
      $('#thumbs').remove();
    });

    it("should have a 'el' of 'ul'", function() {
      expect(view.tagName).to.equal('ul');
    });

    it("should have a 'className' of 'thumbnails' ", function() {
      expect(view.className).to.equal('thumbnails');
    });

    it("should remove a 'hidden' class on initialisation", function() {
      expect(el.attr('class')).to.equal('show');
    });

    it("should have a collection of x number of items", function() {
      var len = this.collection.length;
      expect(view.options.collection.length).to.equal(len);
    });

    it("should have a 'renderItem' property", function() {
      expect(view).to.have.property('renderItem');
    });

    it("should have a options.resource property", function() {
      expect(view.options).to.have.property('resource');
    });

    it("should have it's resource property set", function() {
      expect(view.options.resource).to.equal('graphics');
    });

    it("should have a options.collection property", function() {
      expect(view.options).to.have.property('collection');
    });

    it("should have it's resource property set", function() {
      expect(view.options.collection).to.be.an('object');
    });

    it("should render a list item", function() {
      expect(view.$el.find('li').length).to.equal(4);
    });

    it("should render a list item containing an image", function() {
      expect(view.$el.find('li img').first().length).to.equal(1);
    });

    it("should add a class of 'active' to the first image", function() {
      expect(view.$el.find('li.active')).to.be.ok;
    });

    it("should display an image with some meta data", function() {
      var model = this.collection.first(),
          image = view.$el.find('li img').first(),
          model_id = model.get('_id'),
          model_title = model.get('title');

      expect($(image).attr('data-asset-id')).to.equal(model_id);
      expect($(image).attr('title')).to.equal(model_title);
    });

    it("should create separate render groups for items in different catgories", function() {
      view = new View({
        collection: this.collection.byChapter('03'),
        resource: 'graphics',
        grouped: true
      });

      console.log(view)
    });

  });

});
