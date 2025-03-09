function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
}


var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin crust", "alfredo", ["parmesan", "mozzarella"], ["chicken", "spinach", "garlic"]);
var pizza4 = pizzaOven("stuffed crust", "bbq", ["cheddar", "mozzarella"], ["bacon", "onions", "bell peppers"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin crust", "stuffed crust", "gluten-free"];
    var sauceTypes = ["traditional", "marinara", "alfredo", "bbq", "pesto"];
    var cheeseOptions = ["mozzarella", "cheddar", "parmesan", "feta", "gorgonzola"];
    var toppingOptions = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bacon", "spinach", "bell peppers", "chicken", "garlic"];
    
    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    function getRandomSubset(arr, min = 1, max = arr.length) {
        let subset = [];
        let count = Math.floor(Math.random() * (max - min + 1)) + min;
        while (subset.length < count) {
            let item = getRandomElement(arr);
            if (!subset.includes(item)) {
                subset.push(item);
            }
        }
        return subset;
    }
    
    return pizzaOven(
        getRandomElement(crustTypes),
        getRandomElement(sauceTypes),
        getRandomSubset(cheeseOptions, 1, 3),
        getRandomSubset(toppingOptions, 2, 5)
    );
}

var randomPizza1 = randomPizza();
console.log(randomPizza1);
