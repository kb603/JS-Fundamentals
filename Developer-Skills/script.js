// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
PROBLEM:
We work for a company building smart home theremometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."


1) Understand the problem
- What is temp amplitude? Answer: differenec between highest and lowest temp
-How to compute max and min temperatures?
- What's a sensor error and what to do?

2) Breaking into sub-problems
- How to ignore errors
- Find max value in temp array
- Find min value in temp array
- Subtract min from max (amplitude) and return it
*/

/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperature1 = [4, 9, 19, 13, "error", -8];
const finalArray = temperatures.concat(temperature1);

const calcTempAmplitude = function (temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i];
    if (typeof currentTemp !== "number") continue;
    if (temperatures[i] > max) max = temperatures[i];

    if (temperatures[i] < min) min = temperatures[i];
  }
  console.log(min, max);
  return max - min;
};
//calcTempAmplitude([3, 7, 5]);
// max = 3
// max = 7
const amplitude = calcTempAmplitude(finalArray);
console.log(amplitude);
*/

/* PROBLEM 2
Function should now receive 2 arrays of temp
1) Understanding the problem
- With two arrays, should we implement functionality twice? No just merge

2) Breaking up into sub-problems
-How to merge 2 arrays?

*/
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: Number(prompt("Degree celcius: ")),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
