module.exports = {
  coveragePathIgnorePatterns: [],
  setupFiles: ['<rootDir>/jest.setup.js'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/build/",
  ],
  modulePathIgnorePatterns: ['build/'],
  resetMocks: true,
  restoreMocks: true,
  clearMocks: true
};
