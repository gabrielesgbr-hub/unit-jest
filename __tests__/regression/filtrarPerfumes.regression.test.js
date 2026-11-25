const filtrarPerfumes = require('../../src/filtrarPerfumes')
const perfumes = require('../../fixtures/perfumes.json')   
const { crearPerfume } = require('../../fixtures/factories')

describe('Regression - filtrarPerfumes', () => {

    test('UT-RG-04 Filter by category', () => {
        const totalDama = perfumes.filter(p => p.categoria === 'Dama').length

        const resultado = filtrarPerfumes(perfumes, '', ['Dama'], [])

        expect(resultado.every(p => p.categoria === 'Dama')).toBe(true)
        expect(resultado).toHaveLength(totalDama)
    })

    test('UT-RG-14 Search ignores upper and lower case', () => {
        const oud = crearPerfume({ nombre: 'Oud Royal' })
        const lista = [oud, crearPerfume(), crearPerfume()]

        const resultado = filtrarPerfumes(lista, 'OUD', [], [])

        expect(resultado).toContainEqual(oud)
    })
})