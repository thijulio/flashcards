module.exports = {
    name: 'api-shared-auth',
    preset: '../../../../jest.config.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]sx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
    coverageDirectory: '../../../../coverage/libs/api/shared/auth',
};
