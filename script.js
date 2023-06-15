
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector('.copiar');
const checkbox = document.getElementById('checkboxOcultar');

function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value= "";
    mensaje.style.backgroundImage="none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufar"]];
    stringEncriptado=stringEncriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;

}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufar"]];
    stringDesencriptado=stringDesencriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;

}

function btnDesencriptar(){
    const textoEncriptado= desencriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value= "";
}

botonCopiar.addEventListener('click', () => {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('¡Texto copiado!');
});

let textoOriginal = null;

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        if (textoOriginal === null) {
            // Guardar una copia del texto original
            textoOriginal = mensaje.value;
        }
        const textoOculto = mensaje.value.replace(/\S/g, "*");
        mensaje.value = textoOculto;
        } else {
            if (textoOriginal !== null) {
            // Restaurar el texto original
            mensaje.value = textoOriginal;
            textoOriginal = null;
            }
        }
});




