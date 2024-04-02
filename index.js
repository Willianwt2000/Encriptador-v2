const inputMensaje = document.querySelector("#encryptar")
const resultado = document.querySelector("#decrypt")

const encryptar  = document.getElementById("encrypt-btn")
const desencryptar  = document.getElementById("decrypt-btn")
const copiar  = document.getElementById("copy")

const luz = document.getElementById("contenedorTextos");



// Funciones para encryptar y desencryprat su

function encryptarTexto() {
    var mensaje = inputMensaje.value;
    var mensajeEncryptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat")

    resultado.value = mensajeEncryptado;
}

function desencryptarTexto() {
    var mensajeEncryptado = inputMensaje.value;
    var mensaje = mensajeEncryptado    
    .replaceAll("enter", "e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u")

    resultado.value = mensaje;
}


// Agregar evento de click al botón de copiar
copiar.addEventListener("click", function() {
    // Seleccionar el resultado
    resultado.select();
    resultado.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el resultado al portapapeles
    document.execCommand("copy");
});

