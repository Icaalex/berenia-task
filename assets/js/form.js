/*let userEmail;
let password;

function getEmail(){
    let email = document.getElementById("email");
    userEmail = email.value;
    console.log("email", userEmail);
}

function getPassword() {
    let pw = document.getElementById("password");
    password = pw.value;
    console.log("pw", password);
}
let arr = []
function submitForm() {
  
   let user =  arr.filter((val) => val.email == userEmail);
    if (user?.email !== userEmail) {
        
        // check password

        if (user.password !== password) {
            console.log("passwprd not match");
        }
        else {
            console.log("log in successfull");
        }
    }
    else {
        console.log("email and password not match");
    }
}*/

// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
import { Country, State, City }  from 'country-state-city';
console.log(Country.getAllCountries())
console.log(State.getAllStates())

// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city'


