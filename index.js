const ccoffeeMenu = require("./coffee_data.js");


const coffeeMenu = require('./coffee_data');

const drinkNames = coffeeMenu.map(drink => drink.name);
console.log(drinkNames);

const cheapDrinks = coffeeMenu.filter(drink => drink.price <= 5);
console.log(cheapDrinks);

const evenPricedDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);
console.log(evenPricedDrinks);

const totalPrice = coffeeMenu.reduce((total, drink) => total + drink.price, 0);
console.log(totalPrice);

const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);
console.log(seasonalDrinks);

const seasonalDrinksWithBeans = seasonalDrinks.map(drink => drink.name + " with imported beans");
console.log(seasonalDrinksWithBeans);