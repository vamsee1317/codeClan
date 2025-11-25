// ==============================
// LOOPS IN JAVASCRIPT - THEORY
// ==============================

// What are Loops?
// Loops allow us to execute a block of code repeatedly until a specified condition evaluates to true.
// They help avoid writing repetitive code manually.

// Why do we use loops?
// - To automate repetitive tasks
// - To iterate through arrays, strings, objects, etc.
// - To improve code efficiency and reduce redundancy
// - To manage dynamic or large collections of data


// ==============================
// BASIC LOOPS
// ==============================

// 1. FOR LOOP
// The for loop runs a block of code a specific number of times, based on a given condition.
//
// Syntax:
// for(initialization; condition; increment/decrement){
//     // Code to be executed repeatedly
// }
//
// - Initialization: Executes once before the loop begins.
// - Condition: Loop continues as long as this is true.
// - Increment/Decrement: Updates the loop variable after each iteration.


// Example:
for (let i = 1; i <= 5; i++) {
    console.log(`${i}. Hello World`);
}


// Example without defining variable inside loop:
let i = 0;
for (; i < 10; ) {
    console.log(i);
    i++;
}


// ==============================
// Iterating a String
// ==============================
// Strings act like arrays of characters and can be looped using indices.

let userName = "VamsiKrishna";

for (let i = 0; i < userName.length; i++) {
    console.log(userName[i]);
}


// ==============================
// Iterating an Array
// ==============================

let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// Using normal for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using for...of loop (simpler array iteration)
for (let fruit of fruits) {
    console.log(fruit);
}


// ==============================
// 2. WHILE LOOP
// ==============================
// The while loop executes a block of code as long as the condition remains true.
//
// Syntax:
// while(condition){
//     // code
// }

let j = 0;

while (j < 5) {
    console.log(j);
    j++;
}


// ==============================
// 3. DO-WHILE LOOP
// ==============================
// The do-while loop executes the code block at least once,
// even if the condition is false initially.
//
// Syntax:
// do {
//     // code
// } while(condition);

let k = 5;

do {
    console.log("This is Do-While Loop");
    k++;
} while (k < 5);


// ==============================
// ADVANCED LOOPS
// ==============================

// 1. for...in loop
// Used to iterate over the keys of an object.

const userInfo = {
    name: "Abhinay",
    age: 19,
    gender: "male",
    email: "abc@gmail.com"
};

console.log(userInfo.name);         // Dot notation
console.log(userInfo["name"]);      // Bracket notation

for (let key in userInfo) {
    console.log(userInfo[key]);      // Access values dynamically using key
}


// ==============================
// 2. for...of loop
// ==============================
// Used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// It returns values directly, unlike for...in which returns keys.

const users = ["Abhinay", "Mansoor", "Yashwanth", "Vamsee", "Krishna"];

for (let user of users) {
    console.log(user);
}


// ==============================
// KEY DIFFERENCE: for...in vs for...of
// ==============================
// for...in  --> Iterates over object keys (indexes or property names)
// for...of  --> Iterates over values of iterable items