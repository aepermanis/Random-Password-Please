// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let newPass = ""
  let finalPass = ""
  let lowerecaseCon = confirm("Would you like to use lowercase?");
  if (lowerecaseCon) {
    let lowercase ="abcdefghijklmnopqrstuvwxyz";
    newPass += lowercase;
  };

  let uppercaseCon = confirm("Would you like to use uppercase?");
  if(uppercaseCon) {
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    newPass += uppercase;
  }

  let numbersCon = confirm("Would you like to use numbers");
  if (numbersCon) {
    let zeroTonine ="0123456789";
    newPass += zeroTonine;
  }

  let specialCon = confirm("Would you like to use special characters?");
  if (specialCon) {
    let special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    newPass += special
  }

  let len = prompt("How many characters do you want your password to be? (8 - 128)", Number);
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

function RandomInt(Number){
  return Math.floor(Math.random() * Number);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
