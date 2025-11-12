/* Array de ciudades ingresada por teclado */

import * as util from "./utilidades.js";

const main = () => {
    // Definir variables

    const ciudades = []
    const avisos = [
        "primera",
        "segunda",
        "tercera",
        "cuarta",
        "quinta",
        "sexta",
    ]

    let ciudad = ""
    const nroCiudades = 6

    util.encabezado("ingreso de Ciudades", 46)
    for (let i = 0; i < nroCiudades; i++) {
        ciudad = util.leerTexto(`ingresa ${avisos[i]} Ciudad`, "Ciudad")
        ciudades.push(ciudad)

    }

    verCiudades(ciudades, "Mostrar ciudades", 46)

    ciudades.sort()
    verCiudades(ciudades,"Ciudades ordenadas ascendentes",46)
    
    
    ciudades.sort((a, b) => b.localeCompare(a))
    verCiudades(ciudades,"Ciudades ordennadas descendentes",46)
    

}

const verCiudades = (ciudades = [], titulo = "", largo = 0) => {
    util.encabezado(titulo, largo)
    ciudades.forEach((ciudad) => console.log(`la ciudad es ${ciudad.toUpperCase()}`))
}


main()