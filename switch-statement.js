// let today = prompt("pick a number");
// today = Number(today);
// // let today = 0;
// let output;
// switch (today) {
//         case 0:
//         output = "Sunday"
//         break;
//         case 1:
//         output = "Monday"
//         break;
//         case 2:
//         output = "Tuesday"
//         break;
//         case 3:
//         output = "Wednesday"
//         break;
//         case 4:
//         output = "Thursday"
//         break;
//         case 5:
//         output = "Friday"
//         break;
//         case 6:
//         output = "Saturday"
//         break;ge').innerHTML= `Today is ${output}`;

// switch friend challenge
let person = prompt('Enter a name:');
let message;

switch (person.toLowerCase()) {
        case "femi":
        case "daniel":
        case "timmy":
        case "opeyemi":
        case "gold":
        case "joel":
        case "john":
       message = `${person[0].toUpperCase() + person.slice(1)} is my friend`;
       break;
       default :
       message = `I don't know ${person}`
}



// console.log(output)
document.getElementById('message').innerHTML= message;