// Business logic-----
function Pizza(toppings, size, price) {
  this.toppings = toppings; 
  this.size = size;
  this.price = price;
}

Pizza.prototype.pizzaSize = function () {
  if (this.size === "small") {
    let price = 10;
    return this.price = price;
    } if (this.size === "large") {  
      let price = 16;
      return this.price = price;
    } if (this.size === "medium") { 
      let price = 13;
      return this.price = price;
    } else {
     return this.price;
  }
}







