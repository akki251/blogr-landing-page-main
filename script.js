//
// ──────────────────────────────────────────────────────────── I ──────────
//   :::::: M E N U   H O V E R : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//

const mainNavLists = document.querySelectorAll(
  ".main-nav-list .main-nav-list-item"
);
const mainNavLinks = document.querySelectorAll(".main-nav-link");

navLinksRunner();

function navLinksRunner() {
  for (let i = 0; i < mainNavLinks.length; i++) {
    mainNavLinks[i].addEventListener("click", () => {
      if (mainNavLists[i].classList.contains("active-list")) {
        mainNavLists[i].classList.remove("active-list");
      }
      clearAll();

      mainNavLists[i].classList.toggle("active-list");
      const dropdown = mainNavLists[i].querySelector(".dropdown-menu");
      dropdown.classList.toggle("active");
    });
  }
}
function clearAll() {
  for (var i = 0; i < mainNavLists.length; i++) {
    if (mainNavLists[i].classList.contains("active-list")) {
      mainNavLists[i].classList.remove("active-list");
      const dropdown = mainNavLists[i].querySelector(".dropdown-menu");
      dropdown.classList.remove("active");
    }
  }
}

//
// ────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: N A V   O P E N   T O G G L E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────
//

const toggleBtn = document.getElementById("toggle-btn");
const mainNav = document.getElementById("main-nav");
toggleBtn.addEventListener("click", () => {
  mainNav.classList.toggle("nav-open");
});

function changeNavStatus(mediaWidth) {
  if (mediaWidth.matches) {
    mainNav.classList.remove("nav-open");
  }
}

var mediaWidth = window.matchMedia("(min-width: 963px)");
changeNavStatus(mediaWidth);
mediaWidth.addListener(changeNavStatus);
