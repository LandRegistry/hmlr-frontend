#!/bin/sh
npm run test
rm -fR package
npm run build:sass
npm run build:scripts
cp -R src/hmlr package.json README.md govuk-prototype-kit.config.json package