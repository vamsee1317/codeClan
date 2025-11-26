// =======================
// Functions in JavaScript
// =======================

// A function is a reusable block of code that performs a specific task.
// Helps avoid code repetition and improves structure and maintainability.


// -----------------------
// Function Declaration
// -----------------------
// Can be invoked before or after the declaration (Hoisting supported).

function greetUser(){
    return `Helloooo! Good Morning`;
}

console.log(greetUser());


// -----------------------
// Function with Parameters
// -----------------------

function greetUserWithName(name, time){
    console.log(`Hello ${name}! Good ${time}`);
}

greetUserWithName("Vamsee", "Morning");
greetUserWithName("Abhinay");  // 'time' becomes undefined here.


// -----------------------
// Function with Default Parameters
// -----------------------

function greetUserWithDefault(name = "Guest", time = "Day"){
    console.log(`Hello ${name}! Good ${time}`);
}

greetUserWithDefault();
greetUserWithDefault("Vamsee");


// -----------------------
// Function with Return Value
// -----------------------

function addTwoNumbers(num1, num2){
    return num1 + num2;   // return sends a value back to the caller
}

const result = addTwoNumbers(5, 10);
console.log(`The sum is : ${result}`);
console.log(addTwoNumbers(20, 30));


// -----------------------
// Function Expression
// -----------------------
// Cannot be used before the line where it is declared (not hoisted).

const funcExpression = function(){
    console.log("I am a Function Expression");
};

funcExpression();


// -----------------------
// Anonymous Function
// -----------------------
// A function without a name, often used as callback functions.

const anonymousFunc = function(){
    console.log("I am an anonymous function");
};

anonymousFunc();


// -----------------------
// Arrow Function
// -----------------------

const arrowFunc = () => {
    console.log("I am an Arrow Function");
};

arrowFunc();


// -----------------------
// Arrow Function with Parameters
// -----------------------

const multiplyNumbers = (a, b) => {
    return a * b;
};

console.log(`The product is : ${multiplyNumbers(5, 4)}`);


// -----------------------
// Immediately Invoked Function Expression (IIFE)
// -----------------------
// Executes immediately after its creation.

(() => {
    console.log("IIFE executed");
})();
