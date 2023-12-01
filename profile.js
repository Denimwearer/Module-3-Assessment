console.log("Hello profile js is working");

handleColorButton = (e) => {
  e.preventDefault();
  alert("My favorite color is purple!");
};

handlePlaceButton = (e) => {
  e.preventDefault();
  alert("My favorite place is in my bed!");
};

handleRitualButton = (e) => {
  e.preventDefault();
  alert("My favorite ritual is waking up early!");
};

let colorButton = document.querySelector("#color");
let placeButton = document.querySelector("#place");
let ritualButton = document.querySelector("#ritual");

colorButton.addEventListener("click", handleColorButton);
placeButton.addEventListener("click", handlePlaceButton);
ritualButton.addEventListener("click", handleRitualButton);
