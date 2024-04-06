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