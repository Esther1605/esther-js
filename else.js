

// function testElse(age) {
//     if (age < 18) {
//     return "You are a minor.";
// } else{
//     return "You are an adult.";
// }
// }

// console.log(testElse(10));


// function testElseIf(val) {
//     if (val < 10) {
//     return "Less than 10";
// } else if(val < 5) {
//     return "Less than 5";
// }else{
//     return "greater than or equal to 10";
// }
// }

// console.log(testElseIf(13)); 

// num < 5 -return "Tiny"
// num < 10-return "Small"
// num < 15 -return "Medium"
// num < 20 -return "Large"
// num >= 20 -return "Huge"

// function testSizes(num){
//     if (num < 5) {
//         return "Tiny"
//     } else if (num < 10) {
//         return "Small"
//     }else if (num < 15) {
//         return "Medium"
//     } else if(num < 20) {
//         return "Large"
//     } else {
//         return "Huge"
//     }
// }

// console.log(testSizes(25))


// ternary operator

let val = 200;
// let message;
// if (val > 100) { message = `${val} was greater than 100`;}
// else{ message = `${val} was Less or Equal to 100`;}
let message = (val > 100) ? `${val} was greater than 100` : `${val} was LESS or Equal to 100`;
console.log(message);


let check = (val % 3) ? `odd` : `Even`;
// let message;
// if (val > 100) { message = `${val} was greater than 100`;}
// else{ message = `${val} was Less or Equal to 100`;}

console.log(check);