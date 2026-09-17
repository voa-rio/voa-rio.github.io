const idiomas = ["pt", "en", "es"];

function salvarIdioma(idioma) {
    localStorage.setItem("idioma", idioma);
}

function obterIdioma() {
    return localStorage.getItem("idioma") || "pt";
}
