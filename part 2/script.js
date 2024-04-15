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


/*
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

*/

/*
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 60 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(2004, "Kojo"));
*/


/*
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
*/

/*
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    //return retirement;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(2004, "Kojo"));
console.log(yearsUntilRetirement(1960, "Bob"));
*/

/*
//Challenge 1 
//mine

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverageScore = calcAverage(44, 23, 71);
console.log(`The dolphins average score is ${dolphinsAverageScore}`);

const koalasAverageScore = calcAverage(65, 54, 49);
console.log(`The koalas average score is ${koalasAverageScore}`);

const checkWinner = (dolphinsAverageScore, koalasAverageScore) => {
    if (dolphinsAverageScore > koalasAverageScore) {
        console.log(`Dolphins win (${dolphinsAverageScore}, ${koalasAverageScore})`);
    } else {
        console.log(`Koalas win (${koalasAverageScore}, ${dolphinsAverageScore})`);
    }
}

checkWinner(`${dolphinsAverageScore}, ${koalasAverageScore}`);

*/

/*
//Jonas
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverageScore = calcAverage(144, 123, 171);
const koalasAverageScore = calcAverage(65, 54, 49);
console.log(dolphinsAverageScore, koalasAverageScore)

const checkWinner = function(dolphinsAverageScore, koalasAverageScore) {
    if (dolphinsAverageScore >= 2 * koalasAverageScore) {
        console.log(`Dolphins win (${dolphinsAverageScore}, ${koalasAverageScore})`);
    } else if (koalasAverageScore >= 2* dolphinsAverageScore) {
        console.log(`Koalas win (${koalasAverageScore}, ${dolphinsAverageScore})`);
    } else {
        console.log("Tie")
    }
}
checkWinner(dolphinsAverageScore, koalasAverageScore);
*/

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

*/

/*
const friends = ["Michael", "Steven", "Peter"];

//Add Elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove Elements
friends.pop()
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends)

console.log(friends.indexOf("Michael"))

console.log(friends.includes("Steven"))

*/

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0], calcTip(bills[1]), calcTip(bills[2]))];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + bills[2]];

console.log(bills, tips, totals)

