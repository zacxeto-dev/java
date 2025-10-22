/* Programa para sumar dos numeros en JS */
import { encabezado, linea } from "./utilidades.js";

const main = () => {
    // definir varibales
    let numero1 = 9
    let numero2 = 8
    let suma = 0

    encabezado("sumar numeros",36)


    suma = numero1 + numero2

    console.log("la suma es", suma)
    linea(36)

}


main()