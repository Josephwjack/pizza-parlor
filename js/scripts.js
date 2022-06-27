
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings; 
}


Pizza.prototype.pizzaPrice = function () {
  // calculate size first
  let price = 10;
  if (this.size === "small") {
    price = 10;
  } else if (this.size === "medium") {
    price = 13;
  } else if (this.size === "large") {
    price = 16;  
  }
  // add topings price to total
  if (this.toppings) {
    let size = this.toppings.length;
    // this.toppings.forEach(() => {
    //   price += 1; 
    // });
    price += (size * 1);
  }
  return price;
}

    
  
  
  // UI logic-----
 
//   let toppingHolder = [];
//   let topPrice = 0;
//   let tops = [];
// }
$(document).ready(function() {
  $('#pizza-build').submit(function(event) {
    event.preventDefault();
    let sizeElem = document.getElementById('size');
    const sizeInput = sizeElem.options[sizeElem.selectedIndex].value;
    let topingsInput = $('input[type="checkbox"]:checked').map(function () {
      return $(this).val();
    });
    // const sizeInput = $("input[name='size']:selectedIndex").val();
    let pizza = new Pizza(sizeInput, topingsInput);
    const pizzaPrice = pizza.pizzaPrice()
    console.log(`submit-btn pressed, price = ${pizzaPrice}`);

  }) 
  
})