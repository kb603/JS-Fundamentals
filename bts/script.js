"use strict";

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1966) {
//       const str = `Oh, you're an millenial, ${firstName}`;
//       console.log(str);
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = "Kojo";
// calcAge(1991);

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Will",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Amy";
console.log("before marriage:", jessica);
console.log("after marriage", marriedJessica);
