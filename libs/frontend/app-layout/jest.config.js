module.exports = {
    name: 'frontend-app-layout',
    preset: '../../../jest.config.js',
    coverageDirectory: '../../../coverage/libs/frontend/app-layout',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
