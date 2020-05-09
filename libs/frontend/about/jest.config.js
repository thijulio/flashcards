module.exports = {
    name: 'about',
    preset: '../../../jest.config.js',
    coverageDirectory: '../../../coverage/libs/frontend/about',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};