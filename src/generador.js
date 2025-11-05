// generador de tabalas de multiplicar 

import {encabezado, linea, leerNumero } from "./utilidades.js";

const main = () => {
    //definir variables
    
    let numero = 0
    let nroInicio = 0
    let nroFinal = 0

    encabezado("generador de tabla de multiplicar", 50)
    numero = leerNumero("Ingresa tu numero")
    encabezado(`tabla de multiplicar del ${numero}`, 50)
    generarTabla(numero)
    encabezado("generar rango de tablas", 50)
    nroInicio = leerNumero("Ingresa numero de inicio")
    nroFinal = leerNumero("Ingresa el numero final")
    encabezado(`tablas de multiplicar del ${nroInicio} al ${nroFinal}`, 50)
    generarRangoTablas(nroInicio, nroFinal)
}

const generarRangoTablas = (nroInicio = 0, nroFinal) => {
    
    for (nroInicio; nroInicio <= nroFinal; nroInicio++) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${nroInicio} x ${i} = ${Producto(nroInicio, i)}`)

        
    }
    linea(50)
}
}


const generarTabla = (numero = 0) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${Producto(numero, i)}`)
        
    }
}

const Producto = (a, b,) => a * b

main()