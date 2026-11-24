function filtrarPerfumes(perfumesDisponibles, query, categorias, marcas) {
    let filtrados = perfumesDisponibles.filter(item => item.nombre.toLowerCase().includes(query.toLowerCase()) || item.descripcion.toLowerCase().includes(query.toLowerCase()))

    if(categorias.length > 0){
        filtrados = filtrados.filter(item => categorias.includes(item.categoria))
    }

    if(marcas.length > 0){
        filtrados = filtrados.filter(item => marcas.includes(item.marca))
    }

    return filtrados
}

module.exports = filtrarPerfumes