describe("pizzaCo", function() {

  it("returns customer name", function() {
    var pizza = { name: "Vivica Vance" };
      expect(pizza.name).to.equal("Vivica Vance");
  });

  it("returns type of pizza", function() {
    var pizza = { name: "Vivica Vance",
                  description: "Cheese" };
      expect(pizza.description).to.equal("Cheese");
  });

  it("returns size of pizza", function() {
    var pizza = { name: "Vivica Vance",
                  description: "Cheese",
                  size: "8-inch" };
      expect(pizza.size).to.equal("8-inch");
  });

  it("returns number of slices for a 16-inch Cheese pizza", function() {
    var pizza = { description: "Cheese",
                  size: "16-inch"};
    var slices = pizza.sliceCount();
      expect(pizza.slices).to.equal(10);
  });

});
