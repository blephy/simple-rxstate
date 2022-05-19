module.exports = {
  'package.json': ['yarn format:packagejson', 'yarn lint:packagejson', 'yarn check:packagejson'],
  '**/*.ts': () => ['tsc -p tsconfig.json --noEmit', 'jest -o'],
  '**/*.{ts,js}': (filenames) => `eslint ${filenames.join(' ')} --fix --cache`,
  '*': (filenames) => `prettier --ignore-unknown --write ${filenames.join(' ')}`,
  '**/*.md': (filenames) => `markdownlint-cli2-fix ${filenames.join(' ')}`,
};
