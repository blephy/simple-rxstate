/* eslint-disable no-template-curly-in-string -- this is required */
module.exports = {
  extends: 'semantic-release-npm-github-publish',
  plugins: [
    '@semantic-release/git',
    {
      assets: ['package.json', 'README.md', 'CHANGELOG.md', 'LICENSE', 'lib/**/*'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    },
  ],
};
/* eslint-enable no-template-curly-in-string -- this is required */
