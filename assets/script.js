// Starter code included complete HTML and CSS

// Global variables
var passwordLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecialChar;

var UserChoices=[];
var letters = "abcdefghijklmnopqrstuvwxyz";
// changes default letters to uppercase
var lettersUpper = letters.toUpperCase();
var numbers = "0123456789";
var specialChar = "!@#$%^&*_-+=?";

// First thing I noticed is 'generatePassword' is not defined
// so we have to create a function
function generatePassword(){

  // Changes variable to an integar using parseInt
var passwordLength = parseInt(prompt("Please choose a password length of at least 8 characters and no more than 128 characters!"));

// Validates if user enters a value
if(!passwordLength){
  alert("Please enter a value.");
}
// Ask Tutor why it doesnt break or loop after this
// Maybe I should make a function showPrompts() and then create a loop/statement and call the function inside those loops
// Validates user's password length
else if(passwordLength < 8 || passwordLength > 128){
passwordLength = parseInt(prompt("Please choose a length between 8 and 128"))
}
else {
  // prompts user to confirm if they would like to include additional criteria for password
  promptUserLowercase = confirm("Would you like to include Lowercase letters?");
  promptUserUppercase = confirm("Would you like to include Uppercase letters?");
  promptUserNumber = confirm("Would you like to include numbers?");
  promptUserSpecialChar = confirm("Would you like to include special characters?");
 
};

// declared userChoices variable
if (!promptUserLowercase && !promptUserUppercase && !promptUserNumber && !promptUserSpecialChar) {
  userChoices = alert("You must pick a criteria if you want a safe password!");
}

// Asked Tutor Else if


// Ask tutor for tips to return random value to text box
// This currently only returns characters and no other values

randomPs ="";
for (i=0; i<passwordLength; i++){
  var randomNumber = Math.floor(Math.random()* letters.length);
  randomPs += letters.substring(randomNumber, randomNumber+1);
 
}

return randomPs;
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
