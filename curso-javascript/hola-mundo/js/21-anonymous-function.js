'use strict'

//anonymous function 
//It's a function without name

var film = function(name){
    return "The film is: " + name;
}

//callback: function inside other one.


function sum(number1, number2, sumYShow, sumByTwo){
    var sumar = number1 + number2;

    sumYShow(sumar); //third parameter
    sumByTwo(sumar); //fourth parameter

    return sumar;
}

//call function with 4 parameters
/*
sum(5, 7, function(data){
    console.log("The sum is: ", data);
},
function(data){
    console.log("The sum by two is: ", (data * 2));
});
*/

//Now, I repeat but using arrow pointer (=>)
//replace function by =>

sum(5, 7, (data) => {
    console.log("The sum is: ", data);
},
(data) => {
    console.log("The sum by two is: ", (data * 2));
});