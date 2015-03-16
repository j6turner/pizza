describe("Pizza", function() {
  describe("sliceCount()", function() {
    it("calculates and returns number of slices based on description and size", function() {
      var testPizza = Object.create(Pizza);
      testPizza.description = "Cheese";
      testPizza.size = "16-inch";
      expect(testPizza.sliceCount()).to.equal(10);
    });
  });
});
