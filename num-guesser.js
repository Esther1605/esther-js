let secretNum = 9;
let message;
output(guesser("Guess a number 1-10"));

function guesser(p){
    let guess = prompt(p);
    guess = Number(guess);
    if (guess == secretNum){
        message = `You got it ${secretNum}`;
        return message;
    } else{
        message = guess > secretNum ? `Was higher guess again` : `Was lower guess again`;
        return guesser(`[${guess}] ${message}`);

    }

}


function output(mess){
    document.getElementById('message').innerHTML= message; 
}