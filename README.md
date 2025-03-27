<img src="./src/hmlr/assets/images/hmlr-logo-grey.svg" alt="HM Land Registry logo" title="HM Land Registry" width="120" />

# HM Land Registry Frontend

[![Latest release](https://img.shields.io/github/v/release/LandRegistry/hmlr-frontend?style=flat-square&logo=github&logoColor=white&sort=semver)](https://github.com/LandRegistry/hmlr-frontend/releases)
[![NPM version](https://img.shields.io/npm/v/@hmlr/frontend?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/@hmlr/frontend)
[![GOV.UK Frontend version](https://img.shields.io/npm/dependency-version/@hmlr/frontend/govuk-frontend?style=flat-square)](https://www.npmjs.com/package/govuk-frontend)
[![Node version](https://img.shields.io/node/v-lts/@hmlr/frontend?style=flat-square&logo=nodedotjs&logoColor=white)](https://github.com/LandRegistry/hmlr-frontend/blob/main/.nvmrc)
[![Licence](https://img.shields.io/github/license/LandRegistry/hmlr-frontend?style=flat-square)](https://github.com/LandRegistry/hmlr-frontend/blob/main/LICENCE)

HM Land Registry Frontend contains the code you need to start building a user interface for HM Land Registry platforms and services.

See live examples of HM Land Registry Frontend components, and guidance on when to use them in your service in the [HM Land Registry Design System](https://github.com/LandRegistry/hmlr-design-system).

## Quickstart

```sh
# Node version (optional)
nvm use

# Install dependencies
npm install

# Start Storybook
npm start
```

This package includes all the frontend styles from GOV.UK in addition to HM Land Registry styles.

The generated CSS can be used as a direct replacement for the GOV.UK stylesheet which ensures that the HM Land Registry styles will be build on top of a complient version of the GOV.UK Frontend styles.

## Releasing

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

## Relationship to other projects
