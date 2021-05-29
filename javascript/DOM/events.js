// console.log('Events');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Something new';
    ul.prepend(li);
})

// const items = document.querySelectorAll('li');

// items.forEach((item) =>{
// item.addEventListener('click', (e) => {
//     console.log('event in li');
//     e.stopPropagation();
//     e.target.remove();
// })
// }); 
ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})