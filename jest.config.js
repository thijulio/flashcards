module.exports = {
    testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
    transform: {
        '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!lodash-es/*)'],
    resolver: '@nrwl/jest/plugins/resolver',
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageReporters: ['html'],
    passWithNoTests: true,
};
