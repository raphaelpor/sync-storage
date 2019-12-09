module.exports = {
  preset: 'react-native',
  "verbose": true,
  transform: {
    '^.+\\.t|j]sx?$': require.resolve('react-native/jest/preprocessor.js')
  },
  clearMocks: true,
  coverageDirectory: './coverage/',
  coverageReporters: [
    'lcov',
    'text'
  ],
  transformIgnorePatterns: [ 'node_modules/(?!(sync-storage|react-native)/)' ],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  collectCoverageFrom: [
    '**/*.{js}'
  ]
};
