module.exports = {
    name: 'api-shared-users',
    preset: '../../../../jest.config.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]sx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
    coverageDirectory: '../../../../coverage/libs/api/shared/users',
    globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
};
