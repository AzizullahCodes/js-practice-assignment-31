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
