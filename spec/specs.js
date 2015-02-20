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
    var  pizza = { name: "Vivica Vance",
                   description: "Cheese",
                   size: "8" };
      expect(pizza.size).to.equal("8");
  });

  it("returns number of slices", function() {
    var pizza = { name: "Vivica Vance",
                  description: "Cheese",
                  size: "8",
                  slices: "6" };
      expect(pizza.slices).to.equal("6")
  });

});
