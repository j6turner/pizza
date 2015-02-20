describe("pizzaCo", function() {

  it("returns type of pizza", function() {
    var pizza = { description: "Cheese" };
      expect(pizza.description).to.equal("Cheese");
  });

  // it("returns size of pizza", function() {
  //   var  pizza = { description: "Cheese",
  //                    size: "8"};
  //     expect(pizza.size).to.equal("8");
  // });
  //
  // it("returns number of slices", function() {
  //   var pizza = { description: "Cheese",
  //                   size: "8",
  //                    slices: "6" };
  //     expect(pizza.slices).to.equal("6")
  // });

});
