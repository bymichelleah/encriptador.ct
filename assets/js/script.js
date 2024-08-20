window.addEventListener("load", inicio, true);

function inicio() {
    const mensajeElement = document.getElementById("mensaje");
    const desplazamientoElement = document.getElementById("desplazamiento");
    const mensaje2Element = document.getElementById("mensaje2");

    mensajeElement.addEventListener("keyup", () => {
        mensajeElement.value = mensajeElement.value.toUpperCase();
    }, true);

    document.getElementById("cifrar").addEventListener("click", () => {
        mensaje2Element.value = cifrarDescifrar(mensajeElement.value, desplazamientoElement.value, false);
    }, true);

    document.getElementById("descifrar").addEventListener("click", () => {
        mensaje2Element.value = cifrarDescifrar(mensajeElement.value, desplazamientoElement.value, true);
    }, true);
}

function cifrarDescifrar(texto, desplazamiento, esDescifrar) {
    if (!texto) return "";

    const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
    const longitudAlfabeto = alfabeto.length;

    desplazamiento = (desplazamiento) % longitudAlfabeto;
    if (esDescifrar) {
        desplazamiento = -desplazamiento;
    }

    return texto.replace(/[A-Z0-9Ñ]/gi, c => {
        const indice = alfabeto.indexOf(c.toUpperCase());
        return alfabeto[(indice + desplazamiento + longitudAlfabeto) % longitudAlfabeto];
    });
}

function copyText() {
    const mensaje2 = document.getElementById("mensaje2");
    mensaje2.select();
    mensaje2.setSelectionRange(0, 99999); 

    document.execCommand("copy");

    Toastify({
        text: "Texto copiado al portapapeles.", 
        duration: 1500, 
        gravity: "top", 
        position: "right", 
        backgroundColor: "#000000", 
    }).showToast();
}
