const filtrarPerfumes = require('../../src/filtrarPerfumes')
const perfumes = require('../../fixtures/perfumes.json')   // F-PERFUMES (static fixture)

describe('Smoke - filtrarPerfumes', () => {

    test('UT-SM-05 Search with no matches', () => {
        const query = 'zzz'
        const categorias = []
        const marcas = []

        const resultado = filtrarPerfumes(perfumes, query, categorias, marcas)

        expect(resultado).toEqual([])
        expect(resultado).toHaveLength(0)
    })

})