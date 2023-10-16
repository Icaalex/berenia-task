// let myArr = [2, 3, 4, 5, 8, 23, 67, 10]; //array
// let fruit = ["mango", "apple", "orange"];
// let arr = [];

// let myArr2 = Array(7);

// let myObj = {}; // object

// console.log(myArr[5]);

// console.log(" the length is ", myArr.length);

// for(let i = 0; i < myArr.length; i++){
//     console.log("The new value at index " + i  + " = " + myArr[i]);
// }

// function getUserValue() {
//     let num1 = prompt("Enter first number"); 
//     num1 = Number(num1);
//     console.log("number 1 = ", num1);
//     let num2 = prompt("ENter second number");
//     num2 = Number(num2);
//     console.log("number 2 = ", num2);

//     if (num1 && num2) { 
//         addTwoNumber(num1, num2);
//     }
// }

// function addTwoNumber(a, b) {
//     let sum = a + b;
//     console.log("The result is ", sum);
// }

// for(let i = 0 ; i < fruit.length; i++) {
//     console.log("the fruit is ", fruit[i]);
// }


// arrow function 
// const addThreeNum = (a, b, c) => {
//     let sum = a + b + c;
//     return sum;
// }
 
// let result = addThreeNum(9,3,4);

// let newArr = fruit.forEach(
//     (elem, i, arr) => {
//         console.log("Array at index" + i + " element is", elem);
//         // return elem;
// }
// );

// for loop
// forEach 
// map 
// filter
// every 
// entry 
// reduce 

// while 
// do-while 
let jsHtml = document.getElementById("demo");


let students = [
    {name: "John Adam", age: 39, church: "dunamis", education: "degree"},
    {name: "Michael Smith", age: 30, church: "dunamis", education: "degree"},
    {name: "Jerry John", age: 20, church: "dunamis", education: "degree"},
    {name: "Michael Smith" , age: 25, church: "dunamis", education: "degree"}
]
 let uj = {name: "musa", age: 100, church: "dunamis", education: "degree"};
students.splice(2, 0, uj);
console.log(students);
 
let tabsHeader = 
'<tr><th>name</th><th>age</th><th>church</th><th>education</th></tr>'
 
let studentNew = students.map((val) =>{
     tabsBody = 
     `
     <tr>
       <td> ${val.name} </td>
        <td> ${val.age}</td>
       <td> ${val.church}</td>
       <td> ${val.education}</td>
     </tr>
      `;
     return tabsBody
});

studentNew = tabsHeader + studentNew.join();
jsHtml.innerHTML = tabsHeader;
console.log(tabsHeader);

