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
    for (let a = 0; a < navLinks.length; a++) {
      navLinks[a].style.color = "rgb(153, 0, 51)";
    }
  } else {
    navbar.classList.remove("sticky");
    logo.src = "./assets/img/logo-white.png";
    menuIcon.style.color = "white";
    searchIcon.style.color = "white";
    const navLinks = document.getElementsByClassName("nav-link");
    for (let b = 0; b < navLinks.length; b++) {
      navLinks[b].style.color = "white";
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

  for (let c = 0; c < portfolioTabs.length; c++) {
    if (portfolioTabs[c] === event.target) {
      hideUnnecc();
      continue;
    } else {
      portfolioTabs[c].classList.remove("current-item");
      hideUnnecc();
    }
  }

  for (let d = 0; d < portfolioItems.length; d++) {
    if (event.target.classList.contains("all-button")) {
      portfolioItems[d].style.display = "flex";
      rerunAnim();
    } else if (event.target.classList.contains("branding-button")) {
      if (!portfolioItems[d].classList.contains("branding")) {
        portfolioItems[d].style.display = "none";
      } else {
        portfolioItems[d].style.display = "flex";
        rerunAnim();
      }
    } else if (event.target.classList.contains("webdesign-button")) {
      if (!portfolioItems[d].classList.contains("webdesign")) {
        portfolioItems[d].style.display = "none";
      } else {
        portfolioItems[d].style.display = "flex";
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
const portfolioItemsCount = portfolioItems.length;
const portfolioPrev = document.getElementById("pagination-prev");
const portfolioNext = document.getElementById("pagination-next");
const numberOfPages = Math.ceil(portfolioItemsCount / 8);

function createPagination(num) {
  for (let e = 0; e < num; e++) {
    let newPage = document.createElement("div");
    newPage.textContent = e + 1;
    newPage.classList.add("clickable-heading", "portfolio-nav");
    portfolioNext.parentNode.insertBefore(newPage, portfolioNext);
  }
}
createPagination(numberOfPages);

const portfolioNav = document.getElementsByClassName("portfolio-nav");
const portfolioBottom = document.getElementsByClassName("portfolio-bottom")[0];
portfolioBottom.addEventListener('click', showPage);

// Only show pagination if portfolio items are greater than 8
function hideUnnecc() {
  if (portfolioItems.length < 8) {
    portfolioBottom.style.display = "none";
  }
}

// Display first 8 portfolio items on initial page load
window.onload = function () {
  for (let f = 0; f < 8; f++) {
    portfolioItems[f].style.display = "flex";
  }
  prevDisabled();
  NextActive();
  hideUnnecc();
};

function prevDisabled() {
  portfolioPrev.style.opacity = "0.5";
  portfolioPrev.style.cursor = "default";
};

function NextActive() {
  portfolioNext.style.opacity = "1";
  portfolioNext.style.cursor = "pointer";
};

function prevActive() {
  portfolioPrev.style.opacity = "1";
  portfolioPrev.style.cursor = "pointer";
};

function NextDisabled() {
  portfolioNext.style.opacity = "0.5";
  portfolioNext.style.cursor = "default";
};

function showPage(event) {
  if ((event.target !== portfolioPrev) && (event.target !== portfolioNext)) {

    if (event.target.classList.contains("portfolio-nav")) {
      let pageNum = event.target.innerHTML;

      function displayPortfolioItems() {
        let currentPage = pageNum;
        let pageSize = 8;
        let pageStart = (currentPage - 1) * pageSize;
        let pageEnd = currentPage * pageSize;
        for (let g = 0; g < portfolioItems.length; g++) {
          portfolioItems[g].style.display = "none";
        }
        for (let h = pageStart; h < pageEnd; h++) {
          portfolioItems[h].style.display = "flex";
        }
      }
      if (pageNum == 1) {
        prevDisabled();
        console.log("correct");
      } else {
        prevActive();
        console.log("other");
      };
      displayPortfolioItems();
    }
  } else if (event.target === portfolioPrev) {
    console.log("condition 1");

  } else if (event.target === portfolioNext) {
    console.log("condition 2");
  }
}


// FAQ ACCORDION
const faqToggle = document.getElementsByClassName("question-div");

for (let i = 0; i < faqToggle.length; i++) {
  faqToggle[i].addEventListener("click", function (e) {

    const faqToggleIcon = e.currentTarget.lastChild.previousElementSibling;    
    if (faqToggleIcon.classList.contains("gg-add")) {
      faqToggleIcon.classList.remove("gg-add");
      faqToggleIcon.classList.add("gg-remove");
    } else {
      faqToggleIcon.classList.remove("gg-remove");
      faqToggleIcon.classList.add("gg-add");
    }
  
    const answerDiv = e.currentTarget.nextElementSibling;
    // const answerParagraph = e.currentTarget.nextElementSibling.firstChild.nextElementSibling;
    
    if (answerDiv.style.maxHeight) {
      answerDiv.style.maxHeight = null;
      // answerParagraph.style.display = "none";
    } else {
      answerDiv.style.maxHeight = answerDiv.scrollHeight + 100 + "px";
      // answerParagraph.style.display = "block";
    }
  });
}

