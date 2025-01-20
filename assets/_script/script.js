document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burgermenu");
  const burgerCross = document.getElementById("burgercross");
  const navLinksBurger = document.querySelector(".nav-links_burger");

  // burgerCross.style.display = "none";

  burgerMenu.addEventListener("click", () => {
    navLinksBurger.style.display = "block";
    burgerMenu.style.display = "none";
    burgerCross.style.display = "block";
  });

  burgerCross.addEventListener("click", () => {
    navLinksBurger.style.display = "none";
    burgerMenu.style.display = "block";
    burgerCross.style.display = "none";
  });
});
