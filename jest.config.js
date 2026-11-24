const path = require('path')

module.exports = {
    rootDir: '..',
    roots: ['<rootDir>/unit-jest'],
    transform: {
        '\\.[jt]sx?$': ['babel-jest', { configFile: path.join(__dirname, 'babel.config.js') }]
    },
    coverageProvider: 'v8',
    moduleFileExtensions: ['js', 'jsx', 'json'],
    collectCoverageFrom: [
        '<rootDir>/unit-jest/src/**/*.js',
        '<rootDir>/client/src/context/AppReducer.jsx'
    ]
}