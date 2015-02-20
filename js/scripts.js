var pizzaCo = {

  description: "",
  size: 0,
  slices: 0,

    pizza: function() {
      var description = this.description;
      var size = this.size;
      var slices = this.slices;
      var falseDescription = (description !== "Cheese"
                              || !== "Pepperoni");
      var falseSize = (size !== "8" || "12" || "16"
                       || isNaN(size));

      if (faultyDescription) {
        alert("Our two pizza types are CHEESE and PEPPERONI.");
      };
      if (faultySize) {
        alert("Our three pizza sizes are 8-inch, 12-inch,
                and 16-inch.");
      };

    };

});
