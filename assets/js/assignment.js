/**
 * Group the students below to their respective school, department and level,
 * Then display their data on web page based on the school department and level
 */

let students = [
    {
        school: "UNN",
        department: "chemical",
        level: "100Level",
        firstName: "Joy",
        lastName: "Mark",
        age: 24,
        gender: "female"
    },

    {
        school: "OAU",
        department: "chemical",
        level: "200Level",
        firstName: "Francis",
        lastName: "Mark",
        age: 20,
        gender: "Male"
    },

    {
        school: "UNN",
        department: "chemical",
        level: "100Level",
        firstName: "Uju",
        lastName: "Ndukwu",
        age: 30,
        gender: "female"
    },
    {
        school: "UNILAG",
        department: "Electrical",
        level: "100Level",
        firstName: "James",
        lastName: "Joe",
        age: 29,
        gender: "male"
    },

    {
        school: "OAU",
        department: "chemical",
        level: "100Level",
        firstName: "Joy",
        lastName: "Lara",
        age: 24,
        gender: "female"
    },
    {
        school: "UNN",
        department: "electrical",
        level: "200Level",
        firstName: "Kunle",
        lastName: "Ajasin",
        age: 28,
        gender: "male"
    },

    {
        school: "UNN",
        department: "electrical",
        level: "200Level",
        firstName: "Joy",
        lastName: "Mark",
        age: 24,
        gender: "female"
    },
    {
        school: "UNILAG",
        department: "chemical",
        level: "100Level",
        firstName: "Bukky",
        lastName: "John",
        age: 24,
        gender: "female"
    },
    {
        school: "OAU",
        department: "chemical",
        level: "100Level",
        firstName: "Ade",
        lastName: "Yemi",
        age: 24,
        gender: "female"
    },
    {
        school: "UNN",
        department: "electrical",
        level: "200Level",
        firstName: "Wale",
        lastName: "Adesina",
        age: 24,
        gender: "male"
    },
];



// for (let i = 1; i <= 12; i++) {
//     let h = []
//    for (let k = 1; k <= 12; k++) {
//     h.push(i * k)
    
//    }
//     console.log(h.join("\t|"));
// }

// for(let even = 3; even <= 100; even+=3){
//    console.log(even);
// }

/*let studentData = {}


students.forEach(demo => {
    if  (studentData[demo.school = "UNN"]) {
        
        studentData[demo.school = "UNN"].forEach( (val, i) =>{
            if (Object.keys(val).includes(demo.department = "electrical")) {
                studentData[demo.school = "OAU"][deptIndex][demo.department = "electrical"].push(demo.firstName);
    
        
            }
            else{
                studentData[demo.school = "UNN"].push({[demo.department = "electrical"]:[demo.firstName]})
            }
        
        
        })

      
        } else {
        studentData[demo.school = "OAU"] = [{[demo.department = "electrical"]:[demo.firstName]}]
    
    }

})
console.log(studentData);

// hsndle display to webpage +

function returnTableStructure(studentData, school, i, deptName){
    let students = ''
    studentData[school][i][deptName].forEach((studentObj) => {
        students = students + `
        <tr>
        <td>${studentObj.firstName}</td>
        <td>${studentObj.lastName}</td>
        <td>${studentObj.age}</td>
        <td>${studentObj.gender}</td>
        <td>${studentObj.level}</td>
        
    </tr>`
    })

    return students;
}


let tableData = '';

Object.keys(studentData).forEach((school) => {

    tableData = tableData +  `
    <div class="studentinfo">
    <h1> School: ${school}</h1>`;


    studentData[school].forEach( (dept, i) => {
        let deptName = Object.keys(dept);
        deptName = deptName[0];
console.log(deptName);
        tableData = tableData +  `
        <table>
            <h2 class="head">${deptName}</h2>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>
            ${returnTableStructure(studentData, school, i, deptName)}
            </tbody>
            </table>`;
    
    });

    tableData = tableData + `</div>`;
});

let htmlTable = document.getElementById("table-wrapper");
  
htmlTable.innerHTML = tableData*/




 //let htmlTab = document.getElementById("tablewrap")

let tableHeader = '<thead><tr><th>School</th><th>Department</th><th>Level</th><th>FirstName</th><th>LastName</th><th>Age</th><th>Gender</th></tr></thead>';

let dataBod = students.map((val) => {
  dataBody = `
    <tbody>
     <tr>
       <td>${val.school}</td>
       <td>${val.department}</td>
       <td>${val.level}</td>
       <td>${val.firstName}</td>
       <td>${val.lastName}</td>
       <td>${val.age}</td>
       <td>${val.gender}</td>
      </tr>
    
     
    
     </tbody>`
     return dataBody
    
  });

   dataBod = tableHeader + dataBod.join("\t");
   //htmlTab.innerHTML = dataBod;
  console.log(dataBod);




/*let chemicalData = {};

students.forEach((lal) => {
    if (chemicalData[lal.department]) {
        let isgenderexist = false
        chemicalData.forEach(element => {
            if ([element.department] == "chemical") {
                isgenderexist = true
                
            } else {
                
            }
            
        });
    } else {
        
    }
    
});
console.log(chemicalData);*/
/**
from students array
sort out the firstNames of genders(female,male)  of students under department:chemical.
and display on a webpage.

problem solving algorithm=its going to be an object of array of object{chemical[{}]}
we call an object*/

let infoss = {
    "female": [],
    "male": []
};

students.forEach(lol => {
    if (lol.department == "chemical" || lol.department == "electrical" ) {
        if(lol.gender == "female"){
            infoss["female"].push(lol.firstName);
        }else{
            infoss["male"].push(lol.firstName);
        }
    } 
    
});
console.log(infoss);
let Hhtml = document.getElementById("lol");

if (infoss.female.length > infoss.male.length) {
   let dataRow = '';
    let f = '';
    let m = '';
    for (let i = 0; i < infoss.female.length; i++) {
        f = infoss.female[i];
        m = infoss.male[i] ?? '';
        dataRow = dataRow + `<tr><td>${f}</td><td>${m}</td></tr>`;
    }
    Hhtml.innerHTML = dataRow
}
else {
    let f = '';
    let m = '';
    for (let i = 0; i < infoss.male.length; i++) {
        f = infoss.female[i] ?? '';
        m = infoss.male[i];
        dataRow = dataRow + `<tr><td>${f}</td><td>${m}</td></tr>`;
    }
    Hhtml.innerHTML = dataRow
}































































































