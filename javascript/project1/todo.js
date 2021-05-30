const button = document.querySelector("button");
const ul = document.querySelector("ul");
const del = document.querySelectorAll("span");
const form = document.querySelector("form");
const li = document.querySelector("li");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  li.textContent = form.todo.value;
  li.innerHTML += `<span><img src="/javascript/project1/delete_black_24dp.svg"></span>`;
  ul.prepend(li);
  form.todo.value = "";
});

// Deleting li's

ul.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.remove();
  }
});
