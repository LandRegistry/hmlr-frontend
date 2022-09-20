# Manually create a new release

**N.B. Releases should be created by creating a release in GitHub which will use the action defined in `.github/workflows/npm-publish.yml`.**

Before creating a release:

1. Ensure you are working on the `main` branch - releases should only be created from `main`
1. Pick a new version number according to [SemVer](https://semver.org/)
1. Update [CHANGELOG.md](../CHANGELOG.md)
1. Update version in `package.json`
1. Run `npm install` (this ensures `package-lock.json` is up-to-date)

```sh
# Test, build, package and publish a new release
./bin/publish-release.sh
```

`publish-release.sh` performs the following actions:

1. Check the version of Node used (`nvm use` to set it correctly)
1. Run the tests
1. Build the distribution package
1. Check existing git tags to see if the version in `package.json` already exists
1. Check the version in `package-lock.json` matches the version in `package.json` (need to run `npm install`)
1. Push the new version to npm
1. Create a new git tag and push to GitHub
