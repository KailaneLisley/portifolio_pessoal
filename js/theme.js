function initTheme() {

    const button = document.getElementById("theme-toggle");

    // carregar tema salvo
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        button.textContent = "☀️";
    }

    button.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            button.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            button.textContent = "🌙";
        }
    });
}

export default initTheme;