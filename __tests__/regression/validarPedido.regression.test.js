const { validarPedido, validarTelefono } = require('../../src/validarPedido')

const MENSAJE_ERROR = 'Llenar todos los campos marcados con *'

describe('Regression - validarPedido', () => {

    test('UT-RG-06 Address method with empty postal code', () => {
        const form = {
            nombre: 'Pepto',
            apellidos: 'Bismol',
            telefono: '9991234567',
            metodo: 'Direccion',
            metodo_pago: 'Efectivo',
            calle: 'Calle 60',
            no: '67',
            cp: '',
            colonia: 'Centro',
            puntoEntrega: ''
        }

        const resultado = validarPedido(form)

        expect(resultado.valido).toBe(false)
        expect(resultado.error).toBe(MENSAJE_ERROR)
    })

    test('UT-RG-07 No delivery method selected', () => {
        const form = {
            nombre: 'Lothar',
            apellidos: 'Iturbide',
            telefono: '9991234567',
            metodo: '',
            metodo_pago: 'Efectivo',
            calle: 'Calle 55A',
            no: '2',
            cp: '97000',
            colonia: 'Centro',
            puntoEntrega: 'Plaza Altabrisa'
        }

        const resultado = validarPedido(form)

        expect(resultado.valido).toBe(false)
        expect(resultado.error).toBe(MENSAJE_ERROR)
    })

    test('UT-RG-08 Delivery point method without a point', () => {

        const form = {
            nombre: 'Saul',
            apellidos: 'Hernandez',
            telefono: '9991234567',
            metodo: 'Punto_Entrega',
            metodo_pago: 'Efectivo',
            puntoEntrega: '',
            calle: '', no: '', cp: '', colonia: ''
        }

        const resultado = validarPedido(form)

        expect(resultado.valido).toBe(false)
        expect(resultado.error).toBe(MENSAJE_ERROR)
    })

    test('UT-RG-12 Phone with exactly 10 digits', () => {
        const telefono = '9991234567'

        const resultado = validarTelefono(telefono)

        expect(resultado).toBe(true)
    })

    test('UT-RG-13 Phone with 11 digits', () => {
        const telefono = '99912345678'

        const resultado = validarTelefono(telefono)

        expect(resultado).toBe(false)
    })
})