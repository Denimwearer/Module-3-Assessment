console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("form submit");
}

handleMouseOver = (e) => {
  e.preventDefault();

  alert("You so cold you're hot");
};

let form = document.querySelector("#contact");
let image = document.querySelector("img");

form.addEventListener("submit", handleSubmit);
image.addEventListener("mouseover", handleMouseOver);
