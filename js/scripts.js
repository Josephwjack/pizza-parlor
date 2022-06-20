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
    console.log(price);
  });
  return price;
}

// UI logic-----
let myPizza = new Pizza();

$(document).ready(function() {
  $("form#pizza-build").submit(function(event) {
    event.preventDefault();

    let inputtedSize = $(".form-control#size").val();
    let inputtedToppings = $("input:checkbox[name=pizza-toppings]:checked").val();
    let usersPizza = new Pizza(inputtedSize, inputtedToppings)
    let output = usersPizza + price;
    $("#output").html(output);
    $("")
  })
$("#btn1").on("click", function(event) {
  event.preventDefault();
  $("#menu").fadeIn();
})

  })









