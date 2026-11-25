const calcularTotal = require('../../src/calcularTotal')

describe('Regression - calcularTotal', () => {

    test('UT-RG-05 Total with decimal prices', () => {
        const perfumesPedido = [{ nombre: 'Perfume A', precio: 349.99, cantidad: 3 }]

        const total = calcularTotal(perfumesPedido)

        expect(total).toBeCloseTo(1049.97, 2)
    })

    test('UT-RG-11 Total with a line without price', () => {
        const perfumesPedido = [
            { nombre: 'Perfume A', precio: 100, cantidad: 1 },
            { nombre: 'Perfume B', cantidad: 2 }        
        ]

        const total = calcularTotal(perfumesPedido)

        expect(Number.isNaN(total)).toBe(false)
    })

    test('UT-RG-16 Total of an empty cart', () => {
        const perfumesPedido = []

        const total = calcularTotal(perfumesPedido)

        expect(total).toBe(0)
    })
})