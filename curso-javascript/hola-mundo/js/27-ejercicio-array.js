'use strict'

/*
    1. Pida 6 nros por pantalla y los meta en un array
    2. Mostrar todo el arrray en el body y console.
    3. Ordenar y mostrar.
    4. Invertir order y mostrar
    5. Mostrar longitud del array
    6. Buscar valor en array introducido por user, si lo encuentra que avise y su index
    (se valorar uso de functions)
*/


var quant = 0;
var array = new Array();

do{
    var item = parseInt(prompt("Insert a number"));
    array.push(item);
    quant++;
}
while(quant < 6);

//showing in body
array.forEach((item) => {
    document.write("<li>" + item + "</li>");
});

//showing in console
array.forEach((item) => {
    console.log(item);
});

//order and show
document.write("<br>" + "Items ordenados" + "</br>");
document.write(array.sort());

//length array
document.write("<br>" + "Longitud" + "</br>");
document.write(array.length);

//search item
var item_search = (prompt("SEARCHING NUMBER"));
var value = array.find(index => index == item_search);
var searching = array.some(index => index = value); //true or false

if(searching){
    alert("Encontro el elemento");
}else{
    alert("NO encontro el elemento");
}




    
    

