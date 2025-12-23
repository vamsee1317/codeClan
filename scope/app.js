// Scope :
// Scope is nothing but which helps us to determine the accessibility (visibility) of variables.

// Types of Scope in JavaScript:
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope

// 1. Global Scope:
// Variables declared outside of any function or block have global scope.
// They can be accessed from anywhere in the file (code).

// 2. Function Scope:
// Variables declared within a function are only accessible within that function.
// They cannot be accessed from outside the function.

// 3. Block Scope:
// Variables declared with let or const within a block (enclosed by curly braces {}) are only accessible within that block.
// They cannot be accessed from outside the block.

// Example Code:

// Global Scope
const globalVar = "I am a global variable";
console.log(globalVar); 

function myFunction() {
    // Function Scope
    var functionVar = "I am a function variable";
    console.log(globalVar); 
    console.log(functionVar); 
}

myFunction();

console.log(globalVar); 
// console.log(functionVar); 

    if (true) {
        // Block Scope
        let blockVar = "I am a block variable";
        console.log(blockVar); 
        console.log(globalVar);
    }

    {
        let a = 10;
        console.log(a);
    }

    let a = 20;
    console.log(a);