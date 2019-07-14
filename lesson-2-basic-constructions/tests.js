describe('type tests', () => {
  it('2 is a number', () => {
    expect(typeof 2).toBe('number');
  });
​
it('decimal is a number', () => {
  expect(typeof 0.2).toBe('number');
});

it('false is a boolean', () => {
  expect(typeof false).toBe('boolean');
});
​
it('officially accepted mistake in JS', () => {
  expect(typeof null).toBe('object');
});
​
it('variable without value has type undefined', () => {
  let someVar;
  expect(typeof someVar).toBe('undefined');
});
​
it('NaN is a number', () => {
  expect(typeof NaN).toBe('number');
});
​
it('NaN not equal NaN', () => {
  expect(NaN === NaN).toBeFalsy();
});
​
it('null equal to undefined', () => {
  expect(undefined == null).toBeTruthy();
});
​
it('null not equal 0', () => {
  expect(null == 0).toBeFalsy();
});
​
it('undefined not equal 0', () => {
  expect(undefined === 0).toBeFalsy();
});
});