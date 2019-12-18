'use strict'

var names = ["Pedro Castro", "Leo Messi", 52, true];

var languages = new Array("Java", "Go", "JS");

//console.log(names);
//console.log(names[1]);

//console.log("Length: " + names.length);

/*
var item = parseInt(prompt("What item do you want?", 0));
if(item >= names.length){
  alert("Wrong number. Try again. Max number is: " + names.length);  
}else{
    console.log(names[item]);
}
*/

//Using for
/*
for(var index = 0; index < names.length; index++){
    document.write("<li>" + names[index] + "</li>");
}
*/


//Using forEach
/*
names.forEach((item, index, array) => {
    console.log(array);
    document.write("<li>" + index + " - " + item + "</li>");
});
*/

//Multidimensional arrays - arrays dentro de otros

var category = ["Action", "Scary", "Comedy"];
var films = ["La verdad duele", "Scream", "What pass yesterday"];

var cine = [category, films];
console.log(cine);

console.log(cine[0][1]); //scary
console.log(cine[1][1]); //scream




