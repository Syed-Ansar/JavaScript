console.log('Syed Ansar');


// QuerySelector only select 1st element in the document which is targetted

const para = document.querySelector('p');
console.log(para);

const error = document.querySelector('.error');
console.log(error);

const error2 = document.querySelector('div.error');
console.log(error2);


// QuerySelectorAll  select All element in the document which is targetted

const error3 = document.querySelectorAll('.error');
console.log(error3);
console.log(error3[0]);
console.log(error3[1]);
error3.forEach(error => {
    console.log(error);
});

const paras = document.querySelectorAll('p');
paras.forEach(para => {
 console.log(para);
});