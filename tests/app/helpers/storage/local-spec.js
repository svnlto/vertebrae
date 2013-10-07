//
// tests/app/helpers/storage/local
//
//

define([
  'helpers/storage/local'
],

function (sStorage) {

  'use strict';

  describe('local Storage Helper', function () {

    beforeEach(function () {
      this.storage = sStorage;

      this.storage.clear();

      this.spyS = this.sandbox.spy(this.storage, 'setItem');
      this.spyG = this.sandbox.spy(this.storage, 'getItem');
      this.spyR = this.sandbox.spy(this.storage, 'removeItem');
      this.spyC = this.sandbox.spy(this.storage, 'clear');

      this.objA = { name: 'sven' };
      this.objB = { name: 'alf' };
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

      it('should set item in localStorage', function () {
        this.storage.setItem('test', this.objA);
        expect(this.spyS.called).to.be.ok();
      });

      it('should update item in localStorage', function () {
        this.storage.setItem('test', this.objB);
        var objC = this.storage.getItem('test');
        expect(this.objB.name).to.eql(objC.name);
      });

      it('should get item in localStorage', function () {
        this.storage.setItem('test', this.objB);
        var objC = this.storage.getItem('test');
        expect(this.objB.name).to.eql(objC.name);
      });

      it('should call "getItem" spy', function () {
        this.storage.getItem('test', this.objB);
        expect(this.spyG.called).to.be.ok();
      });


      it('should call "setItem" spy', function () {
        this.storage.setItem('test', this.objB);
        expect(this.spyS.called).to.be.ok();
      });

      it('should remove item from localStorage', function () {
        this.storage.removeItem('test');
        var objC = this.storage.getItem('test');
        expect(objC).to.not.be.ok();
      });

      it('should call "removeItem" spy', function () {
        this.storage.removeItem('test', this.objB);
        expect(this.spyR.called).to.be.ok();
      });


    });

  });

});
