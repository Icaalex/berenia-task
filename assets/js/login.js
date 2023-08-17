// let infoArr = [
//      {name: "James", email: "jamespaul@gmail.com" password: "123abc"}
// ];


// let loginInfo = document.getElementById(demo)

// let inputs = infos.map((val)=>{


// })
// let form = document.getElementById(email);
// let form =document.getElementById(password);

// let email = email.value ;
// let password = [123 + "abc",];

// function email() {

// }

  
// function login() 
//     if(email == email.value){
         
//          console.log(email , "correct" );
         
//     };



// form.innerHTML = formSubmit;

let objectInfo = [
    {email: "jamespaul@gmail.com", password: "123abc"}
];

function loginInfo() {
    let email = document.getElementById("email").Value;
    let password = document.getElementById("password").Value;

  for(i = 0; i < objectInfo.length;  i++) {
    if (email == objectInfo[i].email && password == objectInfo[i].password) {
        console.log(email, "logged in")
        

    } 
    else {
        console.log("incorrect information");
    }
  }

}