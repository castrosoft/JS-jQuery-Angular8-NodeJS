'use strict'

// Pruebas con let y var

//let = local
//var = global

//Prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50


//Prueba con let
var texto = "JS Course";
console.log(texto); //valor JS

if(true){
    let texto = "LARAVEL 5 Course";
    console.log(texto); //valor LARAVEL 5
}

console.log(texto); //valor JS