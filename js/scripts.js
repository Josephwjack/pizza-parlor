
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings; 
}
let newPizza = new Pizza();

Pizza.prototype.pizzaPrice = function () {
  this.price = 13;
  if (this.size === "small") {
    this.price -= 3;
  } else if (this.size === "medium") {
    this.price = 13;
  } else if (this.size === "large") {
    this.price += 3;  
  }
  return toppingPrice + this.price;
}
$("input:checkbox").click(function() {
    
  
  
  // UI logic-----
 
  
  let toppingHolder = [];
  let topPrice = 0;
  let tops = [];
}
$(document).ready(function() {
  $("#pizza-build").submit(function(event) {
    event.preventDefault();
    
  })
})