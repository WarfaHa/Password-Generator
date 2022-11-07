// Starter code included complete HTML and CSS

// Global variables
var passwordLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecialChar;


var letters = "abcdefghijklmnopqrstuvwxyz";
// changes default letters to uppercase
var lettersUpper = letters.toUpperCase();
var numbers = "0123456789";
var specialChar = "!@#$%^&*_-+=?";

// First thing I noticed is 'generatePassword' is not defined
// so we have to create a function
function generatePassword() {

  // created empty array for user choice
  // Tutor helped me put the array inside function so when it ends/resets, it doesnt keep any elements inside of it, and it restarts with an empty array
  var userChoices = [];

  // Changes variable to an integar using parseInt
  var passwordLength = parseInt(
    prompt(
      "Please choose a password length of at least 8 characters and no more than 128 characters!"
    )
  );

  // Validates if user enters a value
  if (!passwordLength) {
    alert("Please enter a value, try again!");
  }

  // Validates user's password length
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must has have length of at least 8 characters and no more than 128 characters, please try again!");
  } 
  
  else {
    // prompts user to confirm if they would like to include additional criteria for password
    promptUserLowercase = confirm(
      "Would you like to include Lowercase letters?"
    );
    promptUserUppercase = confirm(
      "Would you like to include Uppercase letters?"
    );
    promptUserNumber = confirm("Would you like to include numbers?");
    promptUserSpecialChar = confirm(
      "Would you like to include special characters?"
    );
  }

  // declared userChoices variable
  if (
    !promptUserLowercase &&
    !promptUserUppercase &&
    !promptUserNumber &&
    !promptUserSpecialChar
  ) {
    userChoices = alert(
      "You must pick a criteria if you want a safe password!"
    );
  }

// Worked with tutor to learn how to push elements into an empty array 'userChoice'
// created if statement for each criteria
// tutor helped me shorten these else if statements using a for loop
  if (promptUserLowercase) {
    for (i = 0; i < letters.length; i++) {
      userChoices.push(letters[i]);
    }
  }
  if (promptUserUppercase) {
    for (i = 0; i < lettersUpper.length; i++) {
      userChoices.push(lettersUpper[i]);
    }
  }
  if (promptUserNumber) {
    for (i = 0; i < numbers.length; i++) {
      userChoices.push(numbers[i]);
    }
  }
  if (promptUserSpecialChar) {
    for (i = 0; i < specialChar.length; i++) {
      userChoices.push(specialChar[i]);
    }
  }
  
// random loop for each criteria the user picked
  randomPs = "";
  for (i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * userChoices.length);
    randomPs += userChoices[randomNumber];
  }

  // returns the password to the text field
  return randomPs;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
