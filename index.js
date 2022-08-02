//task1
let x = 1;
let y = 2;

let res1 = "" + x + y;
let rest2 = "" + Boolean(x) + y;
let res3 = y > x;
let res4 = x / String(Boolean(y));

//task2
let userNumber = +prompt("Please, enter a number");
let isRightNumber =
  userNumber % 2 === 0 && userNumber % 7 === 0 && Math.sign(userNumber) === 1;
console.log(isRightNumber);

//task3
let myArr = [];
myArr[0] = 1;
myArr[1] = "JavaScript";
myArr[2] = true;
myArr[3] = null;
console.log(myArr.length);

let value = prompt("Please, enter a value");
myArr.push(value);
console.log(value);
myArr.shift();
console.log(myArr);

//task4
let cities = ["Rome", "Lviv", "Warsaw"];
let citiesString = cities.join("*");
console.log(citiesString);

//task5
let isAdult = prompt("Are you of legal age?");
let message = isAdult ? "You have reached of legal age" : "You are too young";
alert(message);

//task6
let a = +prompt("Please, enter the first side of a triangle");
let b = +prompt("Please, enter the second side of a triangle");
let c = +prompt("Please, enter the third side of a triangle");

let square =
  (1 / 4) * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2);

let isCorrectData = square !== 0;
if (!isCorrectData) {
  alert("Incorrect data");
} else {
  alert(square.toFixed(3));
}

let isRightTriangle =
  a ** 2 + b ** 2 === c ** 2 ||
  a ** 2 + c ** 2 === b ** 2 ||
  b ** 2 + c ** 2 === a ** 2;

console.log(isRightTriangle);

//task7 - first way
let currentHour = new Date().getHours();

if (currentHour >= 23 || currentHour < 5) {
  console.log("Good night");
} else if (5 <= currentHour && currentHour < 11) {
  console.log("Good morning");
} else if (11 <= currentHour && currentHour < 17) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

//task7 - second way
let currentHour2 = new Date().getHours();

switch (true) {
  case currentHour2 >= 23 || currentHour2 < 5:
    console.log("Good night");
    break;
  case 5 <= currentHour2 && currentHour2 < 11:
    console.log("Good morning");
    break;
  case 11 <= currentHour2 && currentHour2 < 17:
    console.log("Good day");
    break;
  default:
    console.log("Good evening");
}
