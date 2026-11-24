function calcularTotal(perfumesPedido) {
    let total = 0
    perfumesPedido.forEach(perfume => {
        total += (perfume.precio * perfume.cantidad)
    })
    return total
}

module.exports = calcularTotal