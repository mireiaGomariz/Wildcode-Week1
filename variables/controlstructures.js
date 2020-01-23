
//
// let myAge = 18;
//
// myAge = 20;
//
// console.log(myAge);
//
//

//
// if(true) {
//   let test = 'testing';
//   console.log('test')
// }
//
// console.log('test')
//

//
// let myName = 'Mireia';
// let myAge = 26;
// let mySchool = 'Wild Code School';
// let master = 'master';
//
//
// if(true) {
//   let master = 'YASS!'
//   console.log(master);
// }
//
//
// console.log(typeof(name));
// console.log(typeof(age));
// console.log(typeof(school));
// console.log(typeof(master));



// TYPESCRIPT concatenation
// console.log(`Hello I am ${name} and I am ${age} and I am studing at ${school}`);

// Normal concatenantion

// console.log("Hello I am" + myName + "and I am" + myAge + "and I am studing at" + mySchool + "Yass!")



// let myAge = 18;
// // myAge = myAge + 1;
// myAge += 1;
//
// console.log(myAge);

// OPERATORS
//
// OR ||
// AND &&
// NEGATION !
//
//
// console.log(4>2 || 5>3);
// console.log(4>2 && 5>3);




//
// let isRaining = true;
//
// if ( isRaining === true) {
//   console.log('Grab the umbrell!')
// }
//
// else {
//   console.log("It's different")
// }
//
//


// You want to get into a club, you need to chek if the person is older than 18 and also is well dressed.
// If he is older than 18 and is well dressed he can go in
// If he is older than 18 and is well dressed he can go in
// If he is either younger or not well dressed, he can't get in there.
//
// Create a variable to store if he is well dressed or no and a variable for his age
// Do a console log

// let person = 16;
// let dressed = true ;
//
//
// if (person >= 18 || dressed == true) {
//   console.log("Yass you can entry!")
// }
//
// else {
//   console.log("You can't entry!");
// }


// let person = 19;
// let dressed = false;

//
// if (person >= 18 && dressed == true) {
//   console.log("Yass you can entry!");
//
// } else if (dressed == false && person >= 18) {
//   console.log("Go change those clothes and come back again");
// }
// else {
//   console.log("You can't entry!");
// }


//TERNARY OPERATIORS
//
// person >=18 ? "You can go in" : "Stay out";


//




//switch

// const name = "Sansa";
// let house = "";
//
// switch (name) {
//   case "Khal Drogo":
//     house = "Dothraki Horselord";
//     break;
//   case "Daenerys":
//     house = "Targaryen";
//     break;
//   case "Arya":
//   case "Jon Snow":
//   case "Sansa":
//     house = "Stark";
//     break;
//   case "Cersey":
//   case "Tyrion":
//   case "Jamy":
//     house = "Lanister";
//     break;
//   case "Cersey":
//   case "Tyrion":
//   case "Jamy":
//     house = ("Lanister");
//     break;
//
//   default: "Nothing"
//
// }
//
//   console.log(house)



//more conditions:


// const name = "Sansa";
// let loveDaenerys = true;
// let house = "";
//
// switch (name) {
//   case "Khal Drogo":
//     house = "Dothraki Horselord";
//     break;
//   case "Daenerys":
//     if (loveDaenerys === true) {
//       console.log("Okey")
//     }
//     house = "Targaryen";
//     break;
//   case "Arya":
//   case "Jon Snow":
//   case "Sansa":
//     house = "Stark";
//     break;
//   case "Cersey":
//   case "Tyrion":
//   case "Jamy":
//     house = "Lanister";
//     break;
//   case "Cersey":
//   case "Tyrion":
//   case "Jamy":
//     house = ("Lanister");
//     break;
//
//   default: "Nothing"
//
// }
//
//   console.log(house)




// While loop
//
// // Initialize a counter i to 0
// let i = 0;
//
// // Evaluates the condition and executes statements
// // if the condition is truthy
// while (i < 3) {
//  console.log("This is a loop");
//  // increments i
//  i = i + 1;
// }
// // when the condition is falsy it executes the next statement
// console. log("end of program");
//
// // i value is 0, 0 < 3 is truthy
// // output: This is a loop
//
// // i value is 1, 1 < 3 is truthy
// // output: This is a loop
//
// // i value is 2, 2 < 3 is truthy
// // output: This is a loop
//
// // i value is 3, 3 < 3 is falsy
// // output: end of program


// // Initialize a counter i to 0
// let i = 0;
//
// // Executes statements
// do {
//  console.log("This is a loop");
//  // increments i
//  i = i + 1;
// } while (i < 3); // Evaluates the condition and executes statements
// // if the condition is truthy
//
// // when the condition is falsy it executes the next statement
// console. log("end of program");
//
// // i value is 0, 0 < 3 is truthy
// // output: This is a loop
//
// // i value is 1, 1 < 3 is truthy
// // output: This is a loop
//
// // i value is 2, 2 < 3 is truthy
// // output: This is a loop
//
// // i value is 3, 3 < 3 is falsy
// // output: end of program
//




//FOOR!

// Initialize a counter i to 0
// Evaluates the condition and executes statements
// if the condition is truthy
    // for (let i = 0; i < 3; i++) {
    //  console.log("This is a loop" + i);
    //  if(i === 3) {
    //    console.log("pizza")
    //  }
    // }

// when the condition is falsy it executes the next statement
// console. log("end of program");

// i value is 0, 0 < 3 is truthy
// output: This is a loop

// i value is 1, 1 < 3 is truthy
// output: This is a loop

// i value is 2, 2 < 3 is truthy
// output: This is a loop

// i value is 3, 3 < 3 is falsy
// output: end of program




// create 1 program counts to 0 a 100 5 by 5

// let i = 5
//
// while ( i < 100 )
//   console.log(i = i + 5);
//
// for (let i = 0; i < 100; i += 5 ) {
//   console.log(i)
// }





// same till 10



//
// let sum = 0;
//
// for (let num = 0; num <= 100; num += 5) {
//   sum = num + sum;
//
// }
//
// console.log(sum)


//Example with for iterating in a array to store in an other array with .push method.

// array = ["hola", "adeu", "kaka"];
// array2 = [];
//
// array.forEach(printarString);
// console.log(array2);
//
// function printarString(element, index){
//
//   if (index == 0 || index == 2) {
//
//     array2.push(element);
//   }
// }




// ARRAYS
//
// let myString = "My name";
//
// let myAge = 20;
//
// let isMyAgeTrue = false;
//
// let classCountries = ["Barcelona", "Argentina", "Nepal", "France", "Germany", "Moldova"];
//
// console.log("Mireia is from " + classCountries.length)
//

// Example with simple for

// for (let index = 0; index < classCountries.length;  index++) {
//   console.log(classCountries[index])
//
// }



//my example with funtion.

// array2 = [];
//
// classCountries.forEach(printararray);
//
// function printararray(element, index) {
//   array2.push(element);
//   console.log("tururu" + array2[index]);
// }

// Trying some array methods.


// let array1 = [1,2,3,4]
// //
// // for (index = 0; index < array1.length; index++){
// //   console.log(array1.reverse());
// // }
//
// // Adding elemnts to the array with push
//
// // array1.push("China");
// //   console.log(array1);
//
// let reverseArray = [4,3,2,1]



// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 4, 6, 8, 10];
// let arr3 = [];
//
// for (let index = 0; index < arr1.length; index++){
//   //!!!!! index en el arr3
//   arr3[index] = arr1[index] + arr2[index];
//
//   console.log(arr3)
//
// }
// // let arr3= [3, 6, 0, 12, 15];
// array1.forEach(numero);
//
// function numero(element, index) {
//   array3.push(element);
// }
//
// for
