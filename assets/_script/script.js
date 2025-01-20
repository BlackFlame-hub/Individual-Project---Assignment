document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burgermenu");
  const burgerCross = document.getElementById("burgercross");
  const navLinksBurger = document.querySelector(".nav-links_burger");

  burgerMenu.addEventListener("click", () => {
    navLinksBurger.classList.remove("hidden");
    navLinksBurger.classList.add("active");
    burgerMenu.style.display = "none";
    burgerCross.style.display = "block";
  });

  burgerCross.addEventListener("click", () => {
    navLinksBurger.classList.remove("active");
    navLinksBurger.classList.add("hidden");
    burgerMenu.style.display = "block";
    burgerCross.style.display = "none";
  });
});
