module.exports = {
    name: 'register',
    preset: '../../../jest.config.js',
    coverageDirectory: '../../../coverage/libs/frontend/register',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
