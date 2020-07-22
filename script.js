// Assignment Code
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");
const lowercase = 'abcdefghijklmnopqrstuvwxyz'; // 26 long. 0-25.
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 26 long. 0-25.
const numbers = '0123456789'; // 10 long. 0-9.
const special = '!?#$%&()*-=,./:;<>@[]^{}~'; // 26 long. 0-25.
var userchoice = []

generateBtn.addEventListener("click",function(){
  var characters = prompt("Select desired password length   (8 min - 128 max characters)", "");
  console.log(characters);
  if (characters < 8 || characters > 128) {
    alert("Sorry. Passwords are a minimum of 8 characters and maximum of 128 characters.")
  }
  else {
    getUserPrompt()
  }
})
function getUserPrompt(){
  var upper = confirm("Generate your password with upper-case letters?   (y/n)")
  console.log(upper);
  
  
  var lower = confirm("How about with some lower-case letters?   (y/n)")
  console.log(lower);
  
  
  var numeric = confirm("Would you like some numeric values?   (y/n)")
  console.log(numeric);
  
  var symbols = confirm("Lastly, shall we include symbols/special characters?   (y/n)")
  console.log(symbols);
}


//what are my valid values? 
//var upper = "A,B,C,D,E,F,G"
//console.log(upperString);

//var lower = "h,i,j,k,l,m,n,o,p" 
//console.log(lowerCase);

//var numeric = "1,2,3,4,5,6,7,8,9" 
//console.log(numeric);

//var specialChar = "#$&@%!^$)(" 
//console.log(specialCase);

//}


//Prompts that the user will have to respond to. // Creates a prompt box which takes in text input.





//Generate the secure password
//function generatethatpassword() {
  //let password = [];
  //if (lower) {
    //for (let i = 0; i < 2; i++) {
      //password.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
 
 

  //user will copy function to clipword
  function copyclip() {
    document.getElementById("display").select();

    document.execCommand("copy");

    alert("Password has been copied to clipboard!");
  }