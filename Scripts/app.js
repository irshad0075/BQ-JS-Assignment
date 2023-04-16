//**********Task 1**********
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".

// let Zakatpercentage = 0.025 ;
// let UserInput = +prompt ("Enter any amount");
// let Result = UserInput * Zakatpercentage
// alert("Your Zakat value is " + Result)


// *************Task 2 Fitrah Calculation*************

// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

// Fitrah Calculation

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

// *************Task 3 Secret Number*************
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

// // Guess the Number

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


// *************Task 4 Capitaisation *************
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// var str = prompt("Please enter your name")
// var name2 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// alert("Your name with first letter capitalize is: " + name2);


//  *********Task 5 Contact number***********8

// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.


let contactNumber= []        
let contactNames= [] 
let num1= +prompt("enter  1st number");
let name1 = prompt ("enter  1st name"); 
let num2= +prompt("enter  2nd number");
let name2 = prompt ("enter  2nd name"); 
let num3= +prompt("enter 3rd number");
let name3 = prompt ("enter  3rd name");
contactNumber.push(num1,num2,num3);
contactNames.push(name1,name2,name3);
console.log("Names " + contactNames + "\n Numbers " + contactNumber);


// **********Task 6 products **********
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); 


// fruits[5] = "mango";
// console.log(fruits[5]); 
// console.log(Object.keys(fruits));
// console.log(fruits.length); 


// fruits.length = 10;
// console.log(fruits); 
// console.log(Object.keys(fruits)); 
// console.log(fruits.length); 
// console.log(fruits[8]); 

// // // **********Task 7 Contact number**********

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.


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

// // // **********Task 8 MATCH**********
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

// const WorldCupSquad= [ "Fakhar Zaman" , "Haider Ali" ,"Babar Azam" , "Shadab Khan" , " Asif Ali" , "Haris Rauf" , "Iftikhar Ahmed" , "Khushdil Shah" ,"Mohammad Wasim" , "Naseem Shah" , "Shaheen Shah Afridi" , "Shan Masood" "Mohammad Hasnain" , "Mohammad Nawaz" , "Mohammad Rizwan"  ] 
// alert ("World Cup Squad: \n"+ WorldCupSquad + "\n\n Tomorrow's match players")
// const finalPlayers = WorldCupSquad.slice(3,10);
// alert("Tomorrow's match players are: \n"+ finalPlayers );