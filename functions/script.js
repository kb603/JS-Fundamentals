"use strict";
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
