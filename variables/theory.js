// ===============================================================
// 🔥 VARIABLES IN JAVASCRIPT — ENHANCED THEORY WITH EXAMPLES
// ===============================================================

// A variable is a named container used to store data values in memory.
// JavaScript allows creating variables using var, let, and const.

// -----------------------------------------------------------------------
//  BEFORE UNDERSTANDING var, let, const — KNOW THESE FOUR KEY TERMS
// -----------------------------------------------------------------------

// 1. Declaration       → Creating a variable (reserving memory).
// 2. Initialization    → Assigning a value for the first time.
// 3. Re-initialization → Changing the value of an already initialized variable.
// 4. Redeclaration     → Declaring the same variable name again.

// -----------------------------------------------------------------------
//  EVOLUTION OF VARIABLES IN JAVASCRIPT
// -----------------------------------------------------------------------

// ES5 (Before 2015) → Only 'var' existed.
// ES6 (2015 onwards) → 'let' and 'const' introduced.
// Purpose:
// - let → block-scoped variables
// - const → block-scoped constants (cannot be reassigned)


// ===============================================================
// 1️⃣ var — FUNCTION SCOPED & ALLOWS REDECLARATION
// ===============================================================

var userName;           // Declaration
console.log(userName);  // Output: undefined (declared but not initialized)

userName = "Alice";     // Initialization
console.log(userName);  // Output: Alice

userName = "Bob";       // Re-initialization
console.log(userName);  // Output: Bob

var userName;           // Redeclaration (Allowed in var)
console.log(userName);  // Output: Bob

// ⚠️ Drawback of var:
// - Redeclaration allowed → can overwrite values unintentionally
// - Function-scoped, not block-scoped → leads to bugs
// Because of this, modern JS prefers let and const.


// ===============================================================
// 2️⃣ let — BLOCK SCOPED & NO REDECLARATION
// ===============================================================

let age;                // Declaration
console.log(age);       // Output: undefined

age = 25;               // Initialization
console.log(age);       // Output: 25

age = 30;               // Re-initialization
console.log(age);       // Output: 30

// let age;             // ❌ Redeclaration NOT allowed (SyntaxError)


// ===============================================================
// 3️⃣ const — BLOCK SCOPED, MUST BE INITIALIZED, IMMUTABLE VALUE
// ===============================================================

const pi = 3.14;        // Declaration + Initialization
console.log(pi);        // Output: 3.14

// pi = 3.14159;        // ❌ Re-initialization not allowed (TypeError)
// const pi;            // ❌ Must be initialized (SyntaxError)


// ===============================================================
// COMPARISON TABLE — var vs let vs const
// ===============================================================

/*
| S.no | Feature            | var   | let   | const |
|------|--------------------|-------|-------|--------|
| 1    | Declaration        | Yes   | Yes   | Yes    |
| 2    | Initialization     | Yes   | Yes   | Yes    |
| 3    | Re-initialization  | Yes   | Yes   | No     |
| 4    | Redeclaration      | Yes   | No    | No     |
| 5    | Scope              | Function | Block | Block |
| 6    | Hoisting           | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| 7    | Must Initialize?   | No    | No    | Yes    |
*/

// ===============================================================
//  FINAL SUMMARY
// ===============================================================
// var   → old, function-scoped, allows redeclaration → avoid it.
// let   → modern, block-scoped, re-assignable → best for variables.
// const → modern, block-scoped, cannot reassign → best for constants.
// ===============================================================
