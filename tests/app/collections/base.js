//
// tests/app/collections/base
//

define([
  'collections/base',
],

function(Collection) {

  'use strict';

  describe("Base collection", function() {

    beforeEach(function() {
      this.server = sinon.fakeServer.create();
      this.server.respondWith('GET', '/examples', [200, {'Content-Type': 'application-json'}, '{}']);
      this.server.respond();
      this.server.autoRespond = true;

      this.collection = new Collection();
      this.collection.url = '/examples';
    });

    afterEach(function() {
      this.server.restore();
    });

    it("should return a URI-encoded URL", function() {
      expect(this.collection.url).to.equal('/examples');
    });

    it("should trigger a fetching event when fetching", function() {
      var flag;

      this.collection.on('fetching', function() {
        flag = true;
      });
      this.collection.fetch();

      expect(flag).to.be.ok;
    });

    it("should trigger a change event when the fetch is complete", function(done) {
      var flag;

      this.timeout(2000);
      this.collection.on('change', function() {
        flag = true;
      });
      this.collection.fetch().then(function() {
        expect(flag).to.be.ok;
        done();
      });
    });

  });

});
