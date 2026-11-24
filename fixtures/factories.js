function crearEstado(overrides = {}) {
    return {
        perfumes: [],
        perfumesPedido: [],
        pedidos: [],
        loading: true,
        error: null,
        adminAutenticado: false,
        token: null,
        ...overrides
    }
}

let cont = 0
function crearPerfume(overrides = {}) {
    cont++
    return {
        _id: `perfume-${cont}`,
        nombre: `Perfume ${cont}`,
        sku: `TST-${cont}`,
        marca: 'Armaf',
        categoria: 'Caballero',
        descripcion: 'Fragancia de prueba',
        precio: 100,
        stock: 10,
        disponible: true,
        destacado: false,
        ...overrides
    }
}

module.exports = { crearEstado, crearPerfume }