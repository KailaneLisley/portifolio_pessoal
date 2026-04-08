document.addEventListener("DOMContentLoaded", () => {
    initAllCarousels();
});

function initAllCarousels() {

    document.querySelectorAll(".skills-carousel").forEach(carousel => {

        const track   = carousel.querySelector(".carousel-track");
        const window_ = carousel.querySelector(".carousel-window");
        const prevBtn = carousel.querySelector(".carousel-arrow.prev");
        const nextBtn = carousel.querySelector(".carousel-arrow.next");

        if (!track) return;

        // quantos itens visíveis com base na largura da janela
        function visibleCount() {
            const w = window_.offsetWidth;
            if (w >= 3 * 160 + 2 * 30) return 3;
            if (w >= 2 * 140 + 20)     return 2;
            return 1;
        }

        // largura de um item + gap
        function itemWidth() {
            const item = track.querySelector(".skill-item");
            if (!item) return 160;
            const gap = parseInt(getComputedStyle(track).gap) || 30;
            return item.offsetWidth + gap;
        }

        // clonar itens para loop infinito
        const originals = Array.from(track.children);
        const total     = originals.length;

        // adiciona clones no fim e no início
        originals.forEach(item => {
            track.appendChild(item.cloneNode(true));
        });
        originals.slice().reverse().forEach(item => {
            track.prepend(item.cloneNode(true));
        });

        // começa mostrando o bloco "original" (pula os clones do início)
        let currentIndex = total; // índice relativo ao array completo
        let isTransitioning = false;

        function goTo(index, animate = true) {
            const iw = itemWidth();
            track.style.transition = animate ? "transform 0.4s ease" : "none";
            track.style.transform  = `translateX(-${index * iw}px)`;
            currentIndex = index;
        }

        // posição inicial sem animação
        goTo(currentIndex, false);

        // após transição, verifica se precisa "saltar" silenciosamente para o espelho
        track.addEventListener("transitionend", () => {
            isTransitioning = false;
            const allItems = track.querySelectorAll(".skill-item").length;

            // chegou nos clones do fim → volta para os originais
            if (currentIndex >= total * 2) {
                goTo(total, false);
            }
            // chegou nos clones do início → vai para os originais do fim
            if (currentIndex < total) {
                goTo(total * 2 - 1, false);
            }
        });

        nextBtn?.addEventListener("click", () => {
            if (isTransitioning) return;
            isTransitioning = true;
            goTo(currentIndex + 1);
        });

        prevBtn?.addEventListener("click", () => {
            if (isTransitioning) return;
            isTransitioning = true;
            goTo(currentIndex - 1);
        });

        // reposiciona ao redimensionar (sem animação)
        window.addEventListener("resize", () => {
            goTo(currentIndex, false);
        });
    });
}