#!/bin/sh
set -e
rm -fR package
npm run package:sass
npm run package:scripts
cp -R src/hmlr package.json README.md govuk-prototype-kit.config.json package
