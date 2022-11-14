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

window.onload = (event) => {
  window.scrollBy(0, 1);
};

window.onscroll = function () {
  customizeSticky();
  backToTop();
};

function customizeSticky() {
  const scrolledHeight = window.scrollY;

  if (scrolledHeight >= 80) {
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


// BACK TO TOP BUTTON FUNCTION
const backToTopBtn = document.getElementById("backtotop");
let backToTopBtnRight = window.getComputedStyle(backToTopBtn).getPropertyValue('right');

function backToTop() {
  const scrolledHeight = window.scrollY;

  if (scrolledHeight >= 800) {
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
  } else {
    if (backToTopBtnRight == "20px" && backToTopBtn.style.bottom == "20px") {
      backToTopBtn.style.right = "-100px";
      setTimeout(() => {
        backToTopBtn.style.bottom = "-100px";
      }, 500);
      setTimeout(() => {
        backToTopBtn.style.right = "20px";
      }, 600);
    }
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollBy(0, -window.pageYOffset);
});


// NAVBAR SEARCH FORM CONTROL
const NavSearchForm = document.getElementById("search-form");
const desktopNav = document.getElementsByClassName("nav")[0];

searchIcon.addEventListener("click", toggleSearch);

function toggleSearch() {
  NavSearchFormTop = window.getComputedStyle(NavSearchForm).getPropertyValue('top');

  if (NavSearchFormTop == "-100px") {
    NavSearchForm.style.top = "0.4rem";
    searchIcon.classList.remove("gg-search");
    searchIcon.classList.add("gg-close");
  } else {
    NavSearchForm.style.top = "-10rem";
    searchIcon.classList.remove("gg-close");
    searchIcon.classList.add("gg-search");
  }

  if (!desktopNav.classList.contains("slide-down")) {
    desktopNav.classList.add("slide-down");
    desktopNav.style.opacity = "0";
  } else {
    function showNav() {
      desktopNav.style.opacity = "1";
    }
    setTimeout(showNav, 200);

    function slideUp() {
      desktopNav.classList.remove("slide-down");
    }
    setTimeout(slideUp, 300);
  }
}


// PORTFOLIO TAB FUNCTION
const portfolioTabs = document.getElementsByClassName("portfolio-tab");
const portfolioContent = document.getElementsByClassName("portfolio-content")[0];
const portfolioItems = document.getElementsByClassName("portfolio-item");
const portfolioTop = document.getElementsByClassName("portfolio-top")[0];

portfolioTabs[0].classList.add("current-item");

portfolioTop.addEventListener('click', showTab);

function showTab(event) {
  event.target.classList.add("current-item");

  for (let p = 0; p < portfolioTabs.length; p++) {
    if (portfolioTabs[p] === event.target) {
      continue;
    } else {
      portfolioTabs[p].classList.remove("current-item");
    }
  }

  for (let q = 0; q < portfolioItems.length; q++) {
    if (event.target.classList.contains("all-button")) {
      portfolioItems[q].style.display = "flex";
      rerunAnim();
    } else if (event.target.classList.contains("branding-button")) {
      if (!portfolioItems[q].classList.contains("branding")) {
        portfolioItems[q].style.display = "none";
      } else {
        portfolioItems[q].style.display = "flex";
        rerunAnim();
      }
    } else if (event.target.classList.contains("webdesign-button")) {
      if (!portfolioItems[q].classList.contains("webdesign")) {
        portfolioItems[q].style.display = "none";
      } else {
        portfolioItems[q].style.display = "flex";
        rerunAnim();
      }
    }
  }
}

function rerunAnim() {  
  portfolioContent.classList.remove("animate-portfolio");
  void portfolioContent.offsetWidth;
  portfolioContent.classList.add("animate-portfolio");
}


// PORTFOLIO PAGINATION FUNCTION