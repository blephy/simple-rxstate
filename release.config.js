/* eslint-disable no-template-curly-in-string -- this is required */
module.exports = {
  extends: 'semantic-release-npm-github-publish',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            type: 'build',
            release: 'patch',
          },
          {
            type: 'ci',
            release: 'patch',
          },
          {
            type: 'chore',
            release: 'patch',
          },
          {
            type: 'docs',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            type: 'style',
            release: 'patch',
          },
          {
            type: 'test',
            release: 'patch',
          },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'README.md', 'CHANGELOG.md', 'LICENSE', 'lib/**/*'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};
/* eslint-enable no-template-curly-in-string -- this is required */
