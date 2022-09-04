const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const bntCopy = document.querySelector (".copiar");
//const btnEncriptar = document.querySelector(".encriptar");
//const btnDesencriptar = document.querySelector(".desencriptar");
//bntCopy.style.display ="none";

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.stylebackgroundImage ="none"
    inputTexto.value = ""
}

function encriptar (stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for( let i = 0; i < matrizCodigo.length; i++){
        
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar (inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""
}

function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

function copiar(){
    mensaje.select ()
    navigator.clipboard.writeText (mensaje.value)
}