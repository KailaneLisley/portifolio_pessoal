async function loadComponent(id, file) {
    const element = document.getElementById(id);

    if (element) {
        const response = await fetch(file);
        const data = await response.text();
        element.innerHTML = data;
    }
}

async function initComponents() {
    await loadComponent("header", "components/header.html");
    await loadComponent("footer", "components/footer.html");
}

initComponents();