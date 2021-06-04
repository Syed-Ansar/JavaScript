const form = document.querySelector(".signup-form");
const username = document.querySelector("#username");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{5,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  feedback.style.display = "block";

  if (usernamePattern.test(username)) {
    feedback.textContent = "Username is valid " + form.username.value;
    form.username.value = "";
  } else {
    feedback.textContent = "Username is not valid";
  }
});

form.username.addEventListener("keyup", (e) => {
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
// Testing REgular Expression

// const username = "haunuy";
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// console.log(result);

// if (result) {
//   console.log("regex test passed");
// } else {
//   console.log("regex test failed");
// }

// let result = username.search(pattern);
// console.log(result);
