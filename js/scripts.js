// Business logic-----
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings; 
  
}
let myPizza = new Pizza();
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
  });
  return price;
}


// UI logic-----

$(document).ready(function() {
  $("form#pizza-toppings").submit(function(event) {
    event.preventDefault();



  })
})








