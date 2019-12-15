'useestrict'

// Texts template

var name = prompt("NAME");
var surname = prompt("SURNAME");

//var output = "I'm " + name + ", " + surname;
//document.write(output);

var template = `
        <h1> Hi there <h1/>
        <h3> Mi name is: ${name} <h3/>
        <h3> Mi surname is: ${surname} <h3/>
`;

document.write(template);



