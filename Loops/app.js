// =========================================================
// REAL-TIME PRODUCTION LEVEL LOOP EXAMPLES IN JAVASCRIPT
// =========================================================

// Example 1: Displaying products list from backend API response
const products = [
  { id: 1, name: "Smartphone", price: 12999 },
  { id: 2, name: "Headphones", price: 1999 },
  { id: 3, name: "Laptop", price: 49999 },
  { id: 4, name: "Smartwatch", price: 2999 }
];

console.log("Available Products:");
for (let product of products) {
  console.log(`${product.name} - ₹${product.price}`);
}


// Example 2: Applying Discounts to each product (Updating array values)
const discountPercentage = 10; // 10% discount

for (let i = 0; i < products.length; i++) {
  const discountAmount = (products[i].price * discountPercentage) / 100;
  products[i].price = products[i].price - discountAmount;
}

console.log("Prices after discount:");
console.log(products);


// Example 3: Calculating Total Cart Price
const cart = [
  { item: "Shoes", price: 1200, qty: 2 },
  { item: "T-Shirt", price: 800, qty: 3 },
  { item: "Jeans", price: 1500, qty: 1 }
];

let totalAmount = 0;

for (let i = 0; i < cart.length; i++) {
  totalAmount += cart[i].price * cart[i].qty;
}

console.log(`Total Amount to Pay: ₹${totalAmount}`);


// Example 4: Searching user by username using loop
const users = ["Vamsi", "Arun", "Ram", "Ravi", "Krishna"];
const searchUser = "Ravi";
let found = false;

for (let user of users) {
  if (user === searchUser) {
    console.log(`User Found: ${user}`);
    found = true;
    break; // Stop loop once found
  }
}

if (!found) {
  console.log("User not found");
}


// Example 5: Iterating Object Values from Database Settings
const projectConfig = {
  appName: "Ecommerce App",
  version: "2.1.0",
  theme: "light",
  region: "India"
};

console.log("Project Configuration:");
for (let key in projectConfig) {
  console.log(`${key}: ${projectConfig[key]}`);
}


// Example 6: Validating Form Fields (Real-Time Form Handling)
const formData = {
  email: "",
  password: "abc123",
  confirmPassword: "abc124"
};

for (let key in formData) {
  if (formData[key] === "") {
    console.log(`❌ ${key} cannot be empty`);
  }
}


// Example 7: Removing Out Of Stock products (Array modifying using loop technique)
let inventory = [
  { item: "Phone", stock: 10 },
  { item: "TV", stock: 0 },
  { item: "Tablet", stock: 3 },
  { item: "Laptop", stock: 0 }
];

let availableProducts = [];

for (let product of inventory) {
  if (product.stock > 0) {
    availableProducts.push(product); // add only if stock > 0
  }
}

console.log("Available products only:");
console.log(availableProducts);


// Example 8: Looping API Fetched Data (Simulated example)
const fetchedOrders = [
  { id: 1001, status: "Delivered" },
  { id: 1002, status: "Processing" },
  { id: 1003, status: "Cancelled" }
];

console.log("Order Status:");
for (let order of fetchedOrders) {
  console.log(`Order ID: ${order.id} - Status: ${order.status}`);
}


// Example 9: Aggregating student marks & finding average
const marks = [87, 92, 76, 81, 95];
let sum = 0;

for (let mark of marks) {
  sum += mark;
}

const average = sum / marks.length;
console.log(`Average Score: ${average}`);


// Example 10: Creating a new array using loops (map-like behavior)
const numbers = [1, 2, 3, 4, 5];
const doubled = [];

for (let num of numbers) {
  doubled.push(num * 2);
}

console.log("Doubled Numbers:", doubled);


// =========================================================
// Real-time summary:
// - for loop           => when you need index or want to modify array by position
// - while loop         => when you don't know how many iterations beforehand
// - do...while         => at least one execution is required
// - for...of loop      => looping values of arrays, strings, sets, maps
// - for...in loop      => looping through object keys
// =========================================================
