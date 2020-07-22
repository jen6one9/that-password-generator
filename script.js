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
    getUserPrompt(parseInt(characters))
  }
})
function getUserPrompt(characters){
  var upper = confirm("Generate your password with upper-case letters?")
  console.log(upper);
  
  
  var lower = confirm("How about with some lower-case letters?")
  console.log(lower);
  
  
  var numeric = confirm("Would you like some numeric values?")
  console.log(numeric);
  
  var symbols = confirm("Lastly, shall we include symbols/special characters?")
  console.log(symbols);
  userchoice = []
  if(upper){
    userchoice+= uppercase
  }
  if(lower){
    userchoice+= lowercase
  }
  if(numeric){
    userchoice+= numbers
  }
  if(symbols){
    userchoice+= special
  }
  if(!upper && !lower && !numeric && !symbols) {
    alert("Sorry. You must have atleast one selection.")
  }
  else{
  console.log(userchoice)
  let password = "";
    for(let i=1; i<=characters; i++){
var index = Math.floor(Math.random() * userchoice.length) 
password+=userchoice[index]
  
    
  

    }
    console.log(password)
    var textbox=document.getElementById("password")
    textbox.innerText=password
  }
}










//var clearBtn=document.getElementById("")

 

  //user will copy function to clipword
  function copyPassword() {
    document.getElementById("password").select();

    document.execCommand("copy");

    alert("Password has been copied to clipboard!");
  }