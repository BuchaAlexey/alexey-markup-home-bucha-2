var testFile = require("../task2.js")
describe("multiplyNumeric", function() {
    it("умножает численные свойства на 2", function() {
      var image = {
        width: 100,
        height: 800,
        title: "Cool image"
      };
      multiplyNumeric(image);
      assert.equal(image.width, 200);
      assert.equal(image.height, 1600);
      assert.equal(image.title, "Cool image");
    });
  });