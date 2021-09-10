// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: 'ts-jest',

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: ['/node_modules/', '__fixtures__'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  roots: ['<rootDir>/__tests__'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@errors/(.*)$': '<rootDir>/src/errors/$1',
    '^@plugins/(.*)$': '<rootDir>/src/plugins/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
