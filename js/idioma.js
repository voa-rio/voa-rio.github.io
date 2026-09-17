const idiomas = ["pt", "en", "es"];

function salvarIdioma(idioma) {
    localStorage.setItem("idioma", idioma);
}

function obterIdioma() {
    return localStorage.getItem("idioma") || "pt";
}

function atualizarIdiomaAtivo() {
    const idiomaAtual = obterIdioma();

    document.querySelectorAll("[data-idioma]").forEach(botao => {
        botao.classList.toggle(
            "idioma-ativo",
            botao.dataset.idioma === idiomaAtual
        );
    });
}

function trocarIdioma(idioma) {
    salvarIdioma(idioma);

    const caminho = window.location.pathname;

    if (caminho.includes("/en/")) {
        window.location.href = caminho.replace("/en/", `/${idioma}/`);
        return;
    }

    if (caminho.includes("/es/")) {
        window.location.href = caminho.replace("/es/", `/${idioma}/`);
        return;
    }

    const pagina = caminho.split("/").pop() || "index.html";

    if (idioma === "pt") {
        window.location.href = pagina;
    } else {
        window.location.href = `${idioma}/${pagina}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    atualizarIdiomaAtivo();

    document.querySelectorAll("[data-idioma]").forEach(botao => {
        botao.addEventListener("click", () => {
            trocarIdioma(botao.dataset.idioma);
        });
    });
});
