// Hoisting :
// In JavaScript, hoisting is a behavior in which variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.


// Notes :
// 1. Only declarations are hoisted, not initializations.
// 2. Var declarations are scanned first and then made undefined.
// 3. Function declarations are scanned first and then made available.
// 4. Let and Const are not hoisted in the same way as Var.
// 5. Using Let and Const before declaration will result in a ReferenceError.
// 6. Function expressions are not hoisted.

// var myVar;
// myFunction();


// Example of hoisting with variables

console.log(myVar);

var myVar = 10;
 // Output: 10

// Example of hoisting with functions

myFunction();

function myFunction() {
    console.log("Hello, World!");
}

 // Output: "Hello, World!"