var testFile = require("../task.js");
// import '../task.js';
describe('type tests', function() {
  it('2 is a number', function() {
    expect(typeof 2).toBe('number');
  });

  it('decimal is a number', function() {
    expect(typeof 0.2).toBe('number');
  });

  it('text is a string', function() {
    expect(typeof 'some text').toBe('string');
  });

  it('false is a boolean', function() {
    expect(typeof false).toBe('boolean');
  });

  it('officially accepted mistake in JS', function() {
    expect(typeof null).toBe('object');
  });

  it('variable without value has type undefined', function() {
    let someVar;
    expect(typeof someVar).toBe('undefined');
  });

  it('NaN is a number', function() {
    expect(typeof NaN).toBe('number');
  });

  it('isEmpty should be truthy', function() {
    expect(testFile.isEmpty({})).toBeTruthy();
  });

  it('isEmpty should be falsy', function() {
    expect(testFile.isEmpty({test: 1})).toBeFalsy();
  });

  it('null equal to undefined', function() {
    expect(undefined == null).toBeTruthy();
  });

  it('null not equal 0', function() {
    expect(null == 0).toBeFalsy();
  });

  it('undefined not equal 0', function() {
    expect(undefined === 0).toBeFalsy();
  });
});
