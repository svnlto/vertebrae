//
// views/item
//

define([
  'helpers/namespace'
],

function(View, app) {

  "use strict";

  describe("Item view", function() {
    var el, view, data, elem, displayAssetSpy,
      baseItem = {
        client: "client",
        date: new Date(),
        description: "sample description",
        full: [ "/image-1.jpg", "/image-2.jpg", "/iamge-3.jpg"],
        resource: "graphics",
        thumb: "/",
        title: "some title",
        _id: null
      };

      var Data = Backbone.Collection.extend({
        fetch : function() {}
      });

      data = new Data([
        _.extend(_.clone(baseItem), {title: 'some title a', _id: 'asdfasdfasdfasf'}),
        _.extend(_.clone(baseItem), {title: 'b', _id: '222asdfasdfasdfasdf'})
      ]);

    beforeEach(function() {
      $('#thumbs').remove();
      el = $("<div id='thumbs'><ul class='thumbnails'></ul></div>").appendTo(document.body);
      view = new View({
        model: data.first()
      });
      view.render();
      displayAssetSpy = sinon.spy();
      view.on('click', displayAssetSpy);
    });

    afterEach(function() {
      $('#thumbs').remove();
      elem = null;
      view.destroy();
    });

    it("should have a 'el' of 'li'", function() {
      expect(view.tagName).to.equal('li');
    });

    it("should have a 'buildView' method", function() {
      expect(view).to.have.property('buildView');
      expect(view.buildView).to.be.ok;
    });

    it("should have a 'render' method", function() {
      expect(view).to.have.property('render');
      expect(view.render).to.be.ok;
    });

    it("should render out a list item", function() {
      view.render(); el.find('.thumbnails').append(view.el);
      expect(el.find('li img')).to.be.ok;
    });

    it("should render out a list item with attributes", function() {
      elem = el.find('.thumbnails').append(view.el);

      expect(el.find('li img').attr('data-asset-id')).to.equal(view.model.attributes._id);
      expect(el.find('li img').attr('title')).to.equal(view.model.attributes.title);
      expect(el.find('li img').attr('src')).to.equal(view.model.attributes.thumb);
    });

    it("should have a click trigger on 'img' set up", function() {
      view.trigger('click');

      expect(displayAssetSpy.called).to.be.ok;
      expect(displayAssetSpy.calledOnce).to.be.ok;
    });

    it("should have a model instance bound", function() {
      expect(view.model).to.be.an('object');
      expect(view.model).to.be.an.instanceof(Backbone.Model);
    });

    it("should have a key of 'hash' on its options hash", function() {
      expect(view.options[0]).to.be.undefined;
    });

    it("should emit a 'asset:show' event on click");

  });

});
