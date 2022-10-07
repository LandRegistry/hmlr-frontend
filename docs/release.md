# Manually create a new release

**N.B. Releases should be created by creating a release in GitHub which will use the action defined in `.github/workflows/npm-publish.yml`.**

Before creating a release:

1. Pick a new version number according to [SemVer](https://semver.org/)
1. Update [CHANGELOG.md](../CHANGELOG.md)
1. Update version in `package.json`
1. Switch to the correct version of node with `nvm use`
1. Run `npm install` (this ensures `package-lock.json` is up-to-date)
