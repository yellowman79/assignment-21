//q1
//var firstName = prompt("Please enter your first name: ");

//var lastName = prompt("Please enter your last name: ");

//var fullName = firstName + " " + lastName;

//alert("Hello, " + fullName + ". Nice to meet you!");

//Q2

//var phoneModel = prompt("Enter your favorite phone model:");

//document.write("Length of the string: " + phoneModel.length);

//Q3

//var word = "Pakistani";

// var index = word.indexOf("n");

// document.write("Index of 'n': " + index);

//Q4
//var str = "Hello World";

//var index = str.lastIndexOf("1");

//document.write("Last index of '1': " + index);

// Q5

//var str = "Pakistani";

//var char = str.charAt(3);

//document.write("Character at index 3: " + char);

// Q6
// var city = "Hyderabad";

// var newCity = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br>After replacement: " + newCity);

// Q7
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var newMessage = message.replace(/and/g, "&");

// document.write("<br>Message: " + message + "<br>After replacement: " + newMessage);

// Q8

// Create a string variable
// var str = "472";

// console.log("Value: " + str);
// console.log("Type: " + typeof(str));

// var num = Number(str);

// console.log("Value: " + num);
// console.log("Type: " + typeof(num));

// Q9

//let userInput = prompt("Please enter a string");
//let upperCase = userInput.toUpperCase();
//console.log(`Upper case: ${upperCase}`);

//Q10

//function toTitleCase(str) {
   // return str.replace(/\w\S*/g, (txt) => {
  //      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
 //   });
//}

//let userInput = prompt("Please enter a string");
//let titleCase = toTitleCase(userInput);
//console.log(`Title case: ${titleCase}`);

//Q19

//var num = 35.36;
//let numString = num.toString();
//let removedDot = numString.replace(".", "");
//console.log(`Number: ${num}`);
//console.log(`Result: ${removedDot}`);

//Q 20

//let username = prompt("Please enter a username");
//let invalidSymbols = ["@", ".", ",", "!"];

//for (let i = 0; i < invalidSymbols.length; i++) {
  //  if (username.includes(invalidSymbols[i])) {
  //      username = prompt(`Please enter a valid username. The username should not contain any special characters like ${invalidSymbols[i]}. Try again:`);
 //   }
//}
//console.log(`Username: ${username}`);

//Q21

//let searchTerm = prompt("Please enter a search term");
//let searchTermLower = searchTerm.toLowerCase();
//let groceryList = ["cake", "apple pie", "cookie", "chips", "patties"];
//
//let result = false;
//for (let i = 0; i < groceryList.length; i++) {
   // if (groceryList[i].toLowerCase().includes(searchTermLower)) {
  //      result = true;
 //   }
//}

//if (result) {
 //   console.log(`${searchTerm} is found in the list.`);
//} else {
//    console.log(`${searchTerm} is not found in the list.`);
//}

//Q 22

//let password = prompt("Please enter a password");

//let hasLetter = false;
//let hasNumber = false;
//let startsWithNumber = password.match(/^\d/);
//let isLongEnough = password.length >= 6;
//
//for (let i = 0; i < password.length; i++) {
 //   if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
//        hasNumber = true;
 //   }

//    if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
//        hasLetter = true;
//    }
//}

//if (startsWithNumber) {
//    password = prompt("Password can not begin with a number. Please enter a valid password:");
//} else if (!isLongEnough) {
//    password = prompt("Password should be at least 6 characters long. Please enter a valid password:");
//} else if (!hasNumber || !hasLetter) {
//    password = prompt("Password should contain at least one letter and one number. Please enter a valid password:");
//}

//console.log(`Password: ${password}`);//

//Q 23

//var university = "University of Karachi";
//var universityArray = university.split(" ");

//for (let i = 0; i < universityArray.length; i++) {
//    document.write(`${universityArray[i]}<br>`);
//}

//Q 24

//var userInput = prompt("Please enter a string");
//var lastCharacter = userInput.charAt(userInput.length - 1);

//console.log(`Last character of input: ${lastCharacter}`);

//Q 25

var text = "The quick brown fox jumps over the lazy dog";
var textLower = text.toLowerCase();
var matches = textLower.match(/the/g);

console.log(`There are ${matches ? matches.length : 0} occurrence(s) of word 'the'`);

