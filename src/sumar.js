/* Programa para sumar dos numeros en JS */

import { encabezado, linea, leerNumero } from "./utilidades.js";

const main = () => {
    // definir variables
    let numero1 = 9
    let numero2 = 8
    let numero3 = 0
    let numero4 = 0
    let suma = 0

    encabezado("sumar numeros",36)

    numero1 = leerNumero("Ingresa primer numero")
    numero2 = leerNumero("Ingresa segundo numero")
    numero3 = leerNumero("Ingresa tercer numero")
    numero4 = leerNumero("Ingresa cuarto numero")


    suma = calculoSuma(numero1, numero2, numero3, numero4)

    linea(36)
    console.log("la suma es", suma)
    linea(36)

}

// Spread Operator (Operador de propagacion)

const calculoSuma = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0)
}


main()