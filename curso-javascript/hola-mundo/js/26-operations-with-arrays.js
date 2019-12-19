'use strict'

//Multidimensional arrays - arrays dentro de otros

var category = ["Action", "Scary", "Comedy"];
var films = ["La verdad duele", "Scream", "What pass yesterday"];

var cine = [category, films];
//console.log(cine);

//console.log(cine[0][1]); //scary
//console.log(cine[1][1]); //scream


//insert
films.push("Batman");
console.log(films);

/*
var items = prompt("Introduce items to array");
while(items != "END"){
    films.push(items);
    console.log(films);
}
*/

//index of item
var index = films.indexOf("Scream");
console.log("Index is: " + index);

//convert array to String
var string_films = films.join();
console.log(string_films);

//convert string to array
var string_test = "text1, text2, text3";
var array_string = string_test.split(", ");
console.log(array_string);

//order array
//console.log(category.sort());
//console.log(category.reverse());

//for in
/*
for(let index in category){
    document.write(category[index]);
}
*/

//search in arrays
var busqueda = category.find(index => index == "Action");
var busqueda = category.findIndex(index => index == "Action");
console.log(busqueda);

var prices = [10, 20, 50, 80, 12];
var searching = prices.some(index => index >= 82);
console.log(searching);










