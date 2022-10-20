// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("what is the base?", "must be a number");
let height = prompt(("what is the ?", "must be a number"));
const areaTri = .5 * base * height;
console.log(areaTri);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt('Input Side A')
let sideB = prompt("Input Side B");
let sideC = prompt("Input Side C");
const trianglePeri = sideA + sideB + sideC

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("whats the length", "must be a number");
let width = prompt(("whats the width", "must be a number"));
const areaRec = length * width;
const perimeterRec = 2 * (length + width);
console.log(areaRec);
console.log(perimeterRec);

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("what's the radius")
let pi = 3.14
const areaCircle = pi *radius * radius
console.log(areaCircle)

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt("Enter hours");
let rate = prompt("Enter rate");
console.log(hours * rate)

//If the length of your name is greater than 7 say, your name is long else say your name is short.
console.log("clinton".length > 7 ? "my name is long" : "my name is short");

//Compare your first name length and your family name length and you should get this output.
console.log(
  firstName.length > lastName.length
    ? `My first name, ${firstName} is longer than my last name,  ${lastName} `
    : ` My last name, ${lastName} is longer than my first name,  ${firstName} `
);

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 24;
let yourAge = 22;
console.log(`I am ${myAge - yourAge} years older than you`);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let userAge = prompt('your age')
userAge >= 18
  ? `You are ${userAge}. You are old enough to drive`
  : `You are ${userAge}. You will be allowed to drive after ${18-userAge} years.`;

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let Year = prompt('enter year')
Year <= 100
  ? `You are ${Year}. You have ${(100 - userYear) * 24 *60*60} seconds to live`
  : `You are ${Year}. You are dead`;

let date = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let hour = now.getHours();
let minutes = now.getMinutes();
console.log(`${year}-${month}-${date} ${hour}:${minutes} \n
${date}-${month}-${year} ${hour}:${minutes} \n
${date}/${month}/${year} ${hour}:${minutes} \n`);