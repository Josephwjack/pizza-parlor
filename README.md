Describe: Pizza()
Test: "It should return a Pizza object with properties for toppings, size, price."
code: let myPizza = new Pizza(["mushrooms", "jalapenos", "bacon"], "Large");
Expected Output: Pizza { toppings: ["mushrooms", "jalapenos", "bacon"], "Large"}

Describe: Pizza.prototype.pizzaSize ()
Test: "It should increase the default price("13") by 3 when choosing large"
code: Pizza.prototype.pizzaSize ("large");
Expected Output: '16'