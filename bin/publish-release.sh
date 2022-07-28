#!/bin/sh
set -e

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
# echo "- check that you're logged in to npm as the correct user"
echo "- publish the package to npm if it has not been published already"
echo "- tag the package on npm with '$NPM_TAG'"
echo "- check that there is not already a Github tag published"
echo "- create a new v$CURRENT_VERSION tag"
echo "- push the tag to remote origin"
# echo "- create a zip file of the 'dist/' directory locally"
echo " "

read -r -p "Do you want to continue? [y/N] " continue_prompt

if [[ $continue_prompt != 'y' ]]; then
    echo "Cancelling release, if this was a mistake, try again and use 'y' to continue."
    exit 0
fi

# echo  "Checking that you can publish to npm..."

# at some point we should create a team and check if user exists in a team
# ! npm team ls developers | grep -q $NPM_USER

# NPM_USER=$(npm whoami)
# if ! [ "govuk-patterns-and-tools" == "$NPM_USER" ]; then
#     echo "⚠️ FAILURE: You are not logged in with the correct user."
#     exit 1
# fi

echo " "
echo "📦  Publishing package..."

# Try publishing
cd package
[ $NPM_TAG = "latest" ] && npm publish --dry-run || npm publish --dry-run --tag $NPM_TAG
echo " "
echo "📫  Package published!"
cd ..

# Extract tag version from ./package/package.json
ALL_PACKAGE_VERSION=$(node -p "require('./package/package.json').version")
TAG="v$ALL_PACKAGE_VERSION"

if [ $(git tag -l "$TAG") ]; then
    echo " "
    echo "⚠️  Tag $TAG already exists"
    exit 1
else
    echo " "
    echo "🏷  Tagging repo using tag version: $TAG ..."
    git tag $TAG -m "HMLR Frontend release $TAG"
    git push --tags
    echo "Tag $TAG created and pushed to remote."

    # echo "🗂 Creating a release artifact..."
    # git archive -o ./release-$TAG.zip HEAD:package
    # # git archive --format=zip HEAD:package > ./release-$TAG.zip
    # echo "Artifact created. Now create a release on GitHub (https://github.com/LandRegistry/hmlr-frontend/releases/new?tag=$TAG) and attach this."
fi