document.addEventListener("componentsLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (!menuToggle || !navList) return;

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

});