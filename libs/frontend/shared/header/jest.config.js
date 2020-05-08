module.exports = {
    name: 'shared-header',
    preset: '../../../../jest.config.js',
    coverageDirectory: '../../../../coverage/libs/frontend/shared/header',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
