const mobileMenu = document.querySelector(".mobile__menu");
const openMenu = document.querySelector(".ham__menu");
const closeMenu = document.querySelector(".menu__close");

openMenu.addEventListener("click", ()=>{
    mobileMenu.classList.replace("translate-x-full", "translate-x-0");
})

closeMenu.addEventListener("click", ()=> {
    mobileMenu.classList.replace("translate-x-0", "translate-x-full");
})