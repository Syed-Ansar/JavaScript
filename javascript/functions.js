console.log("Syed Ansar");

// Functions Declaration (It can be called where ever we want and declare the function where ever we want !)

function greet() {
    console.log("Hello Syed!");
}
// calling Function or invoking the function
greet();

// function expression (but here we cannot call the function before the function because of the javascript hoisting so this should be declared at the top and call the function after that )

const speak = function () {
    console.log("Good Day!");
};

speak();

// arguments and parameters
const good = function (name) {
    console.log(`Good Day ${name}!`)
}

good('Ansar');

// more than one parameter and arguments
const time = function (name = 'mike',time = 'night') {
    console.log(`Good ${time} ${name}!`)
}

time();//if we do not provide any arguments so mike and night will be override from the top
time('Shoaib');
time('Ansar','morning');


// returning the function

// const calcArea = function (radius) {
//     let area = 3.14 * radius**2;
//     return area;
// }
// const area = calcArea(5);
// console.log(area);

// (regular function) returning directly value

// const calcArea = function (radius) {
//     return 3.14 * radius**2;
// };
// const area = calcArea(6);
// console.log(area);



// arrow function

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };
// const area = calcArea(10);
// console.log("Area is :",area);

// if there is no parameter then we have to give an empty parenthesis

const hello = () => "hello";
console.log(hello);

// for arrow functions we can remove parenthesis if there is only one parameter and if we have a single return value then we can take away the return keyword and it still return the value

const calcArea = radius =>  3.14 * radius**2;

const area = calcArea(15);
console.log("Area is :",area);


// Example function

// const bill = function (products,tax) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }
// const cost = bill([10,15,30],0.2);
// console.log(cost);

// Example arrow function

const bill = (products,tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i]*tax;
    }
    return total;
};
const cost = bill([10,15,30],0.2);
console.log("Bill is :",cost);


// Function vs methods

const name1 = "syed ansar ";
console.log(name1.toUpperCase());


// callBacks and forEach

// example 1

const myfun = function(callbackFunction) {
    let value = 80;
    callbackFunction(value);
}

myfun(value => {
    console.log(value);
});

// example 2

// let people = ['Ansar','Abdul','Amair','Shoaib','Razzak','Ahmed'];

// const logPerson = (person,index) => {
//     console.log(`${index} - Hello ${person}`)
// }

// people.forEach(logPerson);


// example 3

let numbers = ['30','20','10','90','80','100'];

const num = (numbers,index) => {
    console.log(`${index} :=-> ${numbers}`)
}
numbers.forEach(num);


// example


const para = document.querySelector('.people');

const people = ['Ansar','Abdul','Amair','Shoaib','Razzak','Ahmed'];

let html = ``;

people.forEach(person => {
html += `<li style ="color:purple">${person}</li>`;
});

console.log(html);
para.innerHTML = html;

