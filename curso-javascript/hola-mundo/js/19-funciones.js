'use strict'

function calculator(number_1, number_2, toShow = true){

    if(toShow){
        byConsole(number_1, number_2);
    }else{
        byDocument(number_1, number_2);
    }
    return true;
}


function byConsole(number_1, number_2){
    console.log("Sum: " + (number_1 + number_2));
    console.log("Substraction: " + (number_1 - number_2));
    console.log("Multiply: " + (number_1 * number_2));
    console.log("Division: " + (number_1 / number_2));  
}

function byDocument(number_1, number_2){
    document.write("Sum: " + (number_1 + number_2 + "<br/>"));
    document.write("Substraction: " + (number_1 - number_2 + "<br/>"));
    document.write("Multiply: " + (number_1 * number_2 + "<br/>"));
    document.write("Division: " + (number_1 / number_2 + "<br/>"));    
}



calculator(20, 5);
calculator(20, 5, false);