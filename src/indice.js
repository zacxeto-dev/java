/* Calculadora Indice de Masa Corporal */

import * as util from "./utilidades.js";

const main = () => {
    //Definir variables
    let peso = 0
    let altura = 0
    let imc = 0

    util.encabezado("calculadora indice de masa corporal", 50)
    peso = util.leerNumero("ingresa tu peso (kg)")
    altura = util.leerNumero("ingresa tu altura (mts)")
    imc = calculoIMC(peso, altura)
    
    util.linea(50)
    let msj = "El indice de masa corporal es"
    console.log(`${msj} ${imc.toFixed(2)} (${statusIMC(imc).toUpperCase()})`)
    util.linea(50)
}

const calculoIMC = (peso = 0, altura = 0) => {
    return peso / Math.pow(altura, 2)
}

const statusIMC = (imc = 0) => {
   if (imc < 18.5) {
    return "bajo peso"
   } else if (imc >= 18.5 && imc < 24.99){
    return "peso normal"
   }else if (imc >= 24.99 && imc < 29.99) {
    return "sobrepeso"
   }else {
    return "obesidad"
   }
}

main()