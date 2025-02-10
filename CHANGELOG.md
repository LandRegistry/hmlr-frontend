# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - yyyy-mm-dd

## [2.1.0-rc.2] - 2025-02-10

### Changed

- Updated `govuk-frontend` to `5.8.0`
- Updated all other dependencies to latest major versions

### Removed

- `node_modules/govuk-frontend/dist` from Sass load-path to resolve prototype kit import path error

## [2.1.0-rc.1] - 2024-12-11

### Changed

- Updated node version from `lts/iron` to `lts/jod`
- Updated `govuk-frontend` to `5.7.1`
- Updated all other dependencies to latest major versions
- Prettier formatted everything
- Added `node_modules/govuk-frontend/dist` to Sass CLI load-path to simplify `@import` statements
- Importing `index.scss` instead of `all.scss` as per guidance: <https://frontend.design-system.service.gov.uk/import-css/#import-using-sass>
- Updated to latest GOV.UK Frontend macro options and test fixtures
- Rewritten how `test-fixtures.js` and `update-fixtures.js` uses `glob` as part of upgrade from v8 to v11

## [2.0.0] - 2024-06-10

No changes since `2.0.0-rc.1`

## [2.0.0-rc.1] - 2024-06-05

### Changed

- Updated `govuk-frontend` to `5.4.0`
- Updated js/css/assets import paths

Thanks to [Ben Lambert](https://github.com/BenLambertNcl)

## [1.4.0] - 2024-02-21

### Fixed

- Import path errors in GOV.UK Prototype Kit

## [1.4.0-rc.1] - 2024-02-20

### Changed

- Updated `govuk-frontend` to `4.8.0`
- Updated npm to v10.x and node to v20.x
- Updated all other dependencies to latest minor versions
- Updated GitHub actions to non-Node 16 actions, to resolve deprecation warnings on build.

## [1.3.1] - 2023-11-09

### Changed

- Updated `govuk-frontend` version to v4.7.0
- Updated npm version to v9.x
- Updated all other dependencies to latest minor versions

## [1.3.0] - 2023-05-23

### Changed

- Updated `govuk-frontend` to `4.6.0`

## [1.2.1] - 2023-02-21

### Changed

- Renamed `hmlr-mask-icon.svg` to `mask-icon.svg`

## [1.2.0] - 2023-02-21

### Added

- Added web assets, such as icons and OG images in order to mirror `govuk-frontend`

### Changed

- Changed the logo in the footer component to an SVG and used CSS filters to change to a grayscale version
- Updated `govuk-frontend` to `4.5.0`
- Updated node dependencies

### Fixed

- Fixed the `govuk-frontend` import path, removing the need to prefix with `node_modules/`

## [1.1.0] - 2022-11-16

### Changed

- Updated node version from `lts/gallium` to `lts/hydrogen`
- Updated `govuk-frontend` to `4.4.0`
- Updated node dependencies

## [1.0.0] - 2022-11-02

First stable release. No changes since `1.0.0-rc2`.

## [1.0.0-rc2] - 2022-10-07

### Added

- Footer component (moved from "Experimental" state)
- Assets added with git LFS

### Changed

- Updated node version from `16.16.0` to `lts/gallium`
- Updated dependencies
- Class of `govuk-header__content--hmlr` added to header

### Fixed

- nunjucks import is fixed for use in the GOV.UK prototype kit
- SASS import is fixed for use in the GOV.UK prototype kit
- Assets now work when used in the GOV.UK prototype kit
- Header spacing fixed to align site name to left of body wrapper

### Removed

- No longer requires specific node version to run scripts

## [1.0.0-rc1] - 2022-09-20

### Added

- Initial header component

[Unreleased]: https://github.com/LandRegistry/hmlr-frontend/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/LandRegistry/hmlr-frontend/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/LandRegistry/hmlr-frontend/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/LandRegistry/hmlr-frontend/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/LandRegistry/hmlr-frontend/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/LandRegistry/hmlr-frontend/compare/v1.0.0-rc2...v1.0.0
[1.0.0-rc2]: https://github.com/LandRegistry/hmlr-frontend/compare/v1.0.0-rc1...v1.0.0-rc2
[1.0.0-rc1]: https://github.com/LandRegistry/hmlr-frontend/releases/tag/v1.0.0-rc1
