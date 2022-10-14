// 1.) Log the quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another to the browser.

// Answer:
console.log(" 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2.) Using console.log() print out the following quote: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

// Answer:
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3.) Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// Answer:
console.log(typeof "10" === typeof 10);
console.log(typeof "10" === typeof(typeof 10) );

// 4.) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// Answer:
console.log(parseFloat('9.8') === 10);
console.log(Math.ceil(parseFloat('9.8')) === 10);

// 5.) Check if 'on' is found in both python and jargon

// Answer:
console.log('python' && 'jargon'.includes('on'));

// 6.) I hope this course is not full of jargon. Check if jargon is in the sentence.

// Answer:
console.log('I hope this course is not full of jargon'.includes('jargon'));

// 7.) Generate a random number between 0 and 100 inclusively.

// Answer:
let randomNo = Math.random()*101
console.log(Math.round(randomNo));

// 8.) Generate a random number between 50 and 100 inclusively.

// Answer:
let secondRandomNo = (Math.random() * 51) + 50
console.log(Math.round(secondRandomNo));

// 9.) Generate a random number between 0 and 255 inclusively.

// Answer:
let randomNo2 = Math.random() * 255
console.log(Math.round(randomNo2));

// 10.) Access the 'JavaScript' string characters using a random number.

// Answer:
let randomChar = Math.random() * 10
console.log('Javascript'.charAt(Math.floor(randomChar)));

// 11.) Use console.log() and escape characters to print the following pattern.

// Answer:
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125');

// 12.) Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// Answer:
console.log('You cannot end a sentence with because because because is a conjunction'.substr(31, 23));