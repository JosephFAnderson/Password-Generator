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
  var passLowerCase = confirm("Would you like to use lowercase?");
  // console.log(passLowerCase);
  var passUpperCase = confirm("Would you like to use uppercase?");
  // console.log(passUpperCase);
  var passNumbers = confirm("Would you like to use numbers?");
  
  var passSpecial = confirm("Would you like to use special characters?");

  return "Hello";
}
