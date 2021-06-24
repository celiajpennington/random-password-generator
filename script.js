// 1 user
//click generate pw event listener
//prompts- select what length (8-128), any characters imcluded
//if user choose less than 8 alert
//if user chooses more than 128 alert
//define vars lowerCase, upperCase, numCase, charCase
//store user choices
//

//Using DOM to grab specific element
var generateBtn = document.querySelector("#generate");
//declaring var
var lowercaseChar = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];;
var uppercaseChar = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];
var numericalChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar =  [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
//creating first function of the pw generator
function userInput() {
  // creates user prompt to select password length
var passwordLengthUser = prompt("How many characters would you like your password to be?");
passwordLengthUser = parseInt(passwordLengthUser);
//if password is too short prompt
if (passwordLengthUser < 8) {
alert("Password must have at least 8 characters!");
return "";
}
//if password is too long prompt
if (passwordLengthUser > 128) {
alert("Password much not have more than 128 characters!");
return ""
}
// creates confirm boolean for lowercase "yes or no"
var lowercaseCharactersChoice = confirm("Would you like lowercase letters?");

// creates confirm boolean for uppercase "yes or no"
var uppercaseCharactersChoice = confirm("Would you like uppercase letters?");

// creates confirm boolean for lowercase "yes or no"
var numericalCharactersChoice = confirm("Would you like to add numbers?");

// creates confirm boolean for special characters "yes or no"
var specialCharacterChoice = confirm("Would you like to add special characters?");
var inputValues = {
// key value: actual user input
  inputlength: passwordLengthUser,
  lowCho: lowercaseCharactersChoice,
  upCho: uppercaseCharactersChoice,
  numCho: numericalCharactersChoice,
  specCho: specialCharacterChoice
}
console.log(inputValues);
//making userinput value available outside of the userinput function
return inputValues;
}
//this is randomizing  and rounding down to whole number
function pwRando(arr) {
  var randoValue = arr[Math.floor(Math.random() * arr.length)]
  return randoValue;
}
//this is taking the generate password function and including the user inouts
function generatePassword() {
var inputOptions = userInput () 

var password = [];
var passwordChar = [];
// These are my conditional statements for my generate password function
if (inputOptions.lowCho) {
  passwordChar = passwordChar.concat (lowercaseChar)
  passwordChar.push (pwRando(lowercaseChar)) 
}
if (inputOptions.upCho) {
  passwordChar = passwordChar.concat (uppercaseChar)
  passwordChar.push (pwRando(lowercaseChar)) 
}
if (inputOptions.numCho) {
  passwordChar = passwordChar.concat (numericalChar)
  passwordChar.push (pwRando(lowercaseChar)) 
}
if (inputOptions.specCho) {
  passwordChar = passwordChar.concat (specialChar)
  passwordChar.push (pwRando(lowercaseChar)) 
}
for (var i = 0; i < inputOptions.inputlength ; i++) {
var stagedPw = pwRando(passwordChar)  
password.push(stagedPw)
}
console.log(password)
//join specific to arrays
return password.join("")
}

//Moved this outside of the generatePassword function
function writePassword(){
  //
  var password = generatePassword();

  var pwTextArea = document.getElementById("password");
  pwTextArea.value = password;
 // return""
  
  }
  generateBtn.addEventListener("click", writePassword);