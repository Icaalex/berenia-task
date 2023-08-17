// /*let food = "rice";
// let score = 60;

//const { keyframes } = require("styled-components");

// if(score >= 10 && score <= 30 ) {
//     console.log("you score B");
// }
// else if (score == 50) {
//     console.log("you score C");
// }
// else {
//     console.log("invalid score");
// }*/

// let score = 0;
// let score1 = 40;
// let score2 = 60;
// let text = "try again";
// let text1 = "good";
// let text2 = "excellent";
// let answer;
// if( score === 0 ) {
//     console.log(text)
// }
// else if( score === 40 ) {
//     console.log(text1)
// }

 // answer =  prompt("what is 20 + 20");
// console.log(typeof answer)

// if( answer == 0 ) {
//     console.log(text)
// }
// else if( answer == 40 ) {
//     console.log(text1)
// }


//let cars = {
//      "toyota": 5000,
//      "mazda": 3000,
//      "bmw": 6000,
//      "benze": 9000,
//      "range-rover": 12000
// }

//  console.log("The car price is ", cars);


// //  add more cars
//  cars["Tesla"] = 16000;
//  cars["ferarri"] = 15000;
//  console.log("the cars are ", cars);

//  how to loop through and array
// let carKeys = Object.keys(cars);

// console.log("car keys ", carKeys);

//  for (let i = 0; i < carKeys.length; i++) {
//      let car = carKeys[i];
//      let carPrice = cars[car];
//    console.log("The price of ", car, " is ", carPrice);    
//  }

//  carKeys.forEach(element => {
//      let carPrice = cars[element];
//      console.log("The price of ", element, " is ", carPrice);   
//  });

// let requestCar = "jaguar";

// // if (carKeys.indexOf(requestCar)  !== -1) {
// //  console.log("Yes! we have the car");   
// // }
// // else {
// //     console.log("Oops! we currently don't have the car");
// // }

// if (carKeys.includes(requestCar)) {
//     console.log("Yes! we have the car");   
//    }
//    else {
//        console.log("Oops! we currently don't have the car");
//    }

 let list = {
     "Ade": "ebola",
     "bimbo": "corona",
     "kamsiyo": "123rte"
 }

 console.log("the virus is", list);

 list["kate"] = "malaria";


 console.log("new objects", list);
 console.log("kate sickness is", list.kate);

let listArr = Object.keys(list);
console.log( listArr);

for(i=0; i < listArr.length; i++){
   let car = listArr[i];
   let sickness = list[car];
   console.log(car, "is", sickness );
}
let space = ""
console.log(space);
listArr.forEach(bla => {
    let sickful = list[bla] ;
    console.log(  bla, "is" ,sickful);

})
console.log(space);
let noSick = "bread" ;

 if (listArr.indexOf(noSick) == -1) {
    console.log("yes it is correct", );
 } 
 else {
   console.log("wrong");
    
 }
console.log(space);

 if (listArr.includes(noSick)) {
    console.log("yes correct");
 } else {
    console.log("is not available");
 }