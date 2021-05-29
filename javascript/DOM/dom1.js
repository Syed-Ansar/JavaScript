// getElementById

// const title = document.getElementById('page-title');
// console.log(title);

// getElementsByClass
// We cannot apply forEach on HTML element and can apply on node-list.

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// console.log(errors[1]);

// getElementsByTagName

// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[0]);
// console.log(paras[1]);
// console.log(paras[2]);


// Adding & Changing the page content

// const para = document.querySelector('.content > p');
// para.innerText += " Syed Ansar";
// console.log(para.innerHTML);

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//    para.innerText += " New Text";
// });


// adding element from the javascript

// const content = document.querySelector('.content');
// content.innerHTML += '<h2>This is new HTML</h2>'


// adding html in the to the page


const content = document.querySelector('.content');
const people = ['Ansar','Amair','Abdul'];
people.forEach(person => {
    content.innerHTML += `<p>${person} is one of my Friend!</p>`;
});