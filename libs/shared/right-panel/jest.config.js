module.exports = {
    name: 'shared-right-panel',
    preset: '../../../jest.config.js',
    coverageDirectory: '../../../coverage/libs/shared/right-panel',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
