// ================= Production Style Usage of Conditional Statements =================

// 1. If Statement
function handleFormSubmit(formData) {
  if (formData.isValid) {
    saveForm(formData);
  }
}

// 2. If...Else Statement
function authenticateUser(user) {
  if (user.isLoggedIn) {
    loadUserProfile(user.id);
  } else {
    redirectToLogin();
  }
}

// loadUserProfile(userId) {
//   console.log(`Loading profile for user ID: ${userId}`);
// }
// 3. Else If Ladder

function handleApiResponse(statusCode) {
  if (statusCode === 200) {
    processSuccess();
  } else if (statusCode === 401) {
    handleUnauthorized();
  } else if (statusCode === 404) {
    handleNotFound();
  } else if (statusCode === 500) {
    handleServerFailure();
  } else {
    handleUnknownStatus();
  }
}

// 4. Switch Statement
function handleAction(actionType) {
  switch (actionType) {
    case "CREATE":
      createRecord();
      break;

    case "EDIT":
      editRecord();
      break;

    case "REMOVE":
      removeRecord();
      break;

    case "FETCH":
      fetchRecords();
      break;

    default:
      logUnsupportedAction();
  }
}

// 5. Nested If Statement
function validateTransaction(transaction) {

  if (transaction.isInitiated) {
    if (transaction.amount > 0) {
      if (transaction.currency === "INR") {
        processDomesticTransaction();
      } else {
        processInternationalTransaction();
      }
    } else {
      rejectTransactionDueToInvalidAmount();
    }
  } else {
    transactionNotStarted();
  }
}

// Calling the functions with dummy values
handleFormSubmit({ isValid: true });
authenticateUser({ isLoggedIn: false });
handleApiResponse(404);
handleAction("CREATE");
validateTransaction({ isInitiated: true, amount: 2000, currency: "INR" });


// ____________________________________________________________________________________





// ================= Real-Time Style Production Code Using Conditionals =================
// (Without using functions)


// 1. If Statement
let isFormValid = true;

if (isFormValid) {
  console.log("Form submitted successfully");
}

// ----------------------------------------------------------------------


// 2. If...Else Statement
let isUserLoggedIn = false;

if (isUserLoggedIn) {
  console.log("Redirecting to Dashboard...");
} else {
  console.log("Redirecting to Login Page...");
}

// ----------------------------------------------------------------------


// 3. Else If Ladder
let apiStatus = 404;

if (apiStatus === 200) {
  console.log("Request Successful");
} else if (apiStatus === 401) {
  console.log("Unauthorized Access");
} else if (apiStatus === 404) {
  console.log("Resource Not Found");
} else if (apiStatus === 500) {
  console.log("Internal Server Error");
} else {
  console.log("Unhandled Response");
}

// ----------------------------------------------------------------------


// 4. Switch Statement
let selectedAction = "EDIT";

switch (selectedAction) {
  case "CREATE":
    console.log("Creating new record...");
    break;

  case "EDIT":
    console.log("Editing record...");
    break;

  case "DELETE":
    console.log("Deleting record...");
    break;

  case "VIEW":
    console.log("Viewing record...");
    break;

  default:
    console.log("Invalid action selected");
}

// ----------------------------------------------------------------------


// 5. Nested If Statement
let isTransactionStarted = true;
let transactionAmount = 5000;
let transactionCurrency = "INR";

if (isTransactionStarted) {
  console.log("Transaction initiated");

  if (transactionAmount > 0) {
    console.log("Amount verified");

    if (transactionCurrency === "INR") {
      console.log("Processing local currency transaction...");
    } else {
      console.log("Processing foreign currency transaction...");
    }

  } else {
    console.log("Invalid transaction amount");
  }

} else {
  console.log("Transaction has not started");
}

// ----------------------------------------------------------------------
