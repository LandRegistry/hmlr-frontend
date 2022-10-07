# Releasing

Before creating a release:

1. Pick a new version number according to [SemVer](https://semver.org/)
1. Update [CHANGELOG.md](../CHANGELOG.md)
1. Update version in `package.json`
1. Switch to the correct version of node with `nvm use`
1. Run `npm install` (this ensures `package-lock.json` is up-to-date)
1. Commit all changes and merge to `main` with a pull request
1. Tag your commit with `git tag v1.0.0` (ensure leading `v` and change version number as necessary)
1. Push your tags with `git push origin --tags`

Once all your tags have been pushed and code merged to `main`, [create a new release on GitHub](https://github.com/LandRegistry/hmlr-frontend/releases/new) with the new tag you just pushed.
