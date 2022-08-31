# Creating a new release

1. Update version in `package.json`
1. Run `npm install`
1. Run `./bin/publish-release.sh`

`publish-release.sh` performs the following actions:

1. Check the version of Node used (`nvm use` to set it correctly)
1. Run the tests
1. Build the distribution package
1. Check existing git tags to see if the version in `package.json` already exists
1. Check the version in `package-lock.json` matches the version in `package.json` (need to run `npm install`)
1. Push the new version to npm
1. Create a new git tag and push to GitHub
