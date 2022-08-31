#!/bin/sh
set -e

if [ $(git diff --quiet HEAD) ]; then
    echo " "
    echo "No uncommited changes"
else
    echo " "
    echo "Uncommited changes detected - commit all changes before publishing"
    exit 0
fi

source ./bin/build-release.sh
source ./bin/generate-npm-tag.sh

# Check npm tag looks as expected
# https://npm.github.io/publishing-pkgs-docs/updating/using-tags.html#publishing-with-tags
# echo " "
# echo "This will publish the package with the following npm tag:"
# echo $NPM_TAG
# echo " "

# read -r -p "Does this look correct? [y/N] " continue_prompt

# if [[ $continue_prompt != 'y' ]]; then
#     read -r -p "What should the npm tag be: " NPM_TAG
# fi

echo " "
echo "🟢  Starting a release..."
echo "This will:"
echo "- publish the package to npm if it has not been published already"
echo "- tag the package on npm with '$NPM_TAG'"
echo "- check that there is not already a Github tag published"
echo "- create a new v$CURRENT_VERSION tag"
echo "- push the tag to remote origin"
echo " "

read -r -p "Do you want to continue? [y/N] " continue_prompt

if [[ $continue_prompt != 'y' ]]; then
    echo "Cancelling release, if this was a mistake, try again and use 'y' to continue."
    exit 1
fi

echo " "
echo "📦  Publishing package..."

cd package
[ $NPM_TAG = "latest" ] && npm publish || npm publish --tag $NPM_TAG
echo " "
echo "📫  Package published!"
cd ..

ALL_PACKAGE_VERSION=$(node -p "require('./package/package.json').version")
TAG="v$ALL_PACKAGE_VERSION"

if [ $(git tag -l "$TAG") ]; then
    echo " "
    echo "⚠️  Tag $TAG already exists"
    exit 2
else
    echo " "
    echo "🏷  Tagging repo using tag version: $TAG ..."
    git tag $TAG -m "HMLR Frontend release $TAG"
    git push --tags
    echo "Tag $TAG created and pushed to remote."
fi