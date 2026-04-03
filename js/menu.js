document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (!toggle || !navList) return;

    toggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

});