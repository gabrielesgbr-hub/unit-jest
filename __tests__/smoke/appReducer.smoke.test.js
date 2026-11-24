// The real reducer of the client is tested (not a copy)
const AppReducer = require('../../../client/src/context/AppReducer.jsx').default
const perfumes = require('../../fixtures/perfumes.json')          
const { crearEstado } = require('../../fixtures/factories')       

describe('Smoke - appReducer', () => {
    let state

    beforeEach(() => {
        state = crearEstado()   
    })

    test('UT-SM-01 Add a new perfume to an empty cart', () => {
        const perfume = { ...perfumes[0], cantidad: 1 }
        const copiaOriginal = structuredClone(state)

        const nuevo = AppReducer(state, { type: 'AGREGAR_AL_PEDIDO', payload: perfume })

        expect(nuevo.perfumesPedido).toHaveLength(1)
        expect(nuevo.perfumesPedido).toContainEqual(perfume)
        expect(state).toEqual(copiaOriginal) 
    })

    test('UT-SM-02 Merge quantity when the perfume is already in the cart', () => {
        state = crearEstado({ perfumesPedido: [{ ...perfumes[0], cantidad: 1 }] })
        const mismoPerfume = { ...perfumes[0], cantidad: 2 }

        const nuevo = AppReducer(state, { type: 'AGREGAR_AL_PEDIDO', payload: mismoPerfume })

        expect(nuevo.perfumesPedido).toHaveLength(1)
        expect(nuevo.perfumesPedido[0].cantidad).toBe(3)
    })

    test('UT-SM-06 Logout clears the admin session', () => {
        state = crearEstado({ adminAutenticado: true, token: 'abc' })

        const nuevo = AppReducer(state, { type: 'LOGOUT_ADMIN' })

        expect(nuevo.adminAutenticado).toBe(false)
        expect(nuevo.token).toBeNull()
    })

})