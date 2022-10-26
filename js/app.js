const menu = document.querySelector("#menu-btn");
const nav = document.querySelector(".menu-mobile");

/* Inicio lógica de la aniación del menu */

menu.addEventListener("click", animateMenu);

function animateMenu() {
  nav.classList.toggle("active");
}
