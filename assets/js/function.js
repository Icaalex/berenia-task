let names = ["joy", "sarah", "isaac"];
let nextNames = ["joseph", "samuel", "joan"];
console.log( names);
 nextNames.push(...names);
console.log("nextnames and names", nextNames.push(...names) );

let secondList;
secondList = nextNames.concat(names)
console.log("using concat method", secondList);
console.log(nextNames.copyWithin(2));

function myFunction(...passCodes) {
    if (passCodes.length !== 0 ) {
        console.log( "weldone, you passed" ,passCodes);
       
        } 
        else {
        
    }
}
myFunction = (23, 45, 78, 94, 23)