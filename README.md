# HM Land Registry Frontend

[![NPM version](https://img.shields.io/npm/v/@hmlr/frontend?style=flat-square)](https://www.npmjs.com/package/@hmlr/frontend)
[![GovUK Frontend version](https://img.shields.io/npm/dependency-version/@hmlr/frontend/govuk-frontend?style=flat-square)](https://www.npmjs.com/package/govuk-frontend)

> 🛑 PRE-ALPHA: Not ready for production use 🛑

```sh
# Setup
nvm use
npm install

# To develop
npm start

# Test
npm run test
```

The GovUK frontend styles don't need to be included as a peer dependency alongside this as they are bundled in with the HM Land Registry styles. This way we can ensure that we are using a compatible version of their frontend.

## Release

1. Update version in `package.json`
1. Run `npm install`
1. Run `./bin/publish-release.sh`

`publish-release.sh` performs the following actions:

1. Run the tests
1. Build the distribution package
1. Check the version of Node used (`nvm use` to set it correctly)
1. Check existing git tags to see if the version in `package.json` already exists
1. Check the version in `package-lock.json` matches the version in `package.json` (need to run `npm install`)
1. Push the new version to npm
1. Create a new git tag and push to GitHub
