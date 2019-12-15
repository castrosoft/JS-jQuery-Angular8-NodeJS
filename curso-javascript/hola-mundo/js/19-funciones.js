'use strict'

function calculator(number_1, number_2, toShow = true){

    if(toShow){
        console.log("Sum: " + (number_1 + number_2));
        console.log("Substraction: " + (number_1 - number_2));
        console.log("Multiply: " + (number_1 * number_2));
        console.log("Division: " + (number_1 / number_2));   
    }else{
        document.write("Sum: " + (number_1 + number_2 + "<br/>"));
        document.write("Substraction: " + (number_1 - number_2 + "<br/>"));
        document.write("Multiply: " + (number_1 * number_2 + "<br/>"));
        document.write("Division: " + (number_1 / number_2 + "<br/>"));
    }
}

//calculator(20, 5);
calculator(20, 5, false);