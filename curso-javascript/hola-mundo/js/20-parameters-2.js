'use strict'

//rest and spread parameters

function fruitList(fruit_1, fruit_2, ...rest_of_fruits){
    console.log("Fruit 1 ", fruit_1);
    console.log("Fruit 2 ", fruit_2);
    console.log(rest_of_fruits);
}

//rest
fruitList("Orange", "Apple", "Sandia", "Pera", "Coco");

//spread
var fruits = ["Orange", "Apple"];
fruitList(...fruits, "Sandia", "Pera", "Coco");

//both calls above are equals

//output in console
/*
    Fruit 1  Orange
    Fruit 2  Apple
    (3) ["Sandia", "Pera", "Coco"]
    0: "Sandia"
    1: "Pera"
    2: "Coco"
*/