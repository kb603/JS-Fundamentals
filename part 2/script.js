"use strict"; 

/*
function logger() {
    console.log("My name is Kojo");
}

//calling / running / invoking a function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor (2, 3);
console.log(appleOrangeJuice);
*/

//Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2004);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(2004);

console.log(age1, age2)

//arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2004);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 60 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(2004, "Kojo"));



const cutPieces = function(fruit) {
    return fruit * 4;
};

const fruitProcessor = function fruitProcessor(apples, oranges) {

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2,3));