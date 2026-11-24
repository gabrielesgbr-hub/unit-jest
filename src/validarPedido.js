const MENSAJE_ERROR = 'Llenar todos los campos marcados con *'

function validarPedido(form) {
    const { nombre, apellidos, telefono, metodo, metodo_pago, calle, cp, no, colonia, puntoEntrega } = form

    if (metodo === "Punto_Entrega"){
        const campos = {nombre, apellidos, telefono, puntoEntrega, metodo_pago}
        const vacios = Object.keys(campos).filter(key => campos[key] === "")

        if (vacios.length >0) {
            return { valido: false, error: MENSAJE_ERROR }
        }
        return { valido: true, error: "" }
    } else if (metodo === "Direccion") {
        const campos = {nombre, apellidos, telefono, calle, cp, no, colonia, metodo_pago}
        const vacios = Object.keys(campos).filter(key => campos[key] === "")

        if (vacios.length >0) {
            return { valido: false, error: MENSAJE_ERROR }
        }
        return { valido: true, error: "" }
    } else if (metodo === "") {
        return { valido: false, error: MENSAJE_ERROR }
    }

    return { valido: false, error: "" }
}

function validarTelefono(v) {
    return /^[0-9]{10}$/.test(v)
}

module.exports = { validarPedido, validarTelefono }