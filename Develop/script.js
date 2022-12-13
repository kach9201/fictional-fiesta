// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!@#$%&()<>.?:;+=[]{}'~";

// Write password to the #password input
function generatePassword() {

  var password = "";
  var passwordChar ="";
  var passwordLengthUser = prompt("How many characters would you like your password to be? Password must be between 8-40 characters.");
  passwordLengthUser = parseInt(passwordLengthUser);
  var passwordText = document.querySelector("#password");

if (passwordLengthUser <8) {
  alert("Password must have more than 7 characters!");
  return "";
}
  if (passwordLengthUser > 128) {
    alert ("Password must not have more than 128 characters!");
    return ""
  }

  var lowercaseCharactersChoice = ("Add lowercase characters?");

  if (lowercaseCharactersChoice) {
    passwordChar+=lowercaseChar;
  }

  var uppercaseCharactersChoice = confirm("Add uppercase letters?");
 
  if (uppercaseCharactersChoice) {
    passwordChar+=uppercaseChar;
  }

  var numericalCharacterChoice = confirm ('Would you like to add numbers?');

  if (numericalCharacterChoice) {
    passwordChar += numericalChar;
  }

  var specialCharacterChoice = confirm("Come on, make it secure, add a special character to you password?");

  if (specialCharacterChoice) {
    passwordChar += specialChar;
  }

  for (var i=0; i< passwordLengthUser; i++) {
    password = passwordChar [Math.floor(Math.random() * passwordChar.length)]
  }

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", generatePassword)



