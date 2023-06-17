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
    let numbers ="0123456789";
    newPass += numbers;
  }

  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
