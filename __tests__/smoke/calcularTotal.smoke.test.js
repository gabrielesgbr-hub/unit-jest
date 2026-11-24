const calcularTotal = require('../../src/calcularTotal')

describe('Smoke - calcularTotal', () => {

    test('UT-SM-03 Total of a cart with two lines', () => {
        const perfumesPedido = [
            { nombre: 'Perfume A', precio: 100, cantidad: 2 },
            { nombre: 'Perfume B', precio: 250.5, cantidad: 1 }
        ]

        const total = calcularTotal(perfumesPedido)
        
        expect(total).toBe(450.5)
    })
})