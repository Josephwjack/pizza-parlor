// Business logic-----
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings; 
  
}
Pizza.prototype.pizzaPrice = function () {
  let price = 13;
  if (this.size === "small") {
    price -= 3;
  } else if (this.size === "medium") {
    price = 13;
  } else if (this.size === "large") {
    price += 3;  
  }
  this.toppings.forEach(() => {
    price += 1;
    return price;
  })
};

// UI logic-----


$(document).ready(function() {
  $("#pizza-build").submit(function(event) {
  event.preventDefault();
  let inputtedSize = $("#size").val();
  let inputtedToppings = $("input:checkbox[name=pizza-toppings]:checked").val();
  let usersPizza = new Pizza(inputtedSize, inputtedToppings);
  $("#output").html(usersPizza.pizzaPrice());
  $(".pizza-confirmation").show();
  $("#menu").show();

  })
});












