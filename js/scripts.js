// Business logic-----
function Pizza(topping, size) {
  this.toppings = topping; 
  this.size = size;
}
Pizza.prototype.pizzaSize = function () {
  this.price = 13;
  if (this.size === "small") {
    this.price -= 3;
  } else if (this.size === "large") {
    this.price += 3;  
  }
}


// Pizza.prototype.toppingsCost = function() {
//   let totalPrice = this.price + this.topping;
//   if (this.topping <= 1) {
//     totalPrice += 1;
//   } else if (this.topping <= 2) {
//     totalPrice += 2;
//   } else if (this.topping <= 3) {
//     totalPrice += 3;
//   } else if (this.topping <=4) {
//     totalPrice += 4;
//   } else if (this.topping <= 5) { 
//    totalPrice += 5;
//   } 
//   return totalPrice;



// UI logic-----

$(document).ready(function() {
  



