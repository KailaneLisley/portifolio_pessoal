document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const page = btn.dataset.page;
            window.location.href = page;
        });
    });

});

document.addEventListener("componentsLoaded", () => {

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = btn.dataset.page;
        });
    });

});