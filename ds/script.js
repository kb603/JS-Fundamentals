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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const airline = "Tap Portugal";
const plane = "A320";
/*
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri);
// Optional Chaining

console.log(restaurant.openingHours.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
*/
/*
// for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const item of menu) console.log(item);

for (const [item, element] of menu.entries()) {
  console.log(`${item + 1}: ${element}`);
}
*/
/*
const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Pizza",
  owner: "Giovanni Rossa",
};
// OR Assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYNMOUS>";
// rest2.owner = rest2.owner && "<ANONYNMOUS>";

rest1.owner &&= "<ANOYNMOUS>";
rest2.owner &&= "<ANOYNMOUS>";

console.log(rest1);
console.log(rest2);
*/
/*
// NULLISH OPERATOR
// Nullish: Null and undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
/*
/*
////////////////////////////////////
// Short Circuiting (&& and ||)
console.log("----- OR ------");

// Use ANY data type return ANY data type,
console.log(3 || "Kojo");
console.log("empty string " || "Kojo");
console.log(true || 0);
console.log("----- AND ------");
console.log("hello" && 1 && "hello");

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
}
*/
/*
// REST Pattern and Parameters
// Destructuring

// SPREAD,because on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ...otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("tomatoes", "peproni", "sausage", "hot sauce");
*/
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

/*
// CHALLENGE

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

//printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
*/
