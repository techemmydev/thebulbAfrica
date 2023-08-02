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
//console.log(fruit);
console.log(fruit[0]);
console.log(fruit[3]);
fruit.push("carrot", "melon");
console.log(fruit);
// array slice help you get any element in the array
console.log(fruit.slice(0, 3));
console.log(fruit.slice(3, 6));

//array method(slice,push,indexing)
console.log(fruit.indexOf("pawpaw"));
console.log(fruit.length);
//objects ={}
const person = { Name: "leonard", shirt: "blue" };
console.log(person.Name);
console.log(person.shirt);
// bracket notation is like so you can choose anyone
console.log(person["Name"]);
console.log(person["shirt"]);
//assign object
person.phone = "0903466662";
console.log(person["phone"]);
console.log(person);

//object using my details for examples
const person2 = {
  Names: "emmanuel",
  age7: "56yrs of age",
  school: "yaba technology",
  addrdess: "ggdgdgggdggdgdgdgd",
  person2: (phone = ["0903466662"]),
};
console.log(person2.age7);
console.log(person2.addrdess);
console.log(person2);

//let create a function using the name
const details = (Names, age7) => {
  const person2 = {
    Name: Names,
    age7: age7,
    asset: 6666,
    Fund: 55555,
    netWorth: function () {
      return this.asset * this.Fund;
    },
  };

  const intro = `hi ,my name is ${person2.Name} and am ${
    person2.age7
  } and my asset is $${person2.asset + person2.Fund}usd ${person2.netWorth()}`;
  return intro;
};
console.log(details("emmanuel", "56yrs of age"));
console.log(details("dera", "tttt"));

//loop examples
const Fruit2 = [
  "orange",
  "mango",
  "pawpaw",
  "apple",
  "orange",
  "mango",
  "pawpaw",
  "apple",
  "orange",
  "mango",
  "pawpaw",
  "apple",
];
/*console.log(Fruit2[0]);
console.log(Fruit2[1]);
console.log(Fruit2[3]);
console.log(Fruit2[2]);*/
for (let i = 0; i < Fruit2.length; i++) {
  console.log(Fruit2[i]);
}
//new loops
for (const emmanuel of Fruit2) {
  console.log(emmanuel);
}
const NumberseYre = [1, 2, 6, 7];
//for (let i = 0; i < Numbers.length; i++) {
//console.log(Numbers[i]);
//}
let result = [];
for (const number of NumberseYre) {
  result.push(number * 2);
}
console.log(result);
const double = (NumberseYre) => {
  let result = [];
  for (const emmyev of NumberseYre) {
    result.push(emmyev * 2);
  }
  return result;
};
console.log(double([1, 2, 3]));

const howManyLetters = () => {
  // const phrase = "hey,canstore you go to grocery store for me thank";
  let resultp = 0;
  for (const index in phrase) {
    console.log(Number(index) + 3);
    resultp = Number(index) + 1;
  }

  return { resultp };
};
const phrase = prompt("how re you doing");
console.log(howManyLetters(phrase));

const sumArray = (Five) => {
  let result = 0;
  //loop
  for (const fives of Five) {
    console.log(fives);
    result = result + fives;
  }
  return { Five };
};
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArray(nums));

const max5 = (nevo) => {
  let result = nevo[0];
  //loop
  for (const nevp of nevo) {
    if (nevp > result) {
      result = nevo;
    }
  }
  return { result };
};
console.log(max5([1, 2, 3, 4, 5, 6, 7]));

const letterFrequency = (phrase) => {
  console.log(phrase);
  //make frequency object{}
  let frequency = {};
  for (const letter of phrase) {
    //check if letter exists in frequency
    if (letter in frequency) {
      frequency[letter] = +1;
      //otherwise, set the value to 1
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};
//console.log(letterFrequency("haharohahahahahahahahahahahahahah"));

const wordFrequency = (phrase) => {
  let frequency = {};
  words = phrase.split("");
  for (const word of words) {
    console.log(word);

    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  }

  return frequency;

  return letterFrequency(words);
};
const userInput = prompt("write your sentences");
console.log(wordFrequency(userInput));


