// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== undefined) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = getPasswordLengthFromUser();
  if (passwordLength === undefined) {
    return;
  }
  var includedCharacterTypesArray = getIncludedCharacterTypesFromUser();
  if (includedCharacterTypesArray === undefined) {
    return;
  }

  var password = createNewPassword(passwordLength, includedCharacterTypesArray)
  return password;
}

function getPasswordLengthFromUser() {
  var passwordLength;
  do {
    passwordLength = prompt("Password length", "Select a password length between 8 and 128 characters.");
    if (passwordLength === null) {
      alert("No password was created!");
      return;
    }
  } while (passwordLengthIsValid(passwordLength) === false);
  return passwordLength;
}

function getIncludedCharacterTypesFromUser() {
  var includedCharacterTypesArray = [];
  do {
    includedCharacterTypesArray[0] = confirm("Do you want to include an uppercase character?");
    includedCharacterTypesArray[1] = confirm("Do you want to include a lowercase character?");
    includedCharacterTypesArray[2] = confirm("Do you want to include a numeric character?");
    includedCharacterTypesArray[3] = confirm("Do you want to include a special character?");
    var atLeastOneCharaceterTypeIsIncludedCheck = atLeastOneTypeIsIncluded(includedCharacterTypesArray)
    if (atLeastOneCharaceterTypeIsIncludedCheck === null) {
      alert("No password was created!");
      return;
    }
    console.log(atLeastOneCharaceterTypeIsIncludedCheck)
  } while (atLeastOneCharaceterTypeIsIncludedCheck === false);
  return includedCharacterTypesArray;
}

function passwordLengthIsValid(passwordLength) {
  var lengthNum = parseInt(passwordLength);
  if (isNaN(lengthNum)) {
    alert("Please enter a number!");
    return false;
  }
  if (lengthNum < 8 || lengthNum > 128) {
    alert("Please enter a number between 8 and 128!");
    return false;
  }
  return true;
}

function isInt(n) {
  return (typeof n == 'number' && n % 1 == 0);
}

function atLeastOneTypeIsIncluded(includedCharacterTypesArray) {
  var atLeastOneCharaceterTypeIsIncludedCheck = includedCharacterTypesArray[0] || includedCharacterTypesArray[1] || includedCharacterTypesArray[2] || includedCharacterTypesArray[3];
  if (atLeastOneCharaceterTypeIsIncludedCheck === false) {
    var confimration = confirm("Please confirm at least 1 type of characters!");
    console.log(confimration)
    if(confimration === false){
      return null;
    }else{
      return false;
    }
  }
  return true;
}

function createNewPassword(passwordLength, includedCharacterTypesArray) {
  var password = "";
  var characterTypesArray = getCharacterTypesArray(includedCharacterTypesArray);
  while (password.length < passwordLength) {
    for (var i = 0; i < characterTypesArray.length; i++) {
      var characterTypeString = characterTypesArray[i];
      var characterIndex = Math.ceil((characterTypeString.length - 1) * Math.random());
      var character = characterTypeString[characterIndex];
      password += character;
    }
  }
  return shuffleString(password);
}

function getCharacterTypesArray(includedCharacterTypesArray) {
  var includeUpper = includedCharacterTypesArray[0]
  var includeLower = includedCharacterTypesArray[1]
  var includeNumeric = includedCharacterTypesArray[2]
  var includeSpecial = includedCharacterTypesArray[3]
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"
  var upperCaseCharacters = lowerCaseCharacters.toUpperCase();
  var numericCharacers = "0123456789";
  var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var characterTypesArray = [];
  if (includeLower) {
    characterTypesArray.push(lowerCaseCharacters);
  }
  if (includeUpper) {
    characterTypesArray.push(upperCaseCharacters);
  }
  if (includeNumeric) {
    characterTypesArray.push(numericCharacers);
  }
  if (includeSpecial) {
    characterTypesArray.push(specialCharacters);
  }
  return characterTypesArray;
}

function shuffleString(password) {
  return password.split('').sort(
    function () {
      return 0.5 - Math.random();
    }).join('');
}