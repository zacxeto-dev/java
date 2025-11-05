/* Programa de Registro de alumnos */
import {encabezado, linea, capital} from "./utilidades.js";

const main = () => {
    // Definir variables
    let cedula = "24.022.741"
    let nombre = "carmen"
    let apellido = "lopez"
    let edad = 25
    let altura = 1.67
    let sexo = true // true = Femenino y false = Masculino
    let turno = 2 // 1 = Mañana , 2 = Tarde , 3 = Noche

    verDatos(cedula, nombre, apellido, edad, altura, sexo, turno)
} 

//Parametros Rest
const verDatos = (...datos) => {
    encabezado("datos del alumno", 46)
    console.log(`Cédula: ${datos[0]}`)
    console.log(`Nombre Completo: ${capital(datos[1])} ${capital(datos[2])}`)
    console.log(`Edad: ${datos[3]} años`)
    console.log(`Altura: ${datos[4]} metros`)
    console.log(`Sexo: ${obtenerSexo([5])}`)
    console.log(`Turno: ${ObtenerTurno(datos[6])}`)
    linea(46)
}


const obtenerSexo = (sexo) => {
    if (sexo) {
        return "Femenino"
    } else {
        return "Masculino"
    }
}

const ObtenerTurno = (turno = 0) => {
    switch(turno) {
        case 1: return "Mañana"
        case 2: return "Tarde"
        case 3: return "Noche"
        default: return "No tiene turno"

    }
}





main()