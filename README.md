# HM Land Registry Frontend

[![NPM version](https://img.shields.io/npm/v/@hmlr/frontend?style=flat-square)](https://www.npmjs.com/package/@hmlr/frontend)
[![GovUK Frontend version](https://img.shields.io/npm/dependency-version/@hmlr/frontend/govuk-frontend?style=flat-square)](https://www.npmjs.com/package/govuk-frontend)

> 🛑 PRE-ALPHA: Not ready for production use 🛑

```
# Setup
nvm use
npm install

# To develop
npm start

# Test
npm test

# Lint
npm run lint

# Prettier
npm run prettier

# To build Storybook for production
npm run build

# To build styles for production
npm run dist
```

The GovUK frontend styles don't need to be included as a peer dependency alongside this as they are bundled in with the HM Land Registry styles. This way we can ensure that we are using a compatible version of their frontend.
