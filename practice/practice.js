

// Task 1 Fitrah Calculation
// // ask the user for the total number of family members
// var familyMembers = +prompt("Please enter the total number of family members:");

// // ask the user to choose a fitrah method

// var fitrahMethod = prompt("Please choose any one fitrah method:\n1. Wheat flour \n2. Balary \n3. Dates \n4. Raisins ");

// //calculation

// var price = 0;
// if (fitrahMethod == "1") {
//   price = 170;
// } 
// else if (fitrahMethod == "2") {
//   price = 560;
// } 
// else if (fitrahMethod == "3") {
//   price = 1600;
// }
// else if (fitrahMethod == "4") {
//     price = 2800;
// } else {
//   alert("Invalid input.");
// }

// // calculate the fitrah amount
// var totalAmount = familyMembers * price;

// // display the calculated fitrah amount
// alert(`The fitrah amount for ${familyMembers} family members using the selected method is ${totalAmount}.`);


// // Task 2 Guess the Number

// // Get a random integer from 1 to 10 inclusive
// var secretNumber = Math.random(Math.random() * 10)+5;
// // var num =  prompt("Guess the secret number (between 1 and 10)");
//  var gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == secretNumber){
//    alert("Cogratulations");
//   }
//   else if (gnum > secretNumber) {
//     // Display a message to guess lower if the guess is too high
//     alert("Your guess is too high. Guess again.");
//   } else if (gnum < secretNumber) {
//     // Display a message to guess higher if the guess is too low
//     alert("Your guess is too low. Guess again.");
//   }

// // // Task 3 Capitaisation
// var str = prompt("Please enter your name")
// var name2 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// alert("Your name with first letter capitalize is: " + name2);


// // // Task 5 Contact number




// // // Task 6 Contact number
// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3


// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6


// fruits.length = 10;
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[8]); // undefined

///task 7
// let nationality = prompt("What is your nationality?");
// let gender = prompt("What is your gender?");
// let age = +prompt("How old are you?");

// nationality = nationality.toLocaleLowerCase();
// gender = gender.toLocaleLowerCase();

// if (nationality !== "pakistani" && nationality !== "indian") {
//   alert("Sorry, you are not eligible to vote.");
// } else {
//   if (age < 18) {
//     alert("You are not eligible to vote.");
//   } else {
//     if (gender === "male") {
//       alert("You are eligible to vote!");
//     } else if (gender === "female") {
//       let maritalStatus = prompt("Are you married? (yes or no)").toLocaleLowerCase();
//       if (maritalStatus === "yes") {
//         alert("You are eligible to vote!");
//       } else {
//         alert("Sorry, you are not eligible to vote.");
//       }
//     } else {
//       alert("Sorry, you are not eligible to vote.");
//     }
//   }
// }



