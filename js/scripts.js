// Business logic-----
function Pizza(toppings, size) {
  this.size = size;
  this.toppings = toppings; 
  
}
let myPizza = new Pizza();
Pizza.prototype.pizzaSize = function () {
  let price = 13;
  if (this.size === "small") {
    price -= 3;
  } else if (this.size === "large") {
    price += 3;  
  }
  this.toppings.forEach(() => {
    price += 1;
  });
  return price;
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
let toppingArray = [];


// UI logic-----

$(document).ready(function() {








