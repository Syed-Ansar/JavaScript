console.log("Syed Ansar");

// Arrays

const marks = [34,45,67,89,90];
const fruits = ['apple','pineapple','orange'];
const mixed = [34,'Syed',[67,89]];

mixed[1] = 'Ansar';

console.log(marks,fruits,mixed);

// Array Properties ans Methods

// 1. .length

 console.log(fruits.length)

 // 2. .indexOf

 console.log(marks.indexOf(90));

 // 3. push()  inserting elements in the end of an array

 console.log(mixed.push(223,567));
 console.log(mixed);

// 4. unshift() inserting elements in the start of an array

 console.log(fruits.unshift('promogranate'));
 console.log(fruits);

 // 5. pop()  removing elements from the end of an array

 console.log(marks.pop());
 console.log(marks);

 // 6. shift() removing elements from the start of an array

 console.log(mixed.shift());
 console.log(mixed);

 // 7. splice() removing elements py passing parameters i.e splice(from,How many elements to be deducted)

 console.log(fruits.splice(2,6));
 console.log(fruits);

 // 8. reverse()

 console.log(marks.reverse());
 console.log(marks);

 // 9. concat()

 console.log(marks.concat(mixed));
 console.log(marks);

 // 10. Objects

 let myObj = {
     Name : 'Syed Ansar',
     class : 'Computer Science',
     'Roll Number' : '19081A05D9',
     marks : [90,78,89,67,96],
 }
 console.log(myObj);
 console.log(myObj.Name);
 console.log(myObj.class);
 console.log(myObj["Roll Number"]);
 console.log(myObj.marks);
