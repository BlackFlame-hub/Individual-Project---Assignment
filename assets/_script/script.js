document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burgermenu");
  const burgerCross = document.getElementById("burgercross");
  const navLinksBurger = document.querySelector(".nav-links_burger");

  // Initial state
  burgerCross.style.display = "none";

  burgerMenu.addEventListener("click", () => {
    navLinksBurger.classList.add("active"); // Show the menu
    navLinksBurger.classList.remove("hidden"); // Ensure it's not hidden
    burgerMenu.style.display = "none"; // Hide the burger menu button
    burgerCross.style.display = "block"; // Show the cross button
  });

  burgerCross.addEventListener("click", () => {
    navLinksBurger.classList.remove("active"); // Hide the menu
    navLinksBurger.classList.add("hidden"); // Ensure it's hidden
    burgerMenu.style.display = "block"; // Show the burger menu button
    burgerCross.style.display = "none"; // Hide the cross button
  });
});
