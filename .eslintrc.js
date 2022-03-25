module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.eslint.json',
      },
    },
  },
  plugins: ['unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    projectFolderIgnoreList: [
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
  },
};
