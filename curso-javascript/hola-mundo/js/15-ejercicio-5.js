'use strict'

/*
    To show divisors number (where the rest is 0) from a number
*/

var number = parseInt(prompt("Insert number",0));

for(var index = 1; index <= number; index++){
    if(number % index == 0){
        document.write(index + "<br/>");
    }   
}