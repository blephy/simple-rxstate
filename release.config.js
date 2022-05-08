/* eslint-disable no-template-curly-in-string -- this is required */
module.exports = {
  extends: 'semantic-release-npm-github-publish',
  plugins: [
    '@semantic-release/git',
    {
      assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
      message: 'release(version): Release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
  ],
};
/* eslint-enable no-template-curly-in-string -- this is required */
