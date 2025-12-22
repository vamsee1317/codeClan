// regex patterns
const userNamePattern = /^[A-Za-z0-9]{1,10}$/;
const mobileNumberPattern = /^[6-9][0-9]{9}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Password: at least 1 lowercase, 1 uppercase, 1 digit, 1 special char, length 8-15
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,15}$/;

const registerForm = document.getElementById("registerForm");

// helper: show and clear errors
function showError(fieldId, message) {
  const el = document.getElementById(fieldId + "Error");
  if (el) el.textContent = message;
}

function clearError(fieldId) {
  const el = document.getElementById(fieldId + "Error");
  if (el) el.textContent = "";
}

// get users array from localStorage (or empty)
function getStoredUsers() {
  try {
    const raw = localStorage.getItem("users");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function storeUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // clear previous errors
  ["userName", "email", "mobileNumber", "password", "confirmPassword"].forEach(clearError);

  const userName = document.getElementById("userName").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobileNumber = document.getElementById("mobileNumber").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  // username
  if (!userNamePattern.test(userName)) {
    showError("userName", "Username must be 1-10 characters, letters & numbers only.");
    isValid = false;
  }

  // email
  if (!emailPattern.test(email)) {
    showError("email", "Please enter a valid email address.");
    isValid = false;
  }

  // mobile
  if (!mobileNumberPattern.test(mobileNumber)) {
    showError("mobileNumber", "Mobile number must be 10 digits and start with 6-9.");
    isValid = false;
  }

  // password
  if (!passwordPattern.test(password)) {
    showError(
      "password",
      "Password must be 8-15 chars, include 1 uppercase, 1 lowercase, 1 number and 1 special character."
    );
    isValid = false;
  }

  // confirm password
  if (password !== confirmPassword) {
    showError("confirmPassword", "Passwords do not match.");
    isValid = false;
  }

  if (!isValid) {
    return; // stop submit, errors are shown
  }

  // check existing user in localStorage (by email)
  const users = getStoredUsers();
  const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (existing) {
    // existing user -> route to login page
    // Display an error and redirect to login page
    // Replace 'login.html' with your real login path
    showError("email", "User already exists. Redirecting to login...");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 900); // short pause so user sees message (optional)
    return;
  }

  // create new user object (store minimal required fields; do NOT store plaintext password in production)
  const newUser = {
    userName,
    email,
    mobileNumber,
    password // NOTE: for production, hash passwords on server. This demo stores plaintext only for demonstration.
  };

  users.push(newUser);
  storeUsers(users);

  // success — route to a welcome page or show a success message
  // Replace 'welcome.html' with your real after-registration page
  alert("Registration successful! Redirecting...");
  window.location.href = "welcome.html";
});
