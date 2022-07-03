module.exports = {
  'package.json': ['yarn check:packagejson'],
  '**/*.{ts,mts,cts,tsx}': () => ['tsc -p tsconfig.json --noEmit', 'jest -o'],
  '**/*.{ts,mts,cts,tsx,js,mjs,cjs,jsx}': (filenames) =>
    `eslint ${filenames.join(' ')} --fix --cache`,
  '*': (filenames) => `prettier --ignore-unknown --write ${filenames.join(' ')}`,
  '**/*.md': (filenames) => `markdownlint-cli2-fix ${filenames.join(' ')}`,
};
