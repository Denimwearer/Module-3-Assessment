console.log("Neighborhood js working");

const randomRestaurants = [
  "Pappadeaux",
  "Kona Grill",
  "Ponko",
  "Kimchi Red",
  "Caribbean Fiesta",
];

const handleBtn = (e) => {
  e.preventDefault();
  let random = Math.floor(Math.random() * randomRestaurants.length);
  alert(
    randomRestaurants[random] +
      " " +
      " is were you'll be eating dinner tonight!"
  );
};

let btn = document.querySelector(".restaurantBtn");

btn.addEventListener("click", handleBtn);
