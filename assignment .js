////////////////////////CHAPTER 12-13/////////////////////////////
/////////*********QUESTION 1********//////////
// let char = prompt("Enter a character:");
// if (!isNaN(char)) {
//     console.log("The input is a number.");
// } else {
//     let ascii = char.charCodeAt(0);
//     if (ascii >= 65 && ascii <= 90) {
//         console.log("The input is an uppercase letter.");
//     } else if (ascii >= 97 && ascii <= 122) {
//         console.log("The input is a lowercase letter.");
//     } else {
//         console.log("The input is neither a number nor an alphabet letter.");
//     }
// }

///////********QUESTION 2********///////
// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//     console.log(`${num1} is larger than ${num2}.`);
// } else if (num2 > num1) {
//     console.log(`${num2} is larger than ${num1}.`);
// } else {
//     console.log("Both integers are equal.");
// }

///////********QUESTION 3********///////
// let number = parseInt(prompt("Enter a number:"));

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

///////********QUESTION 4********///////
// let char = prompt("Enter a single character:").toLowerCase();

// if (char.length === 1 && "aeiou".includes(char)) {
//     console.log("True - The character is a vowel.");
// } else {
//     console.log("False - The character is not a vowel.");
// }

///////********QUESTION 5********///////
// const correctPassword = "mySecret125";
// let userPassword = prompt("Enter your password:");
// if (!userPassword) {
//     console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }

///////********QUESTION 6********///////
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);

///////********QUESTION 7********///////
// let time = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7 PM):"));
// if (time >= 0 && time < 1200) {
//     console.log("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//     console.log("Good Evening");
// } else if (time >= 2100 && time <= 2359) {
//     console.log("Good Night");
// } else {
//     console.log("Invalid time entered. Please enter a time between 0000 and 2359.");
// }

/////////////////////CHAPTER 14-16/////////////////////
/////1//////
// let studentNames = [];

/////2//////
// let studentNames = new Array();

// /////3/////
// let stringsArray = ["Apple", "Banana", "Cherry"];

// //////4//////
// let numbersArray = [10, 20, 30, 40, 50];
// // /////5/////
// let booleanArray = [true, false, true, false];

// // /////6/////
// let mixedArray = ["Hello", 25, true, null, 3.14];

// // /////7/////
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// // Display the qualifications in the browser
// document.write("<ol>");
// for (let i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");

// ///////QUESTION 8/////////
// // Declare arrays to store student names and scores
// let studentNames = ["jaweria", "Ali", "Zainab"];
// let studentScores = [400, 350, 450]; 
// for (let i = 0; i < studentNames.length; i++) {
//     let score = studentScores[i];
//     let percentage = (score / 500) * 100; 
//     console.log("Student: " + studentNames[i]);
//     console.log("Score: " + score + " out of 500");
//     console.log("Percentage: " + percentage.toFixed(2) + "%");
//     console.log("*********");
// }
// // ///////QUESTION 9/////////
// let studentScores = [450, 320, 500, 380, 410];
// studentScores.sort((a, b) => a - b);
// document.write(studentScores.join(", "));
// ///////QUESTION 10/////////
// Initialize an array with city names
// let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
// let selectedCities = cities.slice(0, 3);
// document.write(selectedCities.join(", "));

// // ///////QUESTION 11/////////
// // Initialize an array
// let arr = ["This ", " is ", " my ", " cat"];
// let result = arr.join("");
// document.write(result);

/////////////////////CHAPTER 17-20 /////////////////////
// // ///////QUESTION 1/////////
// Declare and initialize an empty multidimensional array
// let multidimensionalArray = [];
// multidimensionalArray.push([1, 2, 3]);
// multidimensionalArray.push([4, 5, 6]);
// multidimensionalArray.push([7, 8, 9]);
// console.log(multidimensionalArray);
// // ///////QUESTION 2/////////
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]
// // ///////QUESTION 3/////////
// // Loop from 1 to 10 and print the numbers
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // // ///////QUESTION 4/////////
// // Ask the user for the table number and length
// let tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
// let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
// for (let i = 1; i <= tableLength; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }

// // ///////QUESTION 5/////////
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// console.log("Fruits:");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // // ///////QUESTION 6/////////
// /// Generate series 
// console.log("\nSeries:");
// //  Counting
// let counting = [];
// for (let i = 1; i <= 15; i++) {
//     counting.push(i);
// }
// console.log("Counting: " + counting.join(", "));
// //  Reverse counting
// let reverseCounting = [];
// for (let i = 10; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// console.log("Reverse Counting: " + reverseCounting.join(", "));
// // Even
// let even = [];
// for (let i = 0; i <= 20; i += 2) {
//     even.push(i);
// }
// console.log("Even: " + even.join(", "));
// // Odd
// let odd = [];
// for (let i = 1; i < 20; i += 2) {
//     odd.push(i);
// }
// console.log("Odd: " + odd.join(", "));
// //  Series
// let series = [];
// for (let i = 2; i <= 20; i += 2) {
//     series.push(i + "k");
// }
// console.log("Series: " + series.join(", "));

// // // ///////QUESTION 7/////////
// // Array of items
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// // Prompt user for input
// const userInput = prompt("Welcome to the bakery! What would you like to search for?").toLowerCase();
// const index = A.indexOf(userInput);
// if (index !== -1) {
//     alert(userInput + " is available at index " + index + " in our bakery.");
// } else {
//     alert("Sorry, " + userInput + " is not available in our bakery.");
// }
// // ///////QUESTION 8/////////
// Array of numbers
// const A = [24, 53, 78, 91, 12];
// // Find the largest number 
// const largestNumber = Math.max(...A);
// // Display the result
// console.log("The largest number in the array is: " + largestNumber);

// // ///////QUESTION 9/////////
// Array of numbers
// const A = [24, 53, 78, 91, 12];
// // Find the smallest number 
// const smallestNumber = Math.min(...A);
// // Display the result
// console.log("The smallest number in the array is: " + smallestNumber);

// // ///////QUESTION 10/////////
let multiplesOf5 = [];
// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        multiplesOf5.push(i);
    }
}
// Display the result
console.log("Multiples of 5 from 1 to 100: " + multiplesOf5.join(", "));

////////////////*********************COMPLETED CHP 13-20********************/////////////////