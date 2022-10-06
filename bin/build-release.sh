#!/bin/sh
set -e
npm run test
rm -fR package
npm run build:sass
npm run build:scripts
cp -R src/hmlr package.json README.md govuk-prototype-kit.config.json package
find package/hmlr -type f -name "*.mjs" -exec rm {} \;
mkdir -p package/hmlr-esm
if command -v gcp &> /dev/null
then
    # The gcp comand enables Mac OS to act like GNU's cp command with --parents. Install it with:
    # brew install coreutils
    cd src/hmlr && find . -type f -name "*.mjs" -exec sh -c 'gcp --parents {} ../../package/hmlr-esm' \;
else
    cd src/hmlr && find . -type f -name "*.mjs" -exec sh -c 'cp --parents {} ../../package/hmlr-esm' \;
fi
