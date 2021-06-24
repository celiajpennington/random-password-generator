// 1 user
//click generate pw event listener
// choose
//prompts- select what length (8-128), any characters imcluded
//define vars lowerCase, upperCase, numCase, charCase




var generateBtn = document.querySelector("#generate");



var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

function generatePassword() {
  var password = "";
  var passwordChar = "";
// creates user prompt to select password length
var passwordLengthUser = prompt("How many characters would you like your password to be?");
passwordLengthUser = parseInt(passwordLengthUser);
if (passwordLengthUser < 8) {
alert("Password must have at least 8 characters!");
return "";
}
if (passwordLengthUser > 128) {
alert("Password much not have more than 128 characters!");
return ""
}
// creates confirm boolean for lowercase "yes or no"
var lowercaseCharactersChoice = confirm("Would you like lowercase letters?");
if (lowercaseCharactersChoice) {
passwordChar += lowercaseChar;
}
// creates confirm boolean for uppercase "yes or no"
var uppercaseCharactersChoice = confirm("Would you like uppercase letters?");
if (uppercaseCharactersChoice) {
passwordChar += uppercaseChar;
}
// creates confirm boolean for lowercase "yes or no"
var numericalCharactersChoice = confirm("Would you like to add numbers?");
if (numericalCharactersChoice) {
passwordChar += numericalChar;
}
// creates confirm boolean for special characters "yes or no"
var specialCharacterChoice = confirm("Would you like to add special characters?");
if (specialCharacterChoice) {
passwordChar += specialChar;
}
for (var i = 0; i < passwordLengthUser; i++) {
password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
}

function writePassword(password){
var password = generatePassword();
var pwTextArea = document.getElementById("password");
pwTextArea.value = password;
return ("")

}
console.log(writePassword)
}
generateBtn.addEventListener("click", generatePassword);