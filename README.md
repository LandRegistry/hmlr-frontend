# HM Land Registry Frontend Styles

> PRE-ALPHA: Not ready for production use

```
# Setup
nvm use
npm install

# To develop
npm run storybook

# Prettier
npm run prettier

# To build Storybook for production
npm run build-storybook

# To build styles for production
npm run build
```

The GovUK frontend styles don't need to be included as a peer dependency alongside this as they are bundled in with the HM Land Registry styles. This way we can ensure that we are using a compatible version of their frontend.
