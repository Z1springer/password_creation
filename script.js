function generatePassword() {
  return "password"
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Create an array of letters upper and lowercase, numbers, and spec. characters
var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerCase = 'abcdefghijklmnopqrstuvwxyz',
    specChar = '!@#$%^&*<>?~-+/=',
    numbers = '1234567890'



// Create a generatePassword function and write all the logic within this function

function generatePassword() {

  // Create confirm to ask user if they want capitol letters and set to a variable
  var capsC = confirm("Would you like to use capitol letters for your password?")
  // Create confirm to ask user if they want lowercase letters and set to a variable
  var lowerCaseC = confirm("Would you like to use lower case letters for your password?")
  // Create confirm to ask user if they want specical characters and set to a variable
  var specCharC = confirm("Would you like to use special characters for your password?")
  // Create confirm to ask user if they want numbers and set to a variable
  var numbersC = confirm("Would you like to use numbers for your password?")
  // Create prompt to ask user how many characters they want their password to be and set to a variable (at least 8 charcters and no more than 128)
  var passLen = prompt("How long would you like your password to be? (between 1-128)")
  // Create a conditionnal to make sure that the user has chosen at least one type of character
  if (capsC === false && lowerCaseC === false && specCharC === false && numbersC === false) {
    alert("Please choose at least one set of characters for your password, or did you think it would be made of air and pixels?")
  }
  // Create an empty array to hold user requested characters
  var myFinalArrOfChar = ''
  //TODO: Create multiple if statements that checks if the user said yes or no to different confirms that we asked them, and based on their response, !!push those specific characters to our empty array!!
  if (capsC === true) {
    //push all the special characters in the empty array
    myFinalArrOfChar += caps;
    console.log ("caps used")
  } else {
    console.log ("caps not used")
  }
  if (lowerCaseC === true) {
    myFinalArrOfChar += lowerCase;
    console.log ("lowerCase used")
  } else {
    console.log ("lowerCase not used")
  }
  if (specCharC === true) {
    myFinalArrOfChar += specChar;
    console.log ("specChar used")
  } else {
    console.log ("specChar not used")
  }
  if (numbersC === true) {
    myFinalArrOfChar += numbers;
    console.log ("numbers used")
  } else {
    console.log ("numbers not used")
  }
  //TODO: Create a var to hold the final results
  var finalPass;
  //TODO: Need a for loop to loop over my final array, it should run based on the results of the prompts, however many characters specified by the user. Choose randomly from our final array that holds all the tags requested by the user and save them to our finalPass var
  for (var i = 0; i < passLen; i++) {
    var finalPass = (finalPass += myFinalArrOfChar[randomNum])
  } var randomNum = Math.floor(Math.random() * myFinalArrOfChar.length)//Length of final array 
  //inside the for loop 
  //TODO: Return the finalPass from this function, outside of the for loop at the end of this function

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


// for(var i = 0; i < passLen; i++){
//   generate random int that coincided w/ cap index numbers
//   var alphaRandom = Math.floor(Math.random()*caps.length);
//   log cap character @ randomInt number
//   console.log(caps[alphaRandom]);
//   userArr.push(caps[alphaRandom]);
//   userStr = userStr + caps[alphaRandom]
//   console.log(userArr)
// }

