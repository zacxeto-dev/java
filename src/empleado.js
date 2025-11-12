/* datos de empleado */ 

import {  encabezado, linea, capital } from "./utilidades.js";

const main = () => {
    // definir objeto

    const empleado = {
        "cedula" : "32.460.448",
        "nombre" : "Roswil",
        "apellido" : "Berro",
        "edad" : 18,
        "sueldo" : 70000.12
    }

    linea(50)
    console.log(`Nombre Del Empleado es ${capital(empleado["nombre"])}`)
    linea(50)
    console.log(`Apellido Del Empleado es ${capital(empleado["apellido"])}`)
    linea(50)
    
    encabezado("Datos del empleado",46)
    for (const key in empleado) {
        console.log(`${key.toUpperCase()}: ${empleado[key]}`)
        
        
    }
    linea(46)


}

main()