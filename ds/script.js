"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, would be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deleicious pasta with ${ing1},  ${ing2},  ${ing3}`
    );
  },
};

// SPREAD OPERATOR
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Joining two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = "Kojo";
const letters = [...str, " ", "s"];
console.log(letters);
console.log(...str);

// Real World Example

const ingredients = [
  //prompt("Let's make pasta! Ingredient 1?"),
  //prompt("Let's make pasta! Ingredient 2?"),
  //prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { founder: "Juan Pablo", foundedIn: 1988, ...restaurant };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
Destructiong Arrays
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 1,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables

let a = 111;
let b = 999;
let obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open, close },
} = openingHours;

console.log(open, close);
// const arr = [2, 3, 4];
// const a = [0];
// const b = [1];
// const c = [2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Pizzaria

// //SWITCHING VARIABLES

// // const temp = main; // Italian
// // main = secondary; // Pizzaria
// // secondary = temp; // Italian
// // console.log(main, secondary); // Italian Pizzaria

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive two return values from a function
// const [starter, mainCourse] = restaurant.order(0, 1);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
//console.log(p, q, r);

*/
