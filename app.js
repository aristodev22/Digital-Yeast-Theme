// MOBILE MENU ACCORDION
const menuIcon = document.getElementById("menu-icon");
const mobileNav = document.getElementsByClassName("mobilenav")[0];

menuIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("border-top");

  if (menuIcon.classList.contains("gg-close")) {
    menuIcon.classList.remove("gg-close");
    menuIcon.classList.add("gg-format-justify");
  } else {
    menuIcon.classList.remove("gg-format-justify");
    menuIcon.classList.add("gg-close");
  }

  if (mobileNav.style.maxHeight) {
    mobileNav.style.maxHeight = null;
  } else {
    mobileNav.style.maxHeight = mobileNav.scrollHeight + "px";
  }
});

// STICKY NAVBAR CUSTOMIZATION
const navbar = document.getElementsByClassName("navbar")[0];
const logo = document.getElementsByClassName("logo")[0];
const searchIcon = document.getElementById("search-icon");

window.onscroll = function () {
  customizeSticky();
};

function customizeSticky() {
  const top = window.scrollY;

  if (top >= 80) {
    navbar.classList.add("sticky");
    logo.src = "./assets/img/logo.png";
    menuIcon.style.color = "rgb(153, 0, 51)";
    searchIcon.style.color = "rgb(153, 0, 51)";
    const navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; ++i) {
      navLinks[i].style.color = "rgb(153, 0, 51)";
    }
  } else {
    navbar.classList.remove("sticky");
    logo.src = "./assets/img/logo-white.png";
    menuIcon.style.color = "white";
    searchIcon.style.color = "white";
    const navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; ++i) {
      navLinks[i].style.color = "white";
    }
  }
}
