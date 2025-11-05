/* Juego de adivina el numero */

import * as util from "./utilidades.js";

const main = () => {
    //Definir variables
    let secreto = Math.floor(Math.random() * 30) + 1  
    let numero = 0
    let alias = ""

    //console.log({secreto})
    util.encabezado("juego de adivinar el numero", 50)
    alias = util.leerTexto("Ingresar tu alias", "alias")
    console.log({alias})
    //console.log({alias})
    util.linea(50)
    jugar(secreto, numero, alias)


}

const jugar = (secreto = 0, numero = 0, alias = "") => {
    let msj = ""
    let intentos = 1
    while (numero != secreto) {
        if (intentos == 4) {
            msj = "FAIL"
            util.linea(50)
            console.log(`${alias.toUpperCase()} ${msj} ${secreto}`)
            util.linea(50)
            break 
        }

        numero = util.leerNumero("Ingresa tu numero")
        intentos++

        if (numero > secreto) {
            msj = "tu numero es mayor que el secreto"
            console.log(`${alias.toUpperCase()} ${msj}`)
        } else if (numero < secreto){
            msj = "tu numero es menor que el secreto"
            console.log(`${alias.toUpperCase()} ${msj}`)
        } else {
            msj = "Felicidades YOU WIN"
            util.linea(50)
            console.log(`${alias.toUpperCase()} ${msj}`)
            util.linea(50)
        }
    }
}




main()     