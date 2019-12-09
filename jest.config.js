//    '^.+\\.[t|j]sx?$': "<rootDir>/node_modules/babel-jest"
//  transformIgnorePatterns: [
//    '/node_modules/(?!@react-native|react-native-community|react-clone-referenced-element|react-navigation).+\\.js$'
//  ],

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
