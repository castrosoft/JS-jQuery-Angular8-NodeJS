'use strict'

/*
    Calculator
    1. Giving two numbers
    2. If there's a wrong number then don't give again
    3. In the page's body, in a alert and in the console, to show: sum, substraction, multiply and division
*/

var number_1 = parseInt(prompt("Insert number 1"));
var number_2 = parseInt(prompt("Insert number 1"));

var sum = number_1 + number_2;
var substraction = number_1 - number_2;
var multiply = number_1 * number_2;
var division = number_1 / number_2;

//Sum
document.write("The sum is: " + sum + "<br/>");
alert("The sum is: " + sum);
console.log("The sum is: " + sum)

//Substraction
document.write("The substraction is: " + substraction + "<br/>");
alert("The substraction is: " + substraction);
console.log("The substraction is: " + substraction)

//Multiply
document.write("The multiply is: " + multiply + "<br/>");
alert("The multiply is: " + multiply);
console.log("The multiply is: " + multiply)

//Division
document.write("The division is: " + division + "<br/>");
alert("The division is: " + division);
console.log("The division is: " + division)







