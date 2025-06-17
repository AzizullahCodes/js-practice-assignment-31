/*
===============================
js-problem-solving-practice-assignment-31
===============================

// ===================================================
// Ques No 1: Call of function inside another function
// ===================================================

function add(a, b) {
  let result = a + b;
  return result;
}

function subtract(a, b, c) {
  add(a, b);
  let subtract = add(a, b) - c;
  return subtract;
}

function multiply(a, b, c, d) {
  subtract(a, b, c);
  let multip = subtract(a, b, c) * d;
  return multip;
}

function divide(a, b, c, d, e) {
  multiply(a, b, c, d);
  let division = multiply(a, b, c, d) / e;
  return division;
}

let finalResult = divide(100, 200, 100, 2, 100);
console.log(finalResult);

// ===================================================
// Ques No 2: onclick event practice
// ===================================================

function add(x, y) {
  let a = x + y;
  console.log(a);
}

// ===================================================
// Ques No 3: onclick event practice
// ===================================================

function welcom(t) {
  let a = 'welcome ' + t;
  console.log(a);
}

// ===================================================
// Ques No 4: Local vs Global
// ===================================================

var name = 'Azizullah';

function greet() {
  let name = 'naeem';
  console.log(name);
  console.log(name);
}

greet();
console.log(name);
console.log(name);

// ===================================================
// Ques No 5: Local Scope Example
// ===================================================

function addNumbers() {
  let a = 5;
  let b = 10;
  let result = a + b;
  console.log(result);
}

addNumbers();

// ===================================================
// Ques No 6: Local and Global Same Name
// ===================================================

let message = 'Hello World';

function changeMessage() {
  let message = 'Hello JavaScript!';
  console.log(message);
}

changeMessage();
console.log(message);

// ===================================================
// Ques No 7: Function Changing Global
// ===================================================

let score = 50;

function updateScore(points) {
  let result = points + score;
  return result;
}

let call1 = updateScore(10);
let call2 = updateScore(20);

console.log(call1);
console.log(call2);

// ===================================================
// Ques No 8: Local Variable Not Accessible Outside
// ===================================================

function showSecret() {
  let secret = 'hello';
  console.log(secret);
}

showSecret();

// ===================================================
// Ques No 9: Function with Both Local and Global
// ===================================================

let city1 = 'Mianwali';

function showCity() {
  let city = 'Essakhel';
  console.log(city);
  console.log(city1);
}

showCity();

// ===================================================
// Ques No 10: Use Local Variable in Another Function
// ===================================================

function createNumber() {
  let num = 99;
  return num;
}

function printNumber() {
  createNumber();
  console.log(num);
}

createNumber();
printNumber();

===============================
End of js-problem-solving-practice-assignment-31
===============================
*/
// ques no 11
// Write a function getGreeting()

// Inside, declare a local variable greeting with any string.

// return the greeting.

// Call the function and store the returned value in a variable.

// console.log the stored value outside the function.

// Goal: Practice returning a local variable value.

// function getGreeting(){let greeting = 'welcome';
//   return greeting;
//   }
//   let finalResult = getGreeting();
//   console.log(finalResult);
// ___________________________________________________________________________________
// ques no 12
// Create a global variable total with value 100.

// Write a function addBonus()

// Inside, declare a local variable total with value 50.

// console.log the local total.

// Also add 50 to the global total inside the function using window.total or a different name to avoid confusion.

// Call addBonus().

// console.log the global total after the function call.

// Goal: See local and global with same name but different effects.

// ans 
//  let total = 100;
//  function addBonus(){let total = 50;
//    console.log('local',total);
//   globalThis.total += 50;
//  }
//  addBonus();
//   console.log('global',total)

// ____________________________________________________________________________________
// ques no 13
//  Local Overrides Global
// Description:

// Create a global variable status with value "Active".

// Write a function changeStatus()

// Inside, declare a local variable status with value "Inactive".

// console.log the local status.

// Also change the global status to "Suspended" using globalThis.status.

// Call changeStatus().

// console.log the global status after calling the function.

// Goal: See how local status hides global, but global can still be updated.

// ans 
// let status = 'Active';
// function changeStatus(){let status = 'Inactive';
//   console.log('local status',status);

// }
// changeStatus();
// console.log('global',status);
//________________________________________________________________________________
// ques no 14
//  Local Calculation, Global Update
// Description:

// Create a global variable points with value 30.

// Write a function calculatePoints()

// Inside, declare a local variable points with value 5.

// Multiply the local points by 2 and console.log the result.

// Add 20 to the global points using globalThis.points.

// Call calculatePoints().

// console.log the global points after the function call.

// Goal: Use local for calculation, global for storage.
// ans 
//  var points = 30;
//  function calculatePoints(){var points = 5;
 
//    console.log(points * 2);
// window.points += 20;
  

//  }
//  calculatePoints();
//  console.log('global',points)
// _____________________________________________________________________________________
// ques no 15
// Local and Global Number Addition
// Description:

// Create a global variable balance with value 500.

// Write a function adjustBalance()

// Inside, declare a local variable balance with value 200.

// console.log the local balance.

// Add 100 to the global balance using globalThis.balance.

// Call adjustBalance().

// console.log the global balance after the function call.

// Goal: Similar concept with a finance-style variable.
// ans 
// var balance = 500;
// function adjustBalance(){var balance = 200;
//   console.log('local balance', balance);
//   window.balance = window.balance + 100;
// }
// adjustBalance();
// console.log('global balance',balance);
// ________________________________________________________________________________
// ques no 16
//  Local vs Global String
// Description:

// Create a global variable title with value "Beginner".

// Write a function updateTitle()

// Inside, declare a local variable title with value "Intermediate".

// console.log the local title.

// Change the global title to "Advanced" using globalThis.title.

// Call updateTitle().

// console.log the global title after the function call.

// Goal: Practice local vs global with string values.
// ans 
// var title = 'Beginner';
// function updateTitle(){var title = 'Intermediate';
//   console.log('local title', title);
//   window.title = 'Advanced';

// }
// updateTitle();
// console.log('global title',title)
// ______________________________________________________________________________________
// ques no 17
// Local vs Global Counter
// Description:

// Create a global variable counter with value 0.

// Write a function increaseCounter()

// Inside, declare a local counter with value 10.

// Add 5 to the local counter and console.log it.

// Also add 1 to the global counter using window.counter (or globalThis.counter).

// Call increaseCounter() three times.

// console.log the global counter after the calls.

// Goal: See how local stays the same but global keeps increasing.
// ans 
// var counter = 0;
// function increaseCounter(){var counter = 10;
//   counter = counter + 5;
//   console.log('local counter',counter);
//   window.counter = window.counter + 1;

// }
// increaseCounter();
// console.log('global counter',counter);
// _________________________________________________________________________________
// ques no 18
//  Local vs Global String Update
// Description:

// Create a global variable message with value "Hello".

// Write a function updateMessage()

// Inside, declare a local message with value "Hi".

// console.log the local message.

// Change the global message to "Hey" using window.message.

// Call updateMessage().

// console.log the global message after calling the function.

// Goal: Practice shadowing + updating global.
// ans 
//  var message = 'Hello';
// function updateMessage(){var message = 'Hi';
//   console.log('local message',message);
//   window.message = 'Hey';
// }
// updateMessage();
// console.log(message);
// ____________________________________________________________________________
// ques no 19
//  Local Sum, Global Store
// Description:

// Create a global variable result with value 0.

// Write a function sumNumbers()

// Inside, declare two local variables num1 = 5 and num2 = 10.

// Calculate their sum and console.log it.

// Store the sum in the global result using window.result.

// Call sumNumbers().

// console.log the global result.

// Goal: Use locals for calculation, global for storing.
// ans 
// var result = 2;
// function sumNumbers(){var num1 = 5;
//   var num2 = 10;
//   var sum = num1 + num2;
//   console.log(sum);
//   window.result = window.result + sum;
// }
// sumNumbers();
// console.log(result);
// ________________________________________________________________________________________
// ques no 20
//  Local vs Global Boolean
// Description:

// Create a global variable isLoggedIn with value false.

// Write a function checkLogin()

// Inside, declare a local isLoggedIn with value true.

// console.log the local isLoggedIn.

// Change the global isLoggedIn to true using window.isLoggedIn.

// Call checkLogin().

// console.log the global isLoggedIn.

// Goal: See local vs global for boolean flags.
// ans 
// var isLoggedIn = false;
// function checkLogin(){var isLoggedIn = true;
//   console.log('the local',isLoggedIn);
//   window.isLoggedIn = true;
// }
// checkLogin();
// console.log(isLoggedIn)
// _______________________________________________________________________________________
// ques no 21
//  Local vs Global Array Length
// Description:

// Create a global array fruits with 2 fruit names.

// Write a function addFruit()

// Inside, declare a local array fruits with 1 fruit name.

// console.log the length of the local fruits.

// Add a fruit to the global fruits using window.fruits.push().

// Call addFruit() twice.

// console.log the global fruits after the calls.

// Goal: Local array stays same, global array grows.

// ans 
// var fruit = ['apple','banana'];
// function addFruit(){var fruit = ['orange'];
//    console.log(fruit.length);
// window.fruit  = window.fruit.push('lemon');
// }
// addFruit();
// console.log('global',fruit)