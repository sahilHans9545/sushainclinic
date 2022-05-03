let mobile_menubar = document.querySelector(".mobile-menubar");
let close_mobileMenu = document.querySelector(".close_mobileMenu ");
mobile_menubar.addEventListener("click", () => {
  document
    .querySelector(".header nav .menu")
    .classList.add("active-mobileMenu");
});

close_mobileMenu.addEventListener("click", () => {
  document
    .querySelector(".header nav .menu")
    .classList.remove("active-mobileMenu");
});
