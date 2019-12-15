'use strict'

/*
    To show non numbers between two numbers introduced by user
*/

var number_1 = parseInt(prompt("Insert number 1",0));
var number_2 = parseInt(prompt("Insert number 2",0));

for(var index = number_1; index <= number_2; index++){
    if(index % 2 != 0){
        document.write(index + "<br/>");
    }   
}