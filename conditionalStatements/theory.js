// ================= Conditional Statements in JavaScript =================

// Conditional Statements allow us to execute different blocks of code
// based on whether a condition is TRUE or FALSE. They help in controlling 
// the flow of a program logically.

// ------------------------------------------------------------------------
// Types of Conditional Statements:
// 1. if Statement
// 2. if...else Statement
// 3. else if Ladder
// 4. switch Statement
// 5. Nested if Statement
// ------------------------------------------------------------------------


// ========================== 1. if Statement ==============================
// The 'if' statement executes a block of code only when the condition evaluates to TRUE.

if (true) {
  console.log("This message is executed because the condition is TRUE");
}

// ------------------------------------------------------------------------


// ======================== 2. if...else Statement ========================
// The 'else' block runs whenever the 'if' condition is FALSE.

if (false) {
  console.log("This executes only if the condition is TRUE");
} else {
  console.log("This executes when the condition is FALSE");
}

// ------------------------------------------------------------------------


// ========================== 3. else if Ladder ===========================
// Used when there are multiple conditions to check.
// Only the first matching TRUE condition block is executed,
// and remaining blocks are skipped.

let score = 75;

if (score > 90) {
  console.log("Grade A");
} else if (score > 75) {
  console.log("Grade B");
} else if (score > 60) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// ------------------------------------------------------------------------


// ======================== 4. switch Statement ===========================
// The 'switch' statement compares a value with multiple cases.
// 'break' stops execution after a match is found, preventing fall-through.
// 'default' executes when no case matches.

let role = "Developer";

switch (role) {
  case "Developer":
    console.log("Logged in as Developer");
    break

  case "Tester":
    console.log("Logged in as Tester");
    break;

  case "DevOpsArchitect":
    console.log("Logged in as DevOps Architect");
    break;

  default:
    console.log("Guest Access");
}

// ------------------------------------------------------------------------


// ======================== 5. Nested if Statement ========================
// Placing an if inside another if block.
// Used for secondary level checks within a main condition.

let age = 25;

if (age >= 18) {
  console.log("Eligible - Primary Check Passed");

  if (age >= 21) {
    console.log("Eligible for Higher Level Criteria");
  }else{
    console.log("Not Eligible for HLC");
  }
} else {
  console.log("Not Eligible");
}



if (true && true && false || (true && true)) {
  console.log("LEVEL 1: IF block executed");

  if ((false && true && true) || (true && true)) {
    console.log("LEVEL 2: IF executed");
  } else {
    console.log("LEVEL 2: ELSE executed");
  }

  if ((false || true) && (true && false || true)) {
    console.log("LEVEL 2 (SECOND): IF executed");
  } else {
    console.log("LEVEL 2 (SECOND): ELSE executed");
  }

} else {
  console.log("LEVEL 1: ELSE block executed");

  if (false || false || (true && false)) {
    console.log("LEVEL 2 in ELSE: IF executed");

    if ((true && false) || (false && true)) {
      console.log("LEVEL 3: IF executed");
    } else {
      console.log("LEVEL 3: ELSE executed");

      if (true && false && true) {
        console.log("LEVEL 4: IF executed");
      } else {
        console.log("LEVEL 4: ELSE executed");
      }
    }

  } else {
    console.log("LEVEL 2 in ELSE: ELSE executed");
  }
}


// ========================================================================

// End of Conditional Statements in JavaScript