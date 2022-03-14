// // let i =10;

// do{
//     comsole.log(i);
//     i++;
// } while (i< 10);

// console.log ("***********************");

//     while (i<10){
//     console.log(i);
//     i++;
//     }

//break and continue;
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("five");
//         break;
//     }
//     console.log(i);
// }

// function with parameter
function myself(name) {
  console.log("My name is ", name);
}

myself("John doe");
myself("Jane Doe");
myself("Gifty Doe");

function add(x, y) {
  let sum = x + y;
  console.log(sum);
}

add(5, 6);
add(6, 7);
add(7, 8);

function multiply() {
  let sum = x * y;
  console.log(sum);

  multiply(5, 6);
  multiply(6, 7);
  multiply(7, 8);
}

// function with return value
function add(x, y) {
  let sum = x + y;
  return sum;
}
let result = (10, 15);
let newResult = result * 2;
console.log(newResult);

// arrow function
let divide = (a, b) => a / b;
let multiply2 = (a, b) => {
  let sum = a * b;
  return sum;
};
console.log(divide(10, 5));
console.log(multiply2(10, 5));

// Higher Order Function
// Is a function that takes a function as parameter
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares2 = numbers.map((number) => number * number);
let doubles = numbers.map((number) => number + number);
console.log(doubles);
console.log(doubles);

let evens = numbers.filter((number) => number % 2 === 0);
let odds = numbers.filter((number) => number % 2 !== 0);
let odds2 = numbers.filter((number) => number % 2 === 1);
console.log(evens);
console.log(odds);

let five = numbers.find((num) => num === 11);
console.log(five);

// string
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
// console.log(sentence.charCodeAt(10));
console.log(sentence.concat(" from concatenation"));
console.log(sentence.endsWith("dog"));
console.log(sentence.endsWith("hardworking"));
console.log(sentence.indexOf("q"));
console.log(sentence.indexOf("brown"));
console.log(sentence.indexOf("o, 13"));
console.log(sentence.indexOf("o"))
console.log(sentence.padStart(10));
console.log(sentence.repeat(2));
console.log(sentence.replace("lazy", "hardworking"));
console.log(sentence.slice("20, 30 "));
console.log(sentence.substring("20, 30"));
console.log(sentence.split(" "));
let email = "kofi@email.com";
console.log(email.split("@"));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
