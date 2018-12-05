// 1. Variables & constants
// 1a. Create a variable age and initialize it with your own age (you
// may lie if you want to).
let age = 45;
console.log("1a.  \"age\" is: " + age);
// 1b. Create a constant name and initialize it with your name.
const name = "Dimitris";
console.log("1b.  \"name\" is: " + name);
// 1c. Create a variable isMarried and initialize it with true if you're
// married, or with false if you're not (again, you may lie if you want
// to).
let isMarried = true;
console.log("1c.  \"isMarried\" is: " + isMarried);
// 1d. It's your birthday! Increment the variable age by one.
age = age + 1;
console.log("1d.  \"age\" is: " + age);
age += 1;
console.log("1d.  \"age\" is: " + age);
age++;
console.log("1d.  \"age\" is: " + age);
// 1e. Is it possible to change the variable age after you've initialized
// it? Why?
console.log("1.e Yes, a variable's value can change as many times as you want after you've initialized it");
//Yes, a variable's value can change as many times as you want after you've initialized
// it

// 1f. Is it possible to change the variable name after you've
// initialized it? Why?
//No, it is constant, you cannot change it after you've
// initialized it
console.log("1.f No, it is a constant, you cannot change it after you've initialized it");

//--------------------------------------------------------------------------//

// 2. Variable types
// 2a. What is the type of the variable age from section 1?
console.log("2a. The type of \"age\" is: " + typeof (age));
//the type of age is numeric
// 2b. What is the type of the variable name from section 1?
console.log("2b. The type of \"name\" is: " + typeof (name));
//the type of name is string
// 2c. What is the type of the variable isMarried from section 1?
console.log("2c. The type of \"isMarried\" is: " + typeof (isMarried));
//the type of name is boolean
/////////////QQQQQQQQQQQQQQQQ///////////////////
// 2d. What does the following JavaScript evaluate into ("Evaluate into"
// is fancy for: "What is the value"): typeof "4"
let myText = '"Evaluate into" is fancy for: "What is the value": typeof "4"';
console.log("2d. The type of " + myText + " is: " + typeof (myText));
// 2e. Write code that writes the type of "Hello" to the console.
console.log("2e. The type of 'Hello' is: " + typeof ("Hello"));
// 2f. What does the following JavaScript evaluate into: typeof true
//The type of 'true' is: boolean
console.log("2f. The type of 'true' is: " + typeof (true));
// 2g. Given a string let x = "123", how can you turn this into a
// number?
let x = "123";
console.log("2g. The type of \"x\" is: " + typeof (x) + ", the value is: " + "'" + x + "'");
x = Number(x);
console.log("2g. The type of \"x\" is: " + typeof (x) + ", the value is: " + x);
// 2h. Given a number let x = 123, how can you turn this into a
// string?
x = String(x);
console.log("2h. The type of \"x\" is: " + typeof (x) + ", the value is: " + "'" + x + "'");
//---------------------------------------------------------------------//
// 3. Null, undefined and NaN
// 3a. Explain what undefined means.
//A variable has not been assigned a value, or not declared at all.
console.log("3a. A variable has not been assigned a value, or not declared at all.");
// 3b. What does the acronym "NaN" mean?
//'NaN' means Not a Number
console.log("3b. 'NaN' means Not a Number");
// 3c. What is the type of NaN?
//The type of 'NaN' is: number
console.log("3c. The type of 'NaN' is: " + typeof (NaN));

// Given the following code:
// let x;
let y = 0;
// 3d. What is the type of variable x?
//The type of x is: undefined
console.log("3d. The type of \"x\" is: undefined");
// 3e. What is the type of variable y?
//The type of y is: number
console.log("3e. The type of \"y\" is: " + typeof (y));
// 3f. How do you check if some variable called z is NaN?
let z = "some text";
console.log("3f. The assumption that \"z\" is not a Number is: " + isNaN(z));
/////////////QQQQQQQQQQQQQQQQ///////////////////
// 3g. Which is correct: x == 4 or x === 4? Why?
// x === 4 it checks for value and type
let w = "4";
console.log(w == 4);
console.log(w === 4);
console.log("3g. Numbers should be compered by triple equal, check for value and type");
/////////////QQQQQQQQQQQQQQQQ///////////////////
// 3h. Which is correct: x == null or x === null? Why?
let k = null;
console.log(k == null);
console.log(k === null);

let m;
console.log(m == null);
console.log(m === null);
// x == null

// let x = null; 
// x;
// "null"
//a variable that is known to exist, but it has no type or value
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
console.log("3h. A variable that is known to exist should be compered by double equal, it has no type or value");

//-------------------------------------------------------------------------
// 4. Maths & strings
// 4a. Write code that adds the numbers 10 and 15 and assigns the
// result to variable sum.
let sum = 10 + 15;
console.log("4a. The sum is: " + sum);
// 4b. What is the result of the following expression: 3 + 4 * 2?
let clc = 3 + 4 * 2;
console.log("4b. The result is: " + clc);
// 4c. Add parentheses to the expression to make it result 14.
let clc1 = (3 + 4) * 2;
console.log("4c. The result is: " + clc1);
// 4d. What is the result of 20 - 8 - 2 - 4?
let clc2 = 20 - 8 - 2 - 4;
console.log("4d. The result is: " + clc2);
// 4e. Add parentheses to the expression to make it result 10.
let clc3 = 20 - (8 - 2) - 4;
console.log("4e. The result is: " + clc3);
// 4f. What is the result of "Hello," + "world"?
let clc4 = "Hello," + "world";
console.log("4f. The result is: " + clc4);
// 4g. What is the result of "Hello".length?
let clc5 = "Hello".length;
console.log("4g. The result is: " + clc5);

// 5---------------------------------------------------------------------
// 5. Booleans
// 5a. What is the type of true?
let clc6 = typeof (true);
console.log("5a. The type of true is: " + clc6);
// 5b. Which other boolean value exists apart from true?
let clc7 = false;
console.log("5b. other boolean value is: " + clc7);
// 5c. What is the value of 1 === 10?
let clc8 = 1 === 10;
console.log("5c. The value is: " + clc8);
// 5d. What is the value of 10 === 10?
let clc9 = 10 === 10;
console.log("5d. The value is: " + clc9);
// 5e. What is the result of true === false?
let clc10 = true === false;
console.log("5e. The result is: " + clc10);
// Given the following code
let a = true;
let b = false;
// 5f. What is the value of !b?
let clc11 = !b;
console.log("5f. The value is: " + clc11);
// 5g. What is the type of !b?
let clc12 = typeof (!b);
console.log("5g. The type is: " + clc12);
// 5h. What is the value of a && b?
let clc13 = a && b;
console.log("5h. The value is: " + clc13);
// 5i. What is the value of a || b?
let clc14 = a || b;
console.log("5i. The value is: " + clc14);
// 5j. What is the value of false || false || false || true?
let clc15 = false || false || false || true;
console.log("5j. The value is: " + clc15);
// 5k. What is the value of false && false && false && true?
let clc16 = false && false && false && true;
console.log("5k. The value is: " + clc16);
// 5l. How can you write this shorter: a === true
let clc17 = a === true;
let clc18 = a !== false;
console.log("5l. The shorter form of a === true: ->" + clc17 + " is a!== false: ->" + clc18);
// 5m. How can you write this shorter: a === false
let clc19 = a === false;
let clc20 = a !== true;
console.log("5m. The shorter form of a === false: ->" + clc19 + " is a!== true: ->" + clc20);
// 6---------------------------------------------------------------------
// 6. Arrays
// 6a. Write code to create an empty array in variable arr1.
let arr1 = [];
console.log("6a. The variable \"aa1\" is: " + arr1 + " empty");
// 6b. What is the length of the array ["Beef", "Chicken", "Vegetarian"]?
let arr2 = ["Beef", "Chicken", "Vegetarian"];
console.log("6b. The length of \"aar2\" is: " + arr2.length);
// Given the following array:
let arr = [10, 8, 1];
// 6c. Write code to replace the number 8 with 7.
console.log("6ca. The contents of \"aar\" is: " + arr);
arr.splice(1, 1, 7);
console.log("6cb. The contents of \"aar\" is: " + arr);
// 6d. Write code to add the number 2 to the end of the array.
arr.push(2);
console.log("6d. The contents of \"aar\" is: " + arr);
// 6e. Write code to add the number 12 to the start of the array.
arr.unshift(12);
console.log("6e. The contents of \"aar\" is: " + arr);
// 6f. Write code that prints the first item in the array to the console.
console.log("6f. The the first item of the array  \"aar\" is: " + arr[0]);
// 6g. Write code that prints the items of an array arr to the console,
// each item should be logged separately (use a for loop!)
for (i = 0; i < arr.length; i++) {
    console.log("6g. The #" + [i + 1] + " item of the array is: " + arr[i]);
}
// 6h. What does the following JavaScript evaluate into: [].length
let clc21 = [].length;
console.log("6h. [].length evaluate into: " + clc21);
// 6i. Given an array let ingredients = ["Banana", "Oats", "Milk"], is it
// possible to add an item to the array?
let ingredients1 = ["Banana", "Oats", "Milk"];
ingredients1.push("Papaya");
console.log("6i. Yes: " + ingredients1);
// 6j. Given an array const ingredients = ["Banana", "Oats", "Milk"], is
// it possible to add an item to the array?
const ingredients2 = ["Banana", "Oats", "Milk"];
ingredients2.push("Orange");
console.log("6j. Yes: " + ingredients2);
// Given the following code
let arrx = [1, 2, 3];
arrx.push(4);
arrx.shift();

let arr3 = [2, 3, 4];

let arr4 = [];

for (let i = 0; i < arr3.length; i++) {
    arr4.push(1);
}
// 6k. What is the result of arrx.length?
let clc22 = arrx.length;
console.log("6k. The length of \"aarx\" is: " + arrx.length);
// 6l. What is the result of arrx === arr3?
let clc23 = arrx === arr3;
console.log("6l. The result is: " + clc23);
// 6m. What is the result of arrx[0] === arr3[0]?
let clc24 = arrx[0] === arr3[0];
console.log("6m. The result of 'arrx[0] === arr3[0]' is: " + clc24);
// 6n. What is the value of arr4?
console.log("6n. The value of \"aar4\" is: " + arr4);
//----------------------------------------------------------------------------------
// 7. Functions
// 7a. Write a function called four that returns the value 4.
function four() {
    return 4;
}
console.log("7a. function \"four\" returns the value: " + four());
// Given the following code:
function five() {
    return 5;
}

function add(a, b) {
    return a + b;
}

function run() {
    console.log("Running...");
}

function whatIsTheTypeOf(v) {
    console.log("The type of v is " + typeof v);
}
// 7b. What is the type of five()?
let clc25 = typeof (five());
console.log("7b. The type of \"five()\" is: " + clc25);
// 7c. What is the type of five?
let clc26 = typeof (five);
console.log("7c. The type of \"five\" is: " + clc26);
// 7d. How many parameters does the function add have?
console.log("7d. The function \"add\" have 2 parameters");
// 7e. How many parameters does the function five have?
console.log("7e. The function \"five\" have 0 parameters");
// 7f. What is the type of add(1, 2)?
let clc27 = typeof (add(1, 2));
console.log("7f. The type of \"add(1, 2)\" is: " + clc27);
// 7g. What is the type of add("Hello, ", "world")?
let clc28 = typeof (add("Hello, ", "world"));
console.log("7g. The type of \"clc28\" is: " + clc28);
// 7h. What is the type of run()?
/////////////QQQQQQQQQQQQQQQQ///////////////////
let clc29 = typeof (run());
console.log("7h. The type of \"run()\" is: " + clc29);
// 7i. What does this code print to the console: whatIsTheTypeOf(8)?
/////////////QQQQQQQQQQQQQQQQ///////////////////
console.log("7i. The type of \"8\" is: " + whatIsTheTypeOf(8));
// 7j. What does this code print to the console:
// whatIsTheTypeOf(run)?
let clc30 = typeof (run);
console.log("7j. The type of \"run\" is: " + clc30);
//--------------------------------------------------------------------
// 8. Finale
// 8a. What does the following JavaScript evaluate into: typeof "4"
// === typeof 4?
let clc31 = typeof "4" === typeof 4;
console.log("8a. The following JavaScript 'typeof \"4\" === typeof 4' evaluate into: " + clc31);
// 8b. Given an array arr, of which you do not know the length. Write
// code that prints the last element of the array to the console.
let arr5 = [39, 32, 35, 45];

function lastElement() {
    console.log("8b. The last element is: " + arr5[arr5.length - 1]);
}
lastElement(arr5);
// 8c. Write a function that has one parameter called arr and it
// returns a number, which is the length of the array times two.

function sqrtOfArr(arr6) {
    arr6 = [1, 2, 3];
    return arr6.length * 2;
}
console.log("8c. function \"sqrtOfArr\" returns the value: " + sqrtOfArr());
// 8d. Write a function that takes an argument name and prints to the
// console: "Hello, <name>, how are you doing?".
function greeting(name) {
    console.log("8d. Hello " + name + ",how are you doing?");
}
greeting("Dimitris");
// 8e. Can you use template strings to do the same? If you already
// used template strings in 8d, can you write your function with the +
// operator?
// Given the following code:
// const ingredients = ["Banana", "Oats", "Milk"];
// const commandString = "ls|cd|touch|cp";
// 8f. Write code that prints an ingredient list for pancakes using the
// variable ingredients. The list should look like this: "For pancakes,
// you will need Banana and Oats and Milk.". Use the function join!
// Note: you may use the + operator or ES6 template strings for
// question 8f!
// 8g. Use the function split to convert the string commandString into
// an array of commands.
// 8h. Write a function that doubles an array. It:
// Has a parameter called arr, which should be an array.
// Creates a new array (you may come up with the name).
// Adds the elements of arr to the new array (use a for
// loop).
// Adds again the elements of arr to the new array.
// Returns the new array.