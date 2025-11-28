// ===============================================================
// DOM MANIPULATION – COMPLETE CLASSROOM DEMO
// ===============================================================

// Step 1: Selecting the Product Section
const productSection = document.getElementById("section-products");


// ======================================================================
// 1️⃣ CREATING AN ELEMENT
// ======================================================================
// document.createElement() → creates a new blank element (not yet in DOM)

const newCard = document.createElement("div");
newCard.className = "product-card";

console.log("New element created:", newCard);


// ======================================================================
// 2️⃣ ADDING CONTENT
// ======================================================================

// (A) innerText = visible text only
newCard.innerText = "This will be replaced soon...";

// (B) textContent = similar but includes hidden text
newCard.textContent = "Setting temporary text...";

// (C) innerHTML = allows HTML structure (commonly used)
newCard.innerHTML = `
    <h3 class="font-bold text-lg">Wireless Headphones</h3>
    <p>High-quality wireless headphones with noise cancellation.</p>
    <button class="bg-blue-600 text-white px-3 py-1 rounded mt-2">Add To Cart</button>
`;


// ======================================================================
// 3️⃣ ADD ELEMENTS TO THE DOM TREE
// ======================================================================

// (A) appendChild() → adds element at the END
productSection.appendChild(newCard);


// Create bonus demo elements
const textNodeExample = document.createElement("div");
textNodeExample.innerText = "Example appended text";

const heading = document.createElement("h3");
heading.innerText = "✨ New Arrival";


// (B) append() → can add multiple items OR text
productSection.append("Appended tail text →", textNodeExample);

// (C) prepend() → adds element at the START
productSection.prepend(heading);

// (D) insertBefore(newElement, referenceElement)
const featuredPro = document.getElementById("featuredPro");
productSection.insertBefore(heading.cloneNode(true), featuredPro);

// (E) insertAdjacentElement(position, element)
const badge = document.createElement("span");
badge.innerText = "🔥 Hot Deal!";
badge.style.color = "red";
badge.style.fontWeight = "bold";

// Positions: beforebegin, afterbegin, beforeend, afterend
newCard.insertAdjacentElement("afterbegin", badge);


// ======================================================================
// 4️⃣ REPLACING ELEMENTS
// ======================================================================

// (A) replaceWith() → replaces whole element
const replacedMessage = document.createElement("p");
replacedMessage.innerText = "This product was replaced!";
featuredPro.replaceWith(replacedMessage);

// (B) replaceChild(new, old)
const childReplaceNote = document.createElement("p");
childReplaceNote.innerText = "Child replaced using replaceChild.";

productSection.replaceChild(childReplaceNote, productSection.children[2]);


// ======================================================================
// 5️⃣ REMOVING ELEMENTS
// ======================================================================

// (A) remove() → remove element directly
childReplaceNote.remove();

// (B) removeChild() → remove via parent
productSection.removeChild(productSection.lastElementChild);


console.log("DOM Manipulation Demo Completed Successfully!");
