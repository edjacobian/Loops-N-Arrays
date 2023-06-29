// Create variable for an array of the input of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Create variable for new array for output of odd numbers
const oddNumbers = [];
// Create for loop for the input of numbers
for (let i = 0; i < numbers.length; i++) {
// Set `if` with modulus to determine odd numbers
  if (numbers[i] % 2) {
// Create push to display odd numbers
    oddNumbers.push(numbers[i]);
  }
}
console.log(oddNumbers);


// Create variable for the input word
const word = "hello";
// Create variables that can serve as counters for vowels & consonants
  // Let over Const so counter can run up
  // Set variable counters at zeroes
let vowelCount = 0;
let consonantCount = 0;
// Create 'for' loop for each word
  // Let loop go through each word one letter at a time
for (let i = 0; i <= word.length-1; i++) {
// Create variable for each letter within word
  const letter = word[i];
// Set if's with strict ='s for each vowel
  // Set "else" to count each *not* vowel aka consonant
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    vowelCount++;
  } else {
    consonantCount++;
  }
}
// Test with 3 lines console.log's for the word, # of vowels, & # of consonants
console.log("Word:", word);
console.log("Consonant Count:", consonantCount);
console.log("Vowel Count:", vowelCount);

 


//Create 'for' loop that creates a new array in reverse order
  //Create variable for set of input numbers
const newNumbers = [1,2,3];
  // Create variable for the reverse array of numbers output
const reverseArray = [];
//Create the loop that begins at the last index and moves backwards one at a time
for(let i=newNumbers.length-1; i >= 0; i--) {
  reverseArray.push(newNumbers[i]);
}
console.log(reverseArray);

//Create a for loop that displays each number from 1-100 on each line
//For each multiple of 3, display "Fizz"
//For each mutliple of 5, display "Buzz"
//For each that are mutliples 3 AND 5, display "FizzBuzz"

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
