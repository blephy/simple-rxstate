/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
// eslint-disable-next-line unicorn/prevent-abbreviations -- stryker needs stryker.conf.js
module.exports = {
  mutate: ['./src/**/*.ts'],
  ignorePatterns: [
    '**/node_modules/**',
    '**/.github/**',
    '**/.husky/**',
    '**/.circleci/**',
    '**/.yarn/**',
    '**/stats/**',
    '**/docs/**',
    '**/documentations/**',
    '**/reports/**',
    '**/coverage/**',
    '**/build/**',
    '**/dist/**',
    '**/lib/**',
  ],
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress', 'dashboard'],
  htmlReporter: {
    baseDir: 'reports/stryker',
  },
  jsonReporter: {
    fileName: 'reports/stryker/mutation.json',
  },
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  thresholds: { high: 80, low: 60, break: 50 },
};
