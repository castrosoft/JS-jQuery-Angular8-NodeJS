'use strict'

/*
    Using a loop, to show sum & average of numbers. When there's a negative number then Finish and to show!
*/

//Variables
var accumulated = 0;
var quantity = 0;


do{
    //Giving numbers
    var number = parseInt(prompt("Insert numbers",0));

    //Validation NaN10
    if(isNaN(number)){
        number = 0;

    }else if(number >= 0){
        quantity++;
        accumulated += number;       
    }

}while(number >= 0);

//To show data:
//sum
alert("The sum is " + accumulated);

//average
alert("The average is " + accumulated/quantity);



