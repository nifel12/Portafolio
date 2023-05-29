/*querySelector es para capturar el mensaje del usuario*/ 
/*DOM es el arbol de objetos y captura info del usuario usando el querySelector  */
/*.value es para obtener lo que un usuario escriba en un campo input */
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector('.copiar');
const checkbox = document.getElementById('checkboxOcultar');

function btnEncriptar(){
    /*textoEncriptado recibe la función encriptar y se pasa el parametro que será el valor de textArea que escriba el usuario (textArea.value) esto se volverá stringEncriptado en la funcion encriptar */
    const textoEncriptado= encriptar(textArea.value);
    /*Esto mostrara el valor de textArea en el recuadro "mensaje"*/
    mensaje.value=textoEncriptado;
    /*para quitar el texto despues que encripte*/
    textArea.value= "";
    mensaje.style.backgroundImage="none";
}

function encriptar(stringEncriptado){
    /*se usaran arreglos multidimensionales o conjuntos de arreglos */
    /*let es igual que var pero de un alcance limitado o en bloques, si esta dentro de algo no se puede acceder o imprimir */
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufar"]];
    /*console.table(matrizCodigo) /*esto se usa para ver en inspeccionar */
    /*metodo para volver miniuscula todo lo que el usuario escriba */
    stringEncriptado=stringEncriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        /*el metodo include es para verificar que las letras ingresadas estan en el array - la llave verificada será matrizCodigo[indice][posicion]*/
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            /*replace reemplaza cadena de caracteres por otro*/
            /*en el metodo se pone lo que se quiere sustituir por lo que se sustituirá*/
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
  // Seleccionar el contenido del elemento de texto
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles
  // Copiar el contenido al portapapeles
    document.execCommand('copy');
    // Quitar la selección del texto después de copiarlo
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



/*ctrl k c comenta la selección, u para descomentar */

