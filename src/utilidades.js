/* Funciones de Utilidad */

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

export {linea, encabezado}