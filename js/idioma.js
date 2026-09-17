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
