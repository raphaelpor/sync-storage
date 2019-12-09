module.exports = {
  preset: 'react-native',
  "verbose": true,
  transform: {
    '^.+\\.t|j]sx?$': require.resolve('react-native/jest/preprocessor.js')
  },
  testMatch: [
    '**/src/**/*.test.js'
  ],
  modulePathIgnorePatterns: [
    '/DevApp/'
  ],
  clearMocks: true,
  coverageDirectory: './coverage/',
  coverageReporters: [
    'lcov',
    'text'
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/DevApp/',
    '/coverage/'
  ],
  collectCoverageFrom: [
    '**/*.{js}'
  ]
};
