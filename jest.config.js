module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['ts', 'js', 'node', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.{spec,test}.ts'],
  coverageDirectory: '<rootDir>/reports/jest',
  coverageReporters: ['text', 'html', 'lcov', 'json'],
  collectCoverageFrom: ['<rootDir>/src/**/*', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        ancestorSeparator: ' › ',
        classNameTemplate: '{classname}',
        outputDirectory: './reports/junit',
        outputName: 'simple-rxstate-jest-junit.xml',
        suiteName: 'jest simple rxstate tests',
        titleTemplate: '{title}',
        uniqueOutputName: 'false',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  displayName: {
    name: 'simple-rxstate',
    color: 'magenta',
  },
};
