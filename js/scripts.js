var pizzaCo = {

  description: "",
  size: 0,
  slices: 0,

    pizza: function() {
      var name = this.name;
      var description = this.description;
      var size = this.size;
      var slices = this.slices;
      var falseDescription = (description !== "Cheese"
                              || "Pepperoni");
      var falseSize = (size "8" || "12" || "16"
                       || isNaN(size));

      if (falseDescription) {
        alert("Our two pizza types are CHEESE and PEPPERONI.");
      } else {
        "<li>" + description + "</li>";
      };

      if (falseSize) {
        alert("Our three pizza sizes are 8-inch, 12-inch,
                and 16-inch.");
      } else {
        "<li>" + size + "</li>";
      };

    };

});

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();

    pizza.description = $(this).find("input#description").val();
    pizza.size = parseInt($(this).find("input#size").val());
    var newPizza = { description: };

    $("input#description").val("");
    $("input#size").val("");

    $(".description-result").show();
    $(".size-result").show();


  });
});
