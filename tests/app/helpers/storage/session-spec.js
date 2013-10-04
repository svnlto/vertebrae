//
// tests/app/helpers/storage/session
//
//

define([
  'helpers/storage/session'
],

function (sStorage) {

  'use strict';

  describe('Session Storage Helper', function () {

    beforeEach(function () {
      this.storage = sStorage;

      this.sandbox = sinon.sandbox.create();

      this.spyS = this.sandbox.spy(this.storage, 'setItem');
      this.spyG = this.sandbox.spy(this.storage, 'getItem');
      this.spyR = this.sandbox.spy(this.storage, 'removeItem');
      this.spyC = this.sandbox.spy(this.storage, 'clear');

      this.objA = { name: 'sven' };
      this.objB = { name: 'alf' };
    });

    afterEach(function () {
      this.sandbox.restore();
    });

    describe('Methods', function () {

      it('should have a setItem method', function () {
        expect(this.storage.setItem).to.be.ok();
      });

      it('should have a getItem method', function () {
        expect(this.storage.getItem).to.be.ok();
      });

      it('should have a removeItem method', function () {
        expect(this.storage.removeItem).to.be.ok();
      });

      it('should have a clear method', function () {
        expect(this.storage.clear).to.be.ok();
      });

    });

    describe('Logic', function () {

      it('should set item in sessionStorage', function () {
        this.storage.setItem('test', this.objA);
        expect(this.spyS.called).to.eql(true);
      });

      it('should update item in sessionStorage', function () {
        this.storage.setItem('test', this.objB);
        var objC = this.storage.getItem('test');
        expect(this.objB.name).to.eql(objC.name);
      });

      it('should get item in sessionStorage', function () {
        var objC = this.storage.getItem('test');
        expect(this.objB.name).to.eql(objC.name);
      });

      it('should remove item from sessionStorage', function () {
        this.storage.removeItem('test');
        var objC = this.storage.getItem('test');
        expect(objC).to.not.be.ok();
      });

    });

  });

});
