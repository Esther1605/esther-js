// functions allows us to create reuseable code in js

// function ourreusableFunction() {
//     console.log("Hello, This is a reusable function")
// }

// ourreusableFunction(); 

// function reusableFunction() {
//     console.log("Hi, I am a reusable function")
// }

// reusableFunction();

// function functionWithArgs(a, b) {
//     console.log(a + b); // this function takes two arguments and adds them together
// }

// functionWithArgs(1, 2); // calling the function with two arguments

// function minus(num){
//     return num -5; // this function takes a number and subtracts 7 from it
// }
// console.log(minus(20)); // calling the function with 10 as an argument

// function times(num){
//     return num *5; // this function takes a number and subtracts 7 from it
// }
// console.log(times(20));

// var processed = 0;

// function processedArg(num) {
//     return (num + 5) / 5;
// }

// processed = processedArg(30);

// console.log(processed)

// if statement
function ourTrueOrFalse (isItTrue){
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}


console.log(ourTrueOrFalse(false));

console.log(trueOrFalse(true));


function testequalsign(val){
    if (val == 12){
        return "Equal";
    }
    return "Not Equal"
}

console.log(testequalsign(12))

function testequalsign(val){
    if (val != 12){
        return "Not Equal!";
    }
    return "Equal"
}

console.log(testequalsign(11));


// function testLessThan(val){
//     if (val < 25){
//         return "Less than 25";
//     }
//     return "Greater than or equal to 25"
// }
function testLessThan(val){

    if (val < 45){
        return "Under 45";
}

    return "45 0r over";
}
console.log(testLessThan(60));