// Assignment Code
var generateBtn = document.querySelector("#generate");
var person =prompt("Select desired password length (8 min - 128 max characters)") //User must select a value between 8 and 128
var person =prompt("Generate Password with upper-case letters? (y/n)")
var person =prompt("Generate Password with lower-case letters? (y/n)")
var person =prompt("Generate Password with numeric values? (y/n)")
var person =prompt("Generate Password with symbols? (y/n)")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function getRandomLowercase(){

  }

console.log(string.fromCharCode(97));

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
