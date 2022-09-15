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
  // var passLength = Number(prompt("How long would you like your password? Please enter a number between 8 and 128."));
  var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var special= ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", "<", ",", ">", ".", "/", "?"];
  var pass = "";

  var passLength;
  var invalid = true;
  while(invalid)
  {
    passLength = Number(prompt("How long would you like your password? Please enter a number between 8 and 128."));
    if(Number.isNaN(passLength) || passLength < 8 || passLength > 128) {
      alert("Please enter a number between 8 and 128");
    }else{
      invalid = false;
    }
  }

  var passLowerCase = confirm("Would you like to use lowercase?");
  var passUpperCase = confirm("Would you like to use uppercase?");
  var passNumbers = confirm("Would you like to use numbers?");  
  var passSpecial = confirm("Would you like to use special characters?");

  var passCriteria = [];
  
  function addCriteria(a, b){
    if (a) {
      for (var i = 0; i < b.length; i++){
        passCriteria.push(b[i]);
      }
    }
  }
  
  addCriteria(passLowerCase, lowerLetters);
  addCriteria(passUpperCase, capLetters);
  addCriteria(passNumbers, num);
  addCriteria(passSpecial, special);

  return "Hello";
}
