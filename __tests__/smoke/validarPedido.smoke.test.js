const { validarPedido } = require('../../src/validarPedido')

describe('Smoke - validarPedido', () => {

    test('UT-SM-04 Checkout rejects a missing name', () => {
        const form = {
            nombre: '',
            apellidos: 'Pérez',
            telefono: '9991234567',
            metodo: 'Punto_Entrega',
            metodo_pago: 'Efectivo',
            puntoEntrega: 'Plaza Altabrisa',
            calle: '', cp: '', no: '', colonia: ''
        }

        const resultado = validarPedido(form)

        expect(resultado.valido).toBe(false)
        expect(resultado.error).toBe('Llenar todos los campos marcados con *')
    })

})