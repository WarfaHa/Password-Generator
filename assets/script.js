// The HTML and CSS files are complete so I started working on the JS file


// Global variables
var passwordLength;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;

var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=?";

// First thing I noticed is 'generatePassword' is not defined
// so we have to create a function
function generatePassword(){

var passwordLength = parseInt(prompt("Please choose a password length of at least 8 characters and no more than 128 characters!"));
if(!passwordLength){
  alert("Please enter a value.");
}
// Ask Tutor why it doesnt break or loop after this
else if(passwordLength < 8 || passwordLength > 128){
passwordLength = parseInt(prompt("Please choose a length between 8 and 128"))
}
else {
  // prompts user to confirm if they would like to include additional criteria for password
  promptUserNumber = confirm("Would you like to include numbers?");
  promptUserSymbol = confirm("Would you like to include special characters?");
  promptUserUppercase = confirm("Would you like to include Uppercase letters?");
  promptUserLowercase = confirm("Would you like to include Lowercase letters?");

};
// returns random password to text box
return passwordLength;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password =  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
