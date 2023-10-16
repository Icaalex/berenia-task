// let names = ["Joy", "Mark", "Joe"];
// let secondList = ["Jerry", "Peter", "Mike", "Faith"];
// names.push("Divine");
// names.pop()

// console.log("secondlist before push method ", secondList);
// let arrLen =  secondList.push(...names)
// console.log("secondlist elemment after push  ", secondList);

//let newArr = ["Long"];

//newArr = secondList.concat(names);
// console.log("new array ", newArr);
//let anotherArr = secondList.indexOf("Joy");
// console.log("another  copywithin method ", anotherArr);

//let userType;

// function assignUserType(userT) {
//     return userT;
// }

// function checkUserType(...permittedType) {
//     if (permittedType.length !== 0) {

//         console.log("permited types", permittedType); 

//         if (permittedType.indexOf(userType)  == -1 ) {
//             console.log("Sorry! you are not permitted");
//         }else {
//             console.log("Welcome! Access granted");
//         }
//     }
//     else {
//         console.log("no parameter passed");
//     }
//}
// userType = assignUserType("staff")
// checkUserType("admin", "staff");

// let score = [45, 67, 72];

// console.log("our condition ", score.includes(70));

// if (score.includes(70)) {
//     console.log("Yes! your score is there");
// }
// else {
//     console.log("Oops! can't find your score");
// }

// for
// while 
// do while

//let fruits = ["pineapple", "watermelon", "mango", "pear", "banana", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log("fruit at index : ", i, " ", fruits[i]);
// }

// let arrLen = 0;

// while(arrLen < fruits.length){
//     console.log("fruit at index : ", arrLen, " ", fruits[arrLen]);
//     arrLen++;
//     console.log("arrlen after increment ", arrLen);
// }

// console.log("do while loop starts \n");
// arrLen = 0;
// do {
//     console.log("fruit at index : ", arrLen, " ", fruits[arrLen]);
//     arrLen++;
//     console.log("arrlen after increment ", arrLen);
// } while (arrLen < fruits.length);

// function getArrays(val, index, arr) {
//     console.log("array element is ", val, " and the index is ", index," and th main array is ", arr);
// }

// let res = fruits.forEach(
//     (val, index, arr) => {
//         return "fruit " + val;
//     }
// )

// console.log("result is ", res);

let students = [
    {school: "John", class: "js3", age: 20},
    {school: "John", class: "js2", age: 21},
    {school: "Mark", class: "js3", age: 17},
    {school: "Mark", class: "js1", age: 18},
    {school: "Peter", class: "js3", age: 17},
    {school: "Peter", class: "js2", age: 16}
];

students.forEach( bla =>{
  if( bla.school == "John" ) {
   console.log( bla.school, " " , bla.class ," " , bla.age);
  }
    else{
    console.log("");
    }
    if( bla.school == "Mark" ) {
        console.log(bla.school, " " , bla.class ," " , bla.age);
       }
         else{
         console.log("");
         }
         if( bla.school == "Peter" ) {
            console.log( bla.school, " " , bla.class ," " , bla.age);
           }
             else{
             console.log("");
             }

});




 let studentsHtml = document.getElementById("student");
 let tableHeader = 
 `
<tr>
     <th>Name</th>
   <th>Class</th>
    <th>Age</th>
 </tr>
  `
;

let newStudent = students.map((val)=>{
     tableBody = 
    `
    <tr>
      <td> ${val.name} </td>
       <td> ${val.age}</td>
      <td> ${val.class}</td>
    </tr>
     `;
    return tableBody
 });

 newStudent = tableHeader + newStudent.join();
 studentsHtml.innerHTML = newStudent;
 console.log(newStudent);

 // let obj = {name: "mark", school: "st.peter"}

// console.log(obj.school);
// let result = arr.filter((val) => val.age < 20 && val.class == "js3");

// console.log("result is ", result);

//console.log("fruit", fruits);
//  fruits = fruits.join();

// console.log("fruit after join", fruits);

// let htmlList = document.getElementById("list");
// console.log("list before loop ", htmlList);
// let newFruits = fruits.map((val) => {
//     let myList = "<li>" + val + "</li>";
//     console.log(myList);
//     return myList;
// });

// console.log("before join ", newFruits);
// newFruits = newFruits.join(" ");
// console.log("after join ", newFruits);
// htmlList.innerHTML = newFruits;


