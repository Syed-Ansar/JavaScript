// String Methods

// 1. .concat
let marks = [12,34,45];
let marks2 = [66,99,23];
console.log(marks.concat(marks2));

// 2. .length

let numbers = [1,2,3,4,5 ,6,7,8,9,0];
console.log(numbers.length);

// 3. .toLowerCase

let string = "Syed Ansar";
console.log(string.toLowerCase());

// 4.toUpperCase

let string1 = "Syed Ansar";
console.log(string1.toUpperCase());

// 5. Character by their indexes

let HTML = "Syed Ansar";

console.log(HTML[2]);

console.log(HTML.length);

console.log(HTML.indexOf("A"));

//  console.log(HTML.lastIndexOf("Syed");

console.log(HTML.charAt(5));

console.log(HTML.endsWith("c"));

console.log(HTML.endsWith("r"));

console.log(HTML.includes("Syed"));

console.log(HTML.includes("z"));

console.log(HTML.substring(0,8));

console.log(HTML.substring(5,10));

console.log(HTML.slice(0,6));

console.log(HTML.slice(-4));

// HTML = "<h1>Syed<p>Ansar</p></h1>";

console.log(HTML.toLowerCase().split("a"));

console.log(HTML.replace("Ansar","Asrar"));


// Templete Literals

let name = 'Ansar';
let fruit1 = 'Orange';
let fruit2 = 'Apple';

let myHtml = `Hello ${name} <h1> These are fruits </h1> <p>your friend like ${fruit1} and ${fruit2} </p>`;

console.log(myHtml);
document.body.style.color = 'white';
document.body.style.backgroundColor = 'blue';
document.body.innerHTML = myHtml;