const fs = require("fs");
const packageJson = require("../package.json");

let failure = null;

const packageDirectory = "package";
const checkExists = [
  "package.json",
  "govuk-prototype-kit.config.json",
  "README.md",
  "hmlr",
  "hmlr/assets",
  "hmlr/assets/images/favicon.ico",
  "hmlr/assets/images/hmlr-logo-white.svg",
  "hmlr/components",
  "hmlr/components/header/_header.scss",
  "hmlr/components/header/_index.scss",
  "hmlr/components/header/fixtures.json",
  "hmlr/components/header/header.js",
  "hmlr/components/header/header.mjs",
  "hmlr/components/header/header.stories.js",
  "hmlr/components/header/macro-options.json",
  "hmlr/components/header/macro.njk",
  "hmlr/components/header/template.njk",
  "hmlr/settings",
  "hmlr/tools",
  "hmlr/_base.scss",
  "hmlr/_prototype-kit.scss",
  "hmlr/all.css",
  "hmlr/all.js",
  "hmlr/all.mjs",
  "hmlr/all.scss",
];

console.log(`Testing package file structure`);
try {
  fs.accessSync(packageDirectory);
  console.log(`🟢 [PASS] Package directory exists: ${packageDirectory}`);

  checkExists.forEach((checkFile) => {
    const checkFilePath = `${packageDirectory}/${checkFile}`;

    try {
      fs.accessSync(checkFilePath);
      console.log(
        `🟢 [PASS] ${
          fs.lstatSync(checkFilePath).isDirectory() ? "Directory" : "File"
        } exists: ${checkFilePath}`
      );
    } catch (err) {
      console.error(`🔴 [FAIL] ${err}`);
      failure = 2;
    }
  });
} catch (err) {
  console.error(`🔴 [FAIL] ${err}`);
  failure = 1;
}

console.log("------------------------------------------");

console.log(`Testing package version`);
const compiledPackageJson = require("../package/package.json");
if (packageJson.version === compiledPackageJson.version) {
  console.log(`🟢 [PASS] Version ${packageJson.version} is set in the package`);
} else {
  console.error(
    `🔴 [FAIL] The package version should be ${packageJson.version} but is ${compiledPackageJson.version}`
  );
  failure = 3;
}

console.log("------------------------------------------");

console.log(`Testing prototype kit config`);
const expectedPrototypeKitConfigProperties = [
  "nunjucksPaths",
  "scripts",
  "assets",
  "sass",
];
const prototypeKitConfig = require(`../${packageDirectory}/govuk-prototype-kit.config.json`);
expectedPrototypeKitConfigProperties.forEach(
  (expectedPrototypeKitConfigProperty) => {
    if (
      Object.keys(prototypeKitConfig).includes(
        expectedPrototypeKitConfigProperty
      )
    ) {
      console.log(
        `🟢 [PASS] The prototype kit config contains "${expectedPrototypeKitConfigProperty}"`
      );
    } else {
      console.error(
        `🔴 [FAIL] The prototype kit config is missing "${expectedPrototypeKitConfigProperty}"`
      );
      failure = 4;
    }
  }
);

// TODO: Test CSS and JS for contents

if (failure !== null) {
  process.exit(failure);
}
