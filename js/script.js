//hamburger//

const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");

burger.addEventListener ("click", function() {
  iconBurger.classList.toggle("active");
  iconX.classList.toggle("active");
  column.classList.toggle("active");
  burger.classList.toggle("active");
  })
//
