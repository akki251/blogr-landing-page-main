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
