// DOM :
// DOM stands Document Object Model
// DOM is nothing but a tree-like structure where all HTML elements 
// are arranged in a hierarchical fashion.
// DOM enables JavaScript to easily access elements from the DOM tree 
// and perform additional operations needed.

/*  
----------------------------------------------------------------------
    DOM SELECTORS – THEORY + EXPLANATION + CODE
----------------------------------------------------------------------
*/


// ======================================================================
// 1. getElementsByTagName()
// ======================================================================

// THEORY:
// → Used to select ALL elements with a specific HTML tag name.
// → Returns an HTMLCollection (live collection, not a real array).
// → You can access items using index like [0], [1], etc.
// → Mostly used when you want to target multiple similar elements.

// EXAMPLE:
const ulist = document.getElementsByTagName("ul");
console.log(ulist);      // outputs all <ul> elements on the page



// ======================================================================
// 2. getElementsByClassName()
// ======================================================================

// THEORY:
// → Selects ALL elements that have the given class name.
// → Returns an HTMLCollection (live list, array-like).
// → Very useful when multiple elements share the same class.
// → Faster than querySelectorAll() because it directly searches by class name.

// EXAMPLE 1:
const ulistWithClassName = document.getElementsByClassName("navbar");
console.log(ulistWithClassName);  // outputs all elements with class="navbar"

// EXAMPLE 2:
const productCard = document.getElementsByClassName("product-card");
console.log(productCard);         // outputs all elements with class="product-card"



// ======================================================================
// 3. getElementById()
// ======================================================================

// THEORY:
// → Selects the element with a UNIQUE ID.
// → IDs must be unique in HTML, so this returns ONLY ONE element.
// → Returns the element directly (NOT a collection).
// → Fastest selector in the DOM.

// EXAMPLE 1:
const mainHeader = document.getElementById("main-header");
console.log(mainHeader);  // returns the <header id="main-header">

// EXAMPLE 2:
const nameInput = document.getElementById("input-name").value;
console.log(nameInput);   // prints the value inside the input box



// ======================================================================
// 4. querySelector()
// ======================================================================

// THEORY:
// → Selects the FIRST matching element using CSS selectors.
// → Accepts ANY valid CSS selector (#id, .class, tag, attribute, pseudo-class).
// → Returns only the FIRST found element.

// EXAMPLE:
const mainNav = document.querySelector("#main-nav ul li:nth-child(2)");
console.log(mainNav);     // returns the 2nd <li> inside #main-nav



// ======================================================================
// 5. querySelectorAll()
// ======================================================================

// THEORY:
// → Selects ALL matching elements using CSS selectors.
// → Returns a NodeList (NOT live, unlike HTMLCollection).
// → You can use forEach() on NodeList.
// → Best option when selecting using complex CSS rules.

// EXAMPLE:
const mainNavListItems = document.querySelectorAll("#main-nav ul li");
console.log(mainNavListItems);    // NodeList of all <li> in #main-nav

