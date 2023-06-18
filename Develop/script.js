// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //a string of all selected character types the user would like to include
  let newPass = ""

  //the password to be returned
  let finalPass = ""

  //adds lowercase letters to possible options
  let lowerecaseCon = confirm("Would you like to use lowercase?");
  if (lowerecaseCon) {
    let lowercase ="abcdefghijklmnopqrstuvwxyz";
    newPass += lowercase;
  };
  //adds uppercase letters to possible options
  let uppercaseCon = confirm("Would you like to use uppercase?");
  if(uppercaseCon) {
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    newPass += uppercase;
  }
  //adds numbers to possible options
  let numbersCon = confirm("Would you like to use numbers");
  if (numbersCon) {
    let zeroTonine ="0123456789";
    newPass += zeroTonine;
  }
  //adds special characters to possible options
  let specialCon = confirm("Would you like to use special characters?");
  if (specialCon) {
    let special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    newPass += special
  }
  //defines the length of the password
  let len = prompt("How many characters do you want your password to be? (8 - 128)", Number);
  //for the length of the password creates a string of random characters from the selected options
  if(len <= 7 || len >= 129){
    alert("You must chose between 8 and 128", Number);
  } else {
    for (let i = 0; i-1 < len; i++){
      int = RandomInt(newPass.length);
      finalPass += newPass[int];
    }
  }
  return finalPass;
}

// a function to grab a random number within the length of the string
function RandomInt(Number){
  return Math.floor(Math.random() * Number);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
