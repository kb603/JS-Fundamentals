// let country = "Ghana";
// let continent = "Africa";
// let population = 3400000;

/*
console.log(country);
console.log(continent);
console.log(population);
*/

// console.log(javascriptIsFun);
// let javascriptIsFun = true;

// let year;
// year = 1991;
// console.log(year);

// var job = "programmer";
// job = "coder";
// console.log(job);


// Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x++; // x = x - 1
// console.log(x);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);


// 1.BMI CHALLENGE
// mass in kg, height in m

// Test data:
// Data 1: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// Data 2: Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// let BMI = mass / height ** 2

/*
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight **2;
let johnBMI = johnMass / johnHeight **2;

const markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!")
} else {
  console.log("John's BMI is higher than Mark's!")  
}

console.log(markHigherBMI);
console.log(`Mark's BMI is ${markBMI}`);
console.log(`John's BMI is ${johnBMI}`);

*/

// const firstName = "Kojo";
// const job = "student";
// const birthYear = "2004";
// const year = 2024;

// const kojo = "I'm " + firstName + " a " + (year - birthYear) + " year old " + job;
// console.log(kojo);

// const kojo2 = "I'm " + `${firstName}` + " a " + `${(year - birthYear)}` + " year old " + `${job}`;
// console.log(kojo2)


/*
const age = 16;
const isOldEnough = age >= 18;
const yearsLeft = 18 - age;

if (isOldEnough) {
    console.log("Sarah can start driving 🚗");
} else {
   
    console.log(`Sarah has ${yearsLeft}, years left to drive`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
     century  = 20; 
} else {
     century = 21;
}

console.log(century);

*/

/*
// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);


const favorite = Number(prompt("What is your favorite number"));
console.log(favorite)

*/


/*
const hasDriversLicense = true;
const hasGoodVision =true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah can drive");
// } else {
//     console.log("Someone else has to drive");
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah can drive");
} else {
    console.log("Someone else has to drive");
}

*/

// Challenge 3

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// console.log(`Dolphins average score is ${dolphinsAverageScore}`);

// const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(`Koalas average score is ${koalasAverageScore}`);

// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log("Dolphins won the competition")
// } else (dolphinsAverageScore === koalasAverageScore);{
//     console.log("The competition was a tie")
// }

// const scoreRequirement = 100;
// if (dolphinsAverageScore > koalasAverageScore && scoreRequirement) {
//     console.log();
// }

// Jonas Answer
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 100 + 110) / 3;

// console.log(`Dolphins score: ${scoreDolphins}`);
// console.log(`Koalas score: ${scoreKoalas}`);

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins won the match")
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas won the match")
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("The match is a tie")
// }

/*
//BONUS 1 
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

//const minScore = 100;

console.log(`Dolphins score: ${scoreDolphins}`);
console.log(`Koalas score: ${scoreKoalas}`);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins wind the match")
} else if (scoreKoalas > scoreDolphins && scoreDolphins >=100) {
    console.log("Koalas win the match")
} else if(scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("The match is a tie")
} else {
    console.log("No one wins")
}

*/

const day = "Monday";

switch(day) {
    case "Monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
}
