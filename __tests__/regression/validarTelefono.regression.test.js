const { validarTelefono } = require('../../src/validarPedido')

describe('Regression - validarTelefono', () => {

    test('UT-RG-09 Phone with letters', () => {
        const telefono = 'abc1234567'

        const resultado = validarTelefono(telefono)

        expect(resultado).toBe(false)
    })
})