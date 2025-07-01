const val = 100;
let message = 'nothing';
if (val > 100) {
   message = 'yes it was true';
}else if (val == 100) {
    message = 'yes it was equal to 100';
}

else{
    message = 'no it was false';
}
 
document.getElementById('message').innerHTML = message;