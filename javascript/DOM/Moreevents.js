console.log("Ansar");

// copy Events

const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", () => {
  console.log("content is on copy rights");
});

const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  box.textContent = `x pos - ${e.offsetX} , y pos - ${e.offsetY}`;
  console.log(e.offsetX, e.offsetY);
});

document.addEventListener("wheel", (e) => {
  console.log(e.pageX, e.pageY);
});
