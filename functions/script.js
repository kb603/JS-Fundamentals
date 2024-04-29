"use strict";
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  //   console.log(booking);
  //   bookings.push(booking);
};

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

const flight = "LH234";
const kojo = {
  name: "Kojo",
  passport: 2389531,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 2389531) {
    alert("Checked in successfully");
  } else {
    alert("Wrong Passport");
  }
};

// checkIn(flight, kojo);
// console.log(flight);
// console.log(kojo);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(kojo);
checkIn(flight, kojo);
console.log(newPassport);
*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer(`JavaScript is the best!`, upperFirstWord);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

// Arrow Function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("hi")("kojo ");
*/

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, name` });
  },
};

lufthansa.book(2384, "John Smith");
lufthansa.book(3478, "Jane Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Call Method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);
book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Airline",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Apply Method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(flightData);
