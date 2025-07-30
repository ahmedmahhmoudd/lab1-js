//Question 1
let x1 =5;
console.log(x1,typeof x1);
//Question 2
let x2 =10;
let y2 = 5;
console.log(x2 + y2);
console.log(x2 - y2);
console.log(x2 * y2);
console.log(x2 / y2);
//Question 3
console.log( isNaN('abc'))
console.log( isNaN('123'));
//Question 4
let number =10;

if (number %2 === 0) {
    console.log("true")
} else {
    console.log("false")
}
//Question 5
let name ="ahmed";
console.log("Welcome to java script"+" "+ name);
//Question 6
let msg = "I am learning JavaScript";
console.log(msg.toUpperCase());
//Question 7
let name2 ="ahmed";
console.log(name2[0]);
console.log(name2[1]);
console.log(name2[2]);
console.log(name2[3]);
console.log(name2[4]);
//Question 8
function greet(name) {
    console.log("Hello " + name);
}
name = "ahmed";
greet(name);
//Question 9
function isNullOrUndefined(value) {
    if (value === null || value === undefined) {
        return true;
    } else {
        return false;
    }
}
value = null;
console.log(isNullOrUndefined(value));
value=0;
console.log(isNullOrUndefined(value));
//Question 10
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(5, 15));
//Question 11
function checkNumberSign(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumberSign(10));
console.log(checkNumberSign(-5));
console.log(checkNumberSign(0));


