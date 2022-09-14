// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = Number(prompt("How long would you like your password? Please enter a number between 8 and 128."));
  var invalid = true;
  while(invalid)
  {
    if(Number.isNaN(passLength) || passLength < 8 || passLength > 128) {
      passLength = Number(prompt("Please only enter a number between 8 and 128"));
    }else{
      invalid = false;
    }
  }

  var passLowerCase = confirm("Would you like to use lowercase?");
  var passUpperCase = confirm("Would you like to use uppercase?");
  var passNumbers = confirm("Would you like to use numbers?");  
  var passSpecial = confirm("Would you like to use special characters?");

  return "Hello";
}
