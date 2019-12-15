'use strict'

/*
    To say if a numbers is odd or even 
    1. prompt windows
    2. wrong number? Try again.
*/

var number = parseInt(prompt("Insert number",0));

//Validation
while(isNaN(number)){
    number = parseInt(prompt("Try again!",0));
}

if(number % 2 == 0){
    document.write(number + " is odd (par)");
}else{
    document.write(number + " is even (impar)");
}