#!/bin/sh
node bin/check-nvmrc.js
rm -fR package
mkdir -p package/hmlr
cp -R src/hmlr/assets src/hmlr/components src/hmlr/settings package/hmlr
npm run build:sass
npm run build:scripts
cp package.json README.md govuk-prototype-kit.config.json package