var Pizza = {
  sliceCount: function() {
    var slices = 6;
    if (this.description === "Cheese" && this.size === "8-inch") {
      slices = 6;
    } else if (this.description === "Cheese" && this.size === "12-inch") {
      slices = 8;
    } else if (this.description === "Cheese" && this.size === "16-inch") {
      slices = 10;
    } else if (this.description === "Pepperoni" && this.size === "8-inch") {
      slices = 8;
    } else if (this.description === "Pepperoni" && this.size === "12-inch") {
      slices = 10;
    } else {
      slices = 12;
    }
    return slices;
  }
};

$(document).ready(function() {
  $("form#new-customer").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val()
    var newCustomer = { name: name,
                        order: []
                      };
    var newPizza = Object.create(Pizza);

    $(".new-pizza").each(function() {
      newPizza.description = $(this).find("select#description").val();
      newPizza.size = $(this).find("select#size").val();
      newCustomer.order.push(newPizza);
    });

    $("ul#orders").append("<li><span class='customer'>"
                            + newCustomer.name
                            + "</span></li>");

    $(".customer").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newCustomer.name);
      $(".name").text(newCustomer.name);
      $("ul#pizza").text("");
      newCustomer.order.forEach(function(pizza) {
        $("ul#pizza").append("<li>" + pizza.description
                             + ", "
                             + pizza.size
                             + " ("
                             + pizza.sliceCount() + " slices"
                             + ")"
                             + "</li>");
      });
    });

    $("input#name").val("");
    $("select#description").val("");
    $("select#size").val("");

  });
});
