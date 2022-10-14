// 1.) 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

//Answer:
console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi));

// 2.) Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//Answer:
console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/gi));

// 3.) 

// 4.) Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const example = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const arr = example.match(/\d+/g);
console.log(arr);
let count = 0
let total = arr.forEach(num => {
    count = count + parseInt(num)
})
console.log(count);