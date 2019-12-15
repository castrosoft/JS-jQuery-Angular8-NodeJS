'use strict'

/*
    Multiply table of a number
*/

var number = parseInt(prompt("Insert number",1));

//Validation
while(isNaN(number)){
    number = parseInt(prompt("Try again!",0));
}

//output
document.write("Table of " + number + "<br/>");

//process
for(var index = 1; index <= 10; index++){
    document.write(index * number + "<br/>")
}


