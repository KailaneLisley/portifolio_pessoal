async function loadComponent(id, file) {
    const response = await fetch(file);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
}

async function init() {
    await loadComponent("header", "components/header.html");
    await loadComponent("footer", "components/footer.html");

    document.dispatchEvent(new Event("componentsLoaded"));
}

init();