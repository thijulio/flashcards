module.exports = {
    name: 'shared-left-panel',
    preset: '../../../../jest.config.js',
    coverageDirectory: '../../../../coverage/libs/frontend/shared/left-panel',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
