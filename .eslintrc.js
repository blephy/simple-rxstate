module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true,
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
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:rxjs/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
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
  rules: {
    /**
     * eslint
     */
    'comma-dangle': ['error', 'always-multiline'],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-return-await': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.type=FunctionExpression]',
        message: 'IIFEs are not allowed.',
      },
      {
        selector: 'CallExpression[callee.type=ArrowFunctionExpression]',
        message: 'IIFEs are not allowed.',
      },
      {
        selector: 'MethodDefinition[kind=get]',
        message: 'Create a proper getter method.',
      },
      {
        selector: 'MethodDefinition[kind=set]',
        message: 'Create a proper setter method.',
      },
    ],
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    /**
     * eslint plugin comments
     */
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/require-description': 'error',
    /**
     * eslint plugin import
     */
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'off',
    'import/exports-last': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/{__mocks__,__tests__}/**/*.[jt]s?(x)',
          '**/?(*.)+(spec|test).[jt]s?(x)',
          '**/setupTests.[jt]s',
          '**/webpack.*.[jt]s',
          '**/*.stories.ts?(x)',
          '*.?(c)js',
        ],
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'error',
    'import/no-unassigned-import': 'error',
    // explicitly defined to be able to define strict file name in the future
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        css: 'always',
        json: 'always',
        less: 'always',
        scss: 'always',
        svg: 'always',
        png: 'always',
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          ['sibling', 'index'],
          'type',
          'object',
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],
    /**
     * typescript eslint
     */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: false,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: true,
        functions: true,
        classes: true,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: false,
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: true,
        allowNumber: true,
        allowNullableString: true,
        allowNullableNumber: true,
        allowNullableBoolean: true,
        allowNullableObject: true,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/no-shadow': ['error', { ignoreFunctionTypeParameterNameValueShadow: true }],
    '@typescript-eslint/return-await': ['error', 'always'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
  },
  overrides: [
    {
      files: ['./**/{__mocks__,__tests__}/**/*.ts', './**/?(*.)+(spec|test).ts'],
      extends: ['plugin:jest/all', 'plugin:jest-formatting/strict'],
      env: {
        'jest/globals': true,
      },
      rules: {
        '@typescript-eslint/dot-notation': [
          'error',
          { allowPrivateClassPropertyAccess: true, allowProtectedClassPropertyAccess: true },
        ],
        '@typescript-eslint/unbound-method': 'off',
        'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
        'jest/no-hooks': 'off',
      },
    },
    {
      files: ['./**/*.ts'],
      rules: {
        'import/namespace': 'off',
      },
    },
    {
      files: ['./**/*.?(c)js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
