module.exports = {
    name: 'frontend-my-account',
    preset: '../../../jest.config.js',
    coverageDirectory: '../../../coverage/libs/frontend/my-account',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
