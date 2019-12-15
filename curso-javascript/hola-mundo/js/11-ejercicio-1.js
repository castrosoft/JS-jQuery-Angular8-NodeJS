'use strict'

/*
    Program that give me two numbers and say me what's the lowest/highest or equals.
*/

///Giving data
var number_1 = parseInt(prompt("Insert a number 1",0));
var number_2 = parseInt(prompt("Insert a number 2",0));


//console.log(number_1, number_2);

//Controlling data
while(isNaN(number_1) || isNaN(number_2)){
    alert("Wrong numbers. Try again.")
    var number_1 = parseInt(prompt("Insert a number 1",0));
    var number_2 = parseInt(prompt("Insert a number 2",0));
}

//Conditions
if(number_1 > number_2){
    alert(number_1 + " is higher than " + number_2);
}else if(number_1 < number_2){
    alert(number_1 + " is lower than " + number_2);
}else{
    alert("The numbers are equals");
}
