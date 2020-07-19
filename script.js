// Assignment Code
var generateBtn = document.querySelector("#generate");
//User must select a value between 8 and 128
var characters = prompt("Select desired password length   (8 min - 128 max characters)", "");
console.log(characters);
var upper = prompt("Generate your password with upper-case letters?   (y/n)")  // Creates a prompt box which takes in text input.
console.log(upper);
var lower = prompt("How about with some lower-case letters?   (y/n)")
console.log(lower);
var numeric = prompt("Would you like some numeric values?   (y/n)")
console.log(numeric);
var symbols = prompt("Lastly, shall we include symbols?   (y/n)")
console.log(symbols);