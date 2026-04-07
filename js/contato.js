document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contato-form");
    const feedback = document.getElementById("form-feedback");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Aqui você conecta a um serviço real (Formspree, EmailJS, etc.)
        // Por enquanto, apenas exibe a mensagem de confirmação

        feedback.textContent = "✅ Mensagem enviada! Responderei em breve.";
        form.reset();

        setTimeout(() => {
            feedback.textContent = "";
        }, 5000);
    });

});