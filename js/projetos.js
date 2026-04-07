document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".project-toggle").forEach(btn => {

        btn.addEventListener("click", () => {

            const extra = btn.closest(".project-body").querySelector(".project-extra");
            const aberto = extra.classList.contains("aberto");

            if (aberto) {
                extra.classList.remove("aberto");
                btn.textContent = "Ver mais ↓";
            } else {
                extra.classList.add("aberto");
                btn.textContent = "Ver menos ↑";
            }

        });

    });

});