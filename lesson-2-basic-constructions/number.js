describe("pow", function () {

  it("возводит в n-ю степень", function () {
    assert.equal(pow(2, 3), 8);
  });

  it('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it("при возведении в отрицательную степень результат NaN", function () {
    assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
  });

  it("при возведении в дробную степень результат NaN", function () {
    assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) не NaN");
  });

  describe("любое число, кроме нуля, в степени 0 равно 1", function () {

      it("при возведении " + x + " в степень 0 результат: 1", function () {
        assert.equal(pow(x, 0), 1);
      });
  });