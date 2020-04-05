module.exports = {
  name: 'shared-navigation',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/navigation',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
