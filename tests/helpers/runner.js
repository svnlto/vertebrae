global.mocha.setup({
  globals: ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval']
});

module.exports = (function () {

  before(function () {
  });

  beforeEach(function () {
    this.sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    this.sandbox.restore();
  });

  after(function () {
  });

}());

