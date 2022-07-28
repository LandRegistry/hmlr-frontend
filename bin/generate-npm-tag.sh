#!/bin/sh
set -e

# Extract tag version from ./package/package.json
CURRENT_VERSION=$(node -p "require('./package/package.json').version")
PACKAGE_LOCK_VERSION=$(node -p "require('./package-lock.json').version")

# Get highest tag published on Github
HIGHEST_PUBLISHED_VERSION=$(git tag --list 2>/dev/null | sort -V | tail -n1 2>/dev/null | sed 's/v//g')

function version() { echo "$@" | awk -F. '{ printf("%d%03d%03d\n", $1,$2,$3); }'; }

if [ $CURRENT_VERSION != $PACKAGE_LOCK_VERSION ]; then
  echo " "
  echo "⚠️ Version $CURRENT_VERSION in package/package.json doesn't match version $PACKAGE_LOCK_VERSION in package-lock.json."
  exit 1
elif [ $CURRENT_VERSION == $HIGHEST_PUBLISHED_VERSION ]; then
  echo " "
  echo "⚠️ Git tag $HIGHEST_PUBLISHED_VERSION already exists. Check you have updated the version in package/package.json correctly."
  exit 1
elif [ $(version $CURRENT_VERSION) -ge $(version $HIGHEST_PUBLISHED_VERSION) ]; then
  NPM_TAG="latest"
else
  major_version_num="${CURRENT_VERSION:0:1}"
  NPM_TAG="latest-$major_version_num"
fi