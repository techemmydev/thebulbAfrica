/*console.log 
use in displaying input on the web browser */
//console.log("hello world");
//console.log("emmanuel");

/*comment
// this green line re called comment 
// line comment
/*...multiple line comment*/
/*...................
 */

//variable let const var
let Name = "peter";
console.log(Name);

sentence = "hope you re good";
console.log(sentence);

//operators
//fruit = prompt("what is your favorite fruit");
//console.log(fruit);
/*food = Number(prompt("how much was the food"));
tipPercentage = Number(prompt("tip %?")) / 100;
tipAmount = food * tipPercentage;
total = food + tipAmount;

console.log(" tip amount", tipAmount);
console.log("total", total);
//alert(tipAmount);

/*maths operations
multiply *
divide /
exponents**
modulo/remainder % 5%2=1
addition+
substraction-
*/
/*
maths methods
ceil
floor
math.random
*/
Math.floor = Number(33000);
console.log(Math.floor);
Math.ceil = Number(500);
console.log(Math.ceil);
//Math.floor(Math.random() * 3);

//conditional
/*let weather = prompt("how is the weather");
if (weather == "rainy") {
  console.log("take your umbrella");
} else {
  console.log("wear your glasses");
}*/

//function
//this is a function called 'sayMyName'
// and it has 0 arguments
function sayMyName() {
  console.log("emeka");
}
sayMyName();
//this is a function called 'sayMyName2'
//it has 1 argument called  `name`
// does:it logs out your name to the console
function sayMyName2(name) {
  console.log(name);
}
//sayMyName2("emmanuel chukeuma");
function greeting(name) {
  //template literals
  greet = `hi ${name},nice to meet you`;
  // greet = "hi " + name + ", nice to meet you";
  console.log(greet);
}
greeting("emmydev");
function Sum(a, b) {
  //return
  return a + b;
}
//console.log(Sum(1, 2));
num1 = Sum(1, 2);
console.log(num1);

//fruit = prompt("what is your favorite fruit");
//console.log(fruit);
function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100;
  const tipAmount = food * tipPercentage;
  const total = Sum(food, tipAmount);

  return total;
}
console.log(calculateFoodTotal(100, 20));

//ES6
//Arrow function=>
//arrow function with explict return
const SumArrow = (a, b) => {
  return a + b;
};
// arrow function with imlicit return remlove curly braces
const SumArrow2 = (a, b) => a + b;
console.log(SumArrow2(100, 50));
//arrays start counting from 0,1,2,3,4,5,6 like that
const fruit = ["orange", "mango", "pawpaw", "apple"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[3]);
