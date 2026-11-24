const AppReducer = require('../../../client/src/context/AppReducer.jsx').default
const { crearEstado, crearPerfume } = require('../../fixtures/factories') 

describe('Regression - appReducer', () => {
    let state

    beforeEach(() => {
        state = crearEstado() 
    })

    test('UT-RG-01 ADD_PERFUME appends a perfume', () => {
        state = crearEstado({ perfumes: [crearPerfume(), crearPerfume()] })
        const nuevoPerfume = crearPerfume({ nombre: 'Perfume Nuevo' })

        const nuevo = AppReducer(state, { type: 'ADD_PERFUME', payload: nuevoPerfume })

        expect(nuevo.perfumes).toHaveLength(3)
        expect(nuevo.perfumes[2]).toEqual(nuevoPerfume)
        expect(nuevo.loading).toBe(false)
    })

    test('UT-RG-02 UPDATE_PERFUME replaces only the matching id', () => {
        const perfumeA = crearPerfume({ precio: 100 })
        const perfumeB = crearPerfume({ precio: 200 })
        state = crearEstado({ perfumes: [perfumeA, perfumeB] })
        const perfumeBActualizado = { ...perfumeB, precio: 300 }

        const nuevo = AppReducer(state, { type: 'UPDATE_PERFUME', payload: perfumeBActualizado })

        expect(nuevo.perfumes[1].precio).toBe(300)
        expect(nuevo.perfumes[0]).toEqual(perfumeA)
    })

    test('UT-RG-03 ACTUALIZAR_CANTIDAD changes one cart line', () => {
        const perfumeA = crearPerfume()
        const perfumeB = crearPerfume()
        state = crearEstado({
            perfumesPedido: [
                { ...perfumeA, cantidad: 1 },
                { ...perfumeB, cantidad: 1 }
            ]
        })
        const nuevo = AppReducer(state, { type: 'ACTUALIZAR_CANTIDAD', payload: { id: perfumeA._id, cantidad: 4 } })

        expect(nuevo.perfumesPedido[0].cantidad).toBe(4)
        expect(nuevo.perfumesPedido[1].cantidad).toBe(1)
    })
})