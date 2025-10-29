/* Funciones de Utilidad */
import PromptSync from "prompt-sync";

const prompt = PromptSync()

const centrar = (texto = "", largo = 0) => {
    let relleno =(largo - texto.length) / 2
    let textoCentrado = " ".repeat(relleno) + texto
    return textoCentrado
}

const linea = (largo = 0) => {
    console.log("═" .repeat(largo))
}

const encabezado = (titulo = " ", largo = 0) => {
    linea(largo)
    console.log(centrar(titulo.toUpperCase(),largo))
    linea(largo)
}

const leerNumero = (msj = "") => { 
    let numero = 0
    while (true) {
        
        numero = Number(prompt(msj + ": "))
        if (!Number.isNaN(numero) && Number.isFinite(numero)) {
            return numero
        } else { 
            console.error("Debe escribir un numero...")
        }
    }
}


export {linea, encabezado, leerNumero}