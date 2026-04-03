document.addEventListener("componentsLoaded", () => {

    const nameElement = document.querySelector(".name");

    if (nameElement) {
        nameElement.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (!menuToggle || !navList) return;

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

});