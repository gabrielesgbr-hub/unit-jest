// The real reducer of the client is tested (not a copy)
const AppReducer = require('../../../client/src/context/AppReducer.jsx').default
const { crearEstado } = require('../../fixtures/factories')

describe('Regression - appReducer (edge cases)', () => {
    let state

    beforeEach(() => {
        state = crearEstado()
    })

    test('UT-RG-10 Unknown reducer action', () => {

        const nuevo = AppReducer(state, { type: 'NOPE' })

        expect(nuevo).not.toBeUndefined()
        expect(nuevo).toBe(state)
    })

    test('UT-RG-15 Empty an already empty cart', () => {
        state = crearEstado({ perfumesPedido: [] })

        const nuevo = AppReducer(state, { type: 'VACIAR_PEDIDO' })

        expect(nuevo.perfumesPedido).toEqual([])
    })
})