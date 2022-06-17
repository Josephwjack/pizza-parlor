# pizza-parlor

#### By: _**Joseph Jack**_

## Description
**Epicodus week 4 project**
_An interactive webpage that allows a user to select the pizza options of their choosing and recieve their total._

## Technologies Used

* _HTML_
* _JavaScript & Jquery_
* _CSS_
* _Github_

## Tests/Logic

_Describe: Pizza()_
Test: "It should return a Pizza object with properties for toppings, size, price."
`code: let myPizza = new Pizza(["mushrooms", "jalapenos", "bacon"], "Large");`
Expected Output: Pizza { toppings: ["mushrooms", "jalapenos", "bacon"], "Large"}

_Describe: Pizza.prototype.pizzaPrice ()_
 Test: "It should increase the default price("13") by 3 when choosing large"
 `code: Pizza.prototype.pizzaPrice ("large");`
 Expected Output:` '16'`
 
 Test: "It should also increase price for each topping selected."
 `code: Pizza.prototype.pizzaPrice (['bacon', 'onions], 'medium');`
 Expected Output: '15'


## Setup/Installation Requirements

* _Git clone_ **repository link**.
* _Open the index.html file in your browser, or run Go Live in VS Code to run the code on your local host._
* _Select pizza size and toppings before submitting. Order total will show up._

## Known Bugs

* _No known bugs_

##
[GitHub Pages link]
## License
* MIT 

Copyright (c) _6/2022_  -- _Joseph Jack_ [GitHub Account](https://github.com/Josephwjack)
