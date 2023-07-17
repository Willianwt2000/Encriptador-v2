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

// Funcion para apagar y prender luz

// let isNegro = false; // Variable de estado inicializada como false

// luz.onclick = function() {
//     if (isNegro) {
//         // Si el texto es negro, cambiar a otro color
//         luz.style.background = "white";
//         luz.style.color = "white";
//         luz.querySelector("h1").style.color = "black";
//         isNegro = false; // Actualizar la variable de estado
//     } else {
//         // Si el texto no es negro, ponerlo en negro
//         luz.style.background = "black";
//         luz.style.color = "black";
//         luz.querySelector("h1").style.color = "white";
//         isNegro = true; // Actualizar la variable de estado
//     }
//     };