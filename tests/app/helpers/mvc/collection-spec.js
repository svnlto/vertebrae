//
// tests/app/collections/base
//

define([
  'helpers/mvc/collection'
],

function (Collection) {

  'use strict';

  describe('Base collection', function () {

    beforeEach(function () {
      this.server = sinon.fakeServer.create();
      this.server.respondWith('GET', '/examples', [200, {'Content-Type': 'application-json'}, '{}']);
      this.server.respond();
      this.server.autoRespond = true;

      this.collection = new Collection();
      this.collection.url = '/examples';
    });

    afterEach(function () {
      this.server.restore();
    });

    it('should provide a new instance of controller', function () {
      expect(this.collection instanceof Backbone.Collection).to.be.ok();
    });

    it('should have a next property', function () {
      expect(this.collection).to.have.property('next');
    });

    it('should have a prev property', function () {
      expect(this.collection).to.have.property('prev');
    });

    it('should return a URI-encoded URL', function () {
      expect(this.collection.url).to.eql('/examples');
    });

  });

});
