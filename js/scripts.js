$(document).ready(function() {
 $("#add-pizza").click(function() {
   $("#new-pizzas").append( '<div class="new-pizza">' +
                                 '<div class="form-group">' +
                                   '<label for="description">Cheese or Pepperoni?</label>' +
                                   '<input type="text" id="description" class="form-control" placeholder="Cheese">' +
                                 '</div>' +

                                 '<div class="form-group">' +
                                   '<label for="size">8-inch, 12-inch, or 16-inch?</label>' +
                                   '<input type="number" min="8" max="16" id="size" class="form-control" placeholder="8">' +
                                 '</div>' +
                            '</div>' );
 });

  $("form#new-customer").submit(function(event) {
    event.preventDefault();


    var name = $("input#name").val()

    var newCustomer = { name: name,
                        pizzas: []
                      };



    $(".new-pizza").each(function() {
      var description = $(this).find("input#description").val();
      var size = $(this).find("input#size").val();

      var slices = this.slices;
        if (description === "Cheese" && size === 8) {
          this.slices === 6;
        } else if (description === "Cheese" && size === 12) {
          this.slices === 8;
        } else if (description === "Cheese" && size === 16) {
          this.slices === 10;
        } else if (description === "Pepperoni" && size === 8) {
          this.slices === 8;
        } else if (description === "Pepperoni" && size === 12) {
          this.slices === 10;
        } else if (description === "Cheese" && size === 16) {
          this.slices === 12;
        // } else {
        //   alert("Please try again.")
        };

      var newPizza = { description: description,
                       size: size,
                       slices: slices
                     };
      newCustomer.pizzas.push(newPizza);
    });

//     var falseDescription = ((description !== "Cheese")
//                             || (description !== "Pepperoni"));
//     if (falseDescription) {
//       alert("The only available pizza types are CHEESE and PEPPERONI.");
//     };
//
//     var falseSize = ((size !== "8" || "12" || "16")
//                      || (isNaN(size)));
//     if (falseSize) {
//       alert("The only available pizza sizes are 8-inch, 12-inch,
//               and 16-inch.");
//     };

    $("ul#orders").append("<li><span class='customer'>"
                            + newCustomer.name
                            + "</span></li>");

    $(".customer").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newCustomer.name);
      $(".name").text(newCustomer.name);
      $("ul#pizzas").text("");
      newCustomer.pizzas.forEach(function(pizza) {
        $("ul#pizzas").append("<li>" + pizza.description
                             + ", "
                             + pizza.size + "-inch"
                             + " ("
                             + pizza.slices + " slices"
                             + ")"
                             + "</li>");
      });
    });


        $("input#name").val("");
        $("input#description").val("");
        $("input#size").val("");
  });
});
