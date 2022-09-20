#!/bin/sh
set -e

source ./bin/validate-version.sh

function version() { echo "$@" | awk -F. '{ printf("%d%03d%03d\n", $1,$2,$3); }'; }

if [ $(version $CURRENT_VERSION) -ge $(version $HIGHEST_GIT_TAG) ]; then
  NPM_TAG="latest"
else
  major_version_num="${CURRENT_VERSION:0:1}"
  NPM_TAG="latest-$major_version_num"
fi