// 1. Print numbers 1 to 10 using a do-while loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);


// // 2. Keep asking the user to enter a number until they enter 0
// const prompt = require("prompt-sync")();
// let num;
// do {
//   num = Number(prompt("Enter a number (enter 0 to stop): "));
// } while (num !== 0);


// // 3. Print the multiplication table of a number entered by the user
// let n = Number(prompt("Enter a number : "));
// let j = 1;
// do {
//   console.log("n x "+ j " = "+ n * j);
//   j++;
// } while (j <= 10);



// // 4. Sum numbers entered by the user until they enter a negative number
// let sum = 0;
// let input;
// do {
//   input = Number(prompt("Enter a number ( enter negative to stop): "));
//   if (input >= 0) {
//     sum += input;
//   }
// } while (input >= 0);
// console.log("Total sum = " + sum);



// // 5. Display all numbers divisible by 5 from 1 to 50
let k = 1;
do {
  if (k % 5 === 0) {
    console.log(k);
  }
  k++;
} while (k <= 50);


