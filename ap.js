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
// ___________________________________________________________________________________
// ques no 22
// onclick event
// ans 
//  function add(a,b){var sum = a +b;
// console.log(sum);
// var subtract = a - b;
// console.log(subtract);
// var multiply = a * b;
// console.log(multiply);
// var finalResult = (sum + subtract + multiply)/3;
// console.log(finalResult);

//  }
// ____________________________________________________________________________________
// ques no 23
// onclick practice
// ans
// function merge(x,y,z,u){let a = x +' ' + y;
//   console.log(a);
//   let b = a + ' ' + z;
//   console.log(b);
//   let c = b + ' ' + u;
//   console.log(c)
// }
// _________________________________________________________________________________
// ques no 24;
// onclick event practice
// ans
// Function to perform a series of calculations
// function calculation(a, b, c, d, e, f) {
//   let sum = a + b;
//   let multiply = sum * c;
//   let divide = multiply / d;
//   let subtract = divide - e;
//   let average = a + b + c + d + e / f;
//   console.log(average);

// }
// we call function in index.html and pass argument by onclick event by 
// button
//  <button onclick="calculation(2,3,2,2,1,4)"></button>
// ________________________________________________________________________________________
// ques no 25
// Description:

// Create a button.

// When you click the button, a function runs.

// The function logs “Button clicked!” and the current date/time to the console.

// ans 
// function date(){console.log(new date())
// }
 // Function called by onclick event
   // Function called by onclick event
  // function showMessage(result2) {
  //   console.log("Button clicked!");
  //   let result = new Date();
  //      result = result.toLocaleDateString();
  //   console.log(result);
   
  // }
  // ________________________________________________________________________________
  // ques no 26
  // Question:

// Create a function named performCalculations that takes six numerical 
// : num1, num2, num3, num4, num5, and num6.

// Inside this function, perform the following operations:

// Calculate the sum of num1 and num2.
// Multiply the sum by num3 to get product.
// Divide the product by num4 to get quotient.
// Subtract num5 from the quotient to get difference.
// Calculate the average of all six numbers (num1 + num2 + num3 + num4 + num5 divided by num6).
// Finally, log only the average to the console.

// Task:

// Call this performCalculations function using an onclick event on an HTML button. Pass the following arguments to the function: 2, 3, 2, 2, 1, 4.
// ans 
// function performCalculations(num1,num2,num3,num4,num5){let sum = num1 + num2;
//   let product = sum * num3;
//   let quotient = product / num4;
//   let difference = quotient - num5;
//   let average = num1 + num2 + num3 + num4 + num5 /5;
//   console.log(average);}
// _____________________________________________________________________________________
// ques no 27
// Temperature Converter
// Question:
// Create a JavaScript function called convertCelsiusToFahrenheit that takes one numerical argument: celsius. Inside this function, convert the Celsius temperature to Fahrenheit using the
//  formula: Fahrenheit = (Celsius * 9/5) + 32. Log only the calculated Fahrenheit temperature to the console.

// Task:

// Create an HTML button. When this button is clicked, it should call the convertCelsiusToFahrenheit function, passing 25 as the argument.
// ans 
// function convertCelsiusToFahrenheit(celsius){let Fahrenheit = (celsius * 9/5)+32;
//   console.log(Fahrenheit);
// };
// __________________________________________________________________________________________
// ques no 28
//  Simple Greeting Generator
// Question:
// Create a JavaScript function called greetUser that takes two string arguments: firstName and lastName. Inside this function, construct a greeting message in the format: "Hello, [firstName] [lastName]! Welcome to our page." Log only this complete greeting message to the console.

// Task:

// Create an HTML button. When this button is clicked, it should call the greetUser function, passing "Alice" as the firstName and "Smith" as the lastName.
// function greetUser(firstName,lastName){let message = 'Hello '+firstName +' ' + lastName +' ' + 'welcome to our page';
//   console.log(message);
// }
// ---------------------------------------------------------------------------------------------
// ques no 29
// 
// Create a JavaScript function called calculateRectangleArea that takes two numerical arguments: length and width. Inside this function, calculate the area of a rectangle using the formula: Area = length * width. Log only the calculated area to the console.

// Create an HTML button. When this button is clicked, it should call the calculateRectangleArea function, passing 10 as the length and 5 as the width.
// ans 
// function calculateRectangleArea (length,width){let area = length * width;
//   console.log(area);
// }
// ___________________________________________________________________________________________
// ques no 31
// Even or Odd Checker
// Create a JavaScript function called checkEvenOrOdd that takes one numerical argument: number. Inside this function, determine if the number is even or odd. If it's even, log "The number [number] is Even." to the console. If it's odd, log "The number [number] is Odd." to the console.

// Task:

// Create an HTML button. When this button is clicked, it should call the checkEvenOrOdd function, passing 7 as the argument.
// ans 
// function checkEvenOrOdd(number){if(number % 2 === 0){console.log('Number is even')}
// else{console.log('odd')}}
// _______________________________________________________________________________________
// ques no 32
// Discount Calculator
// Create a JavaScript function called calculateDiscountedPrice that takes two numerical arguments: originalPrice and discountPercentage. Inside this function, calculate the 
// discounted amount: Discount = originalPrice * (discountPercentage / 100). Then, calculate the finalPrice: finalPrice = originalPrice - Discount. Log only the finalPrice to the console.

// Create an HTML button. When this button is clicked, it should call the calculateDiscountedPrice function, passing 150 as the originalPrice and 20 as the discountPercentage.
// ans 
// function calculateDiscountedPrice(originalPrice,discountPercentage){let discount = originalPrice * (discountPercentage / 100);
//   let finalPrice = originalPrice - discount;
//   console.log(finalPrice);
// }
// ________________________________________________________________________________________
// ques no 33
// Scenario Analysis: You have a global variable x initialized to 10. You then
//  define a function modifyX that declares a new variable, also named x, 
// inside its scope and initializes it to 5. Inside modifyX, you increment 
// this local x by 1. After calling modifyX, what is the value of 
// the global x? Why?
// ans 
// var x = 10;
// function modifyX(){var x = 5;
//        x = x +1;
//   console.log('local',x);
//   window.x = window.x + 100;
// }
// modifyX();
// console.log('global',x)
// ___________________________________________________________________________________
// ques no 34
// Scope and Hoisting (Implicit Globals): Consider a function createMessage. 
// Inside this function, you assign a value to a variable message without 
// using var, let, or const. After the function executes, can you access 
// message outside the function? If so, what is its scope? If not, why? 
// What is the recommended practice to avoid this behavior?
// ans 
// function createMessage(message){message = 'hello';
//   console.log(message);
//   message = message + ' My dear';
//   console.log(message)
// }
// createMessage();
// ____________________________________________________________________________________
// ques no 35
// Parameter vs. Global: You have a global variable count set to 0.
//  You define a function incrementCount that takes one parameter,
//  also named count. Inside the function, you increment this parameter
//  count by 1. After calling incrementCount with the global count as an 
// argument, what is the value of the global count? Explain your reasoning.
// ans 
// var  count = 0;
// function increaseCounter(count){var count = count + 1;
//   console.log(count);
// }
// increaseCounter(count);
// console.log(count);
// _________________________________________________________________________________________
// ques no 36 
// Reassignment vs. New Declaration:

// You have a global variable data = "Global Data".
// Inside a function processData, you write data = "Local Data".
// What is the value of data outside the function after processData is called?
// Now, if inside processData you wrote let data = "Local Data", what would be
//  the value of data outside the function after processData is called? 
// Explain the difference in behavior.
// var data = 'Global Data';
// function processData(){let data = 'Local Data';
//   console.log('local', data)
// }
// processData();
// console.log(data);
// ___________________________________________________________________________________
// ques no 37
// global varialbe
// ans 
// var name = 'Azizullah';
// function greet(nam){var message = 'Welcome' + ' ' + nam;
//   console.log(message);
//   console.log(name);
// }
// greet('Ali');
// console.log(message);
// // ap.js:686 Uncaught ReferenceError: message is not defined
//     // at ap.js:686:13

// ______________________________________________________________________________________
// ques no 38 
// call local variable outside function
// ans 
// function add(num1,num2){let sum = num1 + num2;
//   return sum;
// }
//  let sum2 = add(4,8);
// console.log(sum2);
// _______________________________________________________________________________________
// ques no 39
// modification of local variable inside a function
// ans 
// var number = 2;
// function modification(){var number = 5;
//   console.log('Local number',number);
//   window.number = window.number + 100;

// }
// modification();
// console.log('global number',number)
// ____________________________________________________________________________
// ques no 40 
// access global variable inside function 
// ans 
// var number = 100;
// function acessVariable(){var number = 2;
//   console.log('local variable',number);
//   console.log('global variable',window.number)}
//   acessVariable()
// _____________________________________________________________________________
// ques no 41
// onclick event practice:
// ans 
function calculation(num1,num2){let sum = num1 + num2;
  console.log(sum);
}