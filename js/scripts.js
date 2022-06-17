// Business logic-----
function Pizza(toppings, size) {
  this.toppings = toppings; 
  this.size = size;
}
Pizza.prototype.pizzaSize = function () {
  this.price = 13;
  if (this.size === "small") {
    this.price -= 3;
  } else if (this.size === "large") {
    this.price += 3;  
  } else {
    price = 13;
  } return this.price;
}

Pizza.prototype.toppingsCost = function() {
  let totalPrice = this.price + toppings;
  i
  
}


// UI logic-----


let topPrice = 0;



