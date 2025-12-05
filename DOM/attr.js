const productCard = document.getElementById("productCard");
const wishlistBtn = document.getElementById("wishlistBtn");
const stockBtn = document.getElementById("stockBtn");
const highlightBtn = document.getElementById("highlightBtn");
const logBox = document.getElementById("logBox");
const statusText = document.querySelector(".status-text");

// Helper to print logs
function log(message) {
  logBox.innerHTML += message + "<br>";
}

/* -----------------------------
   setAttribute()
------------------------------ */
wishlistBtn.addEventListener("click", () => {
  // Real-time example: toggle 'active' class
  wishlistBtn.classList.toggle("active");

  if (wishlistBtn.classList.contains("active")) {
    wishlistBtn.setAttribute("data-wishlist", "true");
    wishlistBtn.textContent = "❤️ In Wishlist";
    log(`setAttribute → Added data-wishlist="true"`);
  } else {
    wishlistBtn.setAttribute("data-wishlist", "false");
    wishlistBtn.textContent = "♡ Add to Wishlist";
    log(`setAttribute → Updated data-wishlist="false"`);
  }
});

/* -----------------------------
   hasAttribute()
------------------------------ */
stockBtn.addEventListener("click", () => {
  if (!productCard.hasAttribute("data-out-of-stock")) {
    productCard.setAttribute("data-out-of-stock", "true");
    statusText.textContent = "Out of Stock";
    stockBtn.textContent = "Mark as Available";
    log(`hasAttribute → Added "data-out-of-stock" attribute`);
  } else {
    productCard.removeAttribute("data-out-of-stock");
    statusText.textContent = "Available";
    stockBtn.textContent = "Mark Out of Stock";
    log(`hasAttribute → Removed "data-out-of-stock" attribute`);
  }
});

/* -----------------------------
   getAttribute()
------------------------------ */
highlightBtn.addEventListener("click", () => {
  productCard.classList.toggle( "highlight");

  const productId = productCard.getAttribute("data-id");
  const category = productCard.getAttribute("data-category");

  log(`getAttribute → Product ID: ${productId}, Category: ${category}`);
});



const error = document.getElementById("error");
console.log(error.attributes.class.nodeValue);






function validatePassword(password) {
    // Length check
    if (password.length < 8 || password.length > 15) {
        return "Password must be 8–15 characters long.";
    }

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;

    // List of special characters we allow
    const specials = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~";

    // Check each character
    for (let char of password) {

        if (char >= "A" && char <= "Z") {
            hasUpper = true;
        } 
        else if (char >= "a" && char <= "z") {
            hasLower = true;
        }
        else if (char >= "0" && char <= "9") {
            hasNumber = true;
        }
        else if (specials.includes(char)) {
            hasSpecial = true;
        }
    }

    // Final validation conditions
    if (!hasUpper) return "Password must contain at least one uppercase letter.";
    if (!hasLower) return "Password must contain at least one lowercase letter.";
    if (!hasNumber) return "Password must contain at least one number.";
    if (!hasSpecial) return "Password must contain at least one special character.";

    return "Valid Password!";
}
