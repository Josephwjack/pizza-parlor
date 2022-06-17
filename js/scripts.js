function Pizza(toppings, size, price) {
  this.toppings = toppings; // make toppings empty array?
  this.size = size;
  this.price = price;
}
console.log('large');


Pizza.prototype.pizzaSize = function () {
  this.price = 13;
  if (this.size === 'small') {
    this.price -= 3;
  } else (this.size === "large"); {
    this.price += 3;
  } return this.price
} 


