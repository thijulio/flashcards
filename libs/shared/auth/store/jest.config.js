module.exports = {
    name: 'shared-auth-store',
    preset: '../../../../jest.config.js',
    coverageDirectory: '../../../../coverage/libs/shared/auth/store',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
