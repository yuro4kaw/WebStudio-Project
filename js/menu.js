const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
const logo = document.querySelector("[data-logo]");
const body = document.querySelector("[data-body]");
const html = document.querySelector("[data-html]");

menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    logo.classList.toggle("is-open");
    body.classList.toggle("is-open");
    html.classList.toggle("is-open");
})