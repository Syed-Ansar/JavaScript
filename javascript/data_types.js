console.log('Syed Ansar' + ' Data Types');

//Primitive data types

//String
let name = "Syed";
console.log("My Name is " + name);
console.log("Data type is " + (typeof name));

//Numbers
let marks = 45;
console.log("My number is " + marks);
console.log("Data type is " + (typeof marks));

//Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

//Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

//undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

//Reference Data-Types

//Arrays

let myArr = [1,2,3,4,5];
console.log("Data type is " + (typeof myArr));

//Object Literals

let stMarks = {
    Syed : 95,
    Ansar : 100,
    Asrar : 85,
    Result : "Passed",
}
console.log(stMarks);
console.log("Data type is " + (typeof stMarks));

//Functions

function findName() {
    
}
console.log("Data type is " + (typeof findName));

//Date 

let date = new Date();
console.log(date)
console.log("Data type is " + (typeof date));

//Type Conversion And Coercion

//String

let myString;
myString = 34;
myString = String(34);
console.log("Data type is " + (typeof myString));

//Number

let booleanVar = true;
booleanVar = String(booleanVar);
console.log("Data type is " + (typeof booleanVar));

// Date

let date_ = String(new Date());
console.log(date_)
console.log("Data type is " + (typeof date_));

// Array

let arra = [1,2,3,4,5,6]
let Array =String([1,2,3,4,5]);
console.log(arra + " Length = " + arra.length);
//Length of String will be increased after converting it into String.
console.log( Array + " Data type is " + " Length = " + Array.length + ' ' + (typeof Array));

//With toStrings method

let i = 8;
console.log(i)
console.log("8 To String " + i.toString());
console.log("Data type is " + (typeof i));

let stri = '6666';
console.log(stri);
console.log("Data type is " + (typeof stri));

stri = Number('6666')
console.log(stri);
console.log("Data type is " + (typeof stri));

//NaN Not a Number

stri = Number('666c6')
console.log(stri);
console.log("Data type is " + (typeof stri));

stri = Number(false);
console.log(stri)
console.log("Data type is " + (typeof stri));


stri = Number(true);
console.log(stri)
console.log("Data type is " + (typeof stri));

let number = parseInt("34.5656");
console.log(number);
console.log("Data type is " + (typeof number));

let number1 = parseFloat("34.5656");
console.log(number1);
console.log("Data type is " + (typeof number1));

let number2 = 35.500;
console.log(number2.toFixed());
console.log("Data type is " + (typeof number2));


let number3 = 3;
console.log(number3.toExponential());
console.log("Data type is " + (typeof number3));

// Type Coercion

let myStri = "700";
let myNum = 300;
console.log( myStri + myNum)
console.log("Data type is " + (typeof myStri));

let myStri1 = Number("700");
let myNum1 = 300;
console.log( myStri1 + myNum1)
console.log("Data type is " + (typeof myNum1));

let myStri2 = "700";
let myNum2 = String(300);
console.log( myStri2 + myNum2)
console.log("Data type is " + (typeof myStri2));



