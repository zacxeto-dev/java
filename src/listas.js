/* Ejemplo de uso de Arrays en JS */

import { encabezado, linea } from "./utilidades.js";

const main = () => {
    //Definir un Arrays de edades

    const edades = [12,20,19,18,21,19,27,40,23,11,10]

    linea(50)
    console.log(`Cantidad de Edades es ${edades.length}`)
    linea(50)
    console.log(`La tercera Edad es ${edades[2]}`)
    linea(50)
    console.log(`La Ultima Edad es ${edades.at(-1)}`)
    linea(50)
    edades.push(33)
    console.log(`la Ultima Edad es ahoara : ${edades.at(-1)}`)
    
    encabezado("Leer la lista edades (for of)", 50)
    for (const edad of edades) {
        console.log(`La edad es ${edad}`)
    }

    encabezado("Leer la lista edades (forEach)", 50)
    edades.forEach((edad) => console.log(`La edad es ${edad}`))

    encabezado("Edades Ordenadas ascendentes", 50)
    edades
    .sort()
    .forEach((edad) => console.log(`La edad es ${edad}`));

    encabezado("Edades Ordenadas decendentes", 50)
    edades
    .sort((a, b) => b - a)
    .forEach((edad) => console.log(`edad es ${edad}`));

    encabezado("Mayores de edad", 50)
    edades
    .filter((edad) => edad >= 18)
    .forEach((edad) => console.log(`la edad es ${edad}`));

    encabezado("Menores de edad", 50)
    edades
    .filter((edad) => edad < 18)
    .forEach((edad) => console.log(`la edad es ${edad}`));

    encabezado("Edades únicas", 50)
    const edadesUnicas = new Set(edades)
    edadesUnicas.forEach((edad) => console.log(`la edad es ${edad}`))

    

}



main()