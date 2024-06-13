"use strict";

// Abrir e fechar barra de navegação
let closeIcon = document.querySelector("span[name='close']");
let barIcon = document.querySelector("span[name='bar']");
let navItems = document.querySelector("ul[name='nav']");

closeIcon.addEventListener("click", () => {
  closeIcon.classList.add("hidden");
  barIcon.classList.remove("hidden");
  navItems.classList.add("top-[-400px]", "opacity-0");
});

barIcon.addEventListener("click", () => {
  closeIcon.classList.remove("hidden");
  barIcon.classList.add("hidden");
  navItems.classList.remove("top-[-400px]", "opacity-0");
});

// Mudar cor do header ao scroll
(function () {
  let header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("bg-black/90", "shadow");
    } else {
      header.classList.remove("bg-black/90", "shadow");
    }
  });
})();

// Scrool suave
function findSection(link) {
  let linkToSection = link.getAttribute("href");
  let getSection = document.querySelector(linkToSection);
  return getSection;
}

let links = document.querySelectorAll("a[href^='#']");
links.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let section = findSection(link);
    let getYSection = section.offsetTop;
    let navbarHeight = 80;
    window.scrollTo({
      top: getYSection - navbarHeight,
      behavior: "smooth",
    });
  }),
);
