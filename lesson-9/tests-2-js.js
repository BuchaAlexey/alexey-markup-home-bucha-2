describe('isPal', () => {
    it('expect true', () => {
        assert.equal(result.length, 3);
        assert.equal(intersection(result, ["гробик", "киборг"]).length, 1);
        assert.equal(intersection(result, ["воз", "зов"]).length, 1);
        assert.equal(intersection(result, ["корсет", "сектор", "костер"]).length, 1);
    })
});