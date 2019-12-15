'useestrict'

// Texts transform
var number = 10;
var text1 = "Welcome to Mina Clavero Mina";
var text2 =  " a great city";

var searchWord = text1.indexOf("Mina");
console.log(searchWord);
var searchWord = text1.lastIndexOf("Mina");
console.log(searchWord);
var searchWord = text1.search("Mina"); //idem a indexOf
console.log(searchWord);
var searchWord = text1.match("Mina"); //return an array
console.log(searchWord);
var searchWord = text1.match(/Mina/g); //return an array. Global search
console.log(searchWord);
var searchWord = text1.substr(8,16); //part of sentence
console.log(searchWord);
var searchWord = text1.charAt(16); //just a letter
console.log(searchWord);
var searchWord = text1.startsWith("Wel"); //just search at begin of phrase
console.log(searchWord);
var searchWord = text1.endsWith("Mina");
console.log(searchWord);
var searchWord = text1.includes("Clavero");
console.log(searchWord);


