/* eslint-disable @typescript-eslint/explicit-function-return-type -- todo please update the config */
module.exports = {
  'package.json': ['yarn format:packagejson', 'yarn lint:packagejson'],
  '**/*.ts': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{ts,js}': (filenames) => `eslint ${filenames.join(' ')} --fix --cache`,
  '*': (filenames) => `prettier --ignore-unknown --write ${filenames.join(' ')}`,
  '**/*.md': (filenames) => `markdownlint-cli2-fix ${filenames.join(' ')}`,
};
/* eslint-enable @typescript-eslint/explicit-function-return-type -- todo please update the config */
