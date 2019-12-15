'use strict'

/*
    Program that show me all numbers between number_1 and number_2
*/

var number_1 = parseInt(prompt("Insert number 1",0));
var number_2 = parseInt(prompt("Insert number 2",0));

for(var index = number_1; index <= number_2; index++){
document.write(index + "<br/>");
}
